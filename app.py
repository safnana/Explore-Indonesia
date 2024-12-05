import os
import json
import tensorflow as tf
import numpy as np
import cv2
from flask import Flask, request, jsonify
from google.cloud import storage
from google.cloud import translate_v2 as translate

app = Flask(__name__)
def download_blob(bucket_name, source_blob_name, destination_file_name):
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(source_blob_name)
    blob.download_to_filename(destination_file_name)

def load_model_from_gcs():
    bucket_name = 'model-ml-ocr'
    model_blob_name = 'model.h5'
    labelmapping_blob_name = 'label_mapping.json'
    model_path = 'model.h5'
    labelmapping_path = 'label_mapping.json'
    download_blob(bucket_name, model_blob_name, model_path)
    download_blob(bucket_name, labelmapping_blob_name, labelmapping_path)
    model = tf.keras.models.load_model(model_path)
    with open(labelmapping_path) as f:
        label_mapping = json.load(f)
    return model, label_mapping

model, label_mapping = load_model_from_gcs()
translate_client = translate.Client()

def detect_text_from_image(image_bytes):
    image = tf.image.decode_image(image_bytes, channels=1)
    image = tf.image.resize(image, [28, 28])  
    image = image / 255.0
    image = tf.expand_dims(image, axis=0)
    predictions = model.predict(image)
    predictedText = decode_predictions(predictions)
    return predictedText

def detect_and_merge_text(image_path):
    image = cv2.imread(image_path)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    results = []
    for contour in contours:
        x, y, w, h = cv2.boundingRect(contour)
        if w * h < 100:
            continue
        roi = thresh[y:y+h, x:x+w]
        size = max(w, h)
        square = np.zeros((size, size), dtype=np.uint8)
        offset_x = (size - w) // 2
        offset_y = (size - h) // 2
        square[offset_y:offset_y+h, offset_x:offset_x+w] = roi
        scaled = cv2.resize(square, (28, 28))
        scaled = scaled.reshape(1, 28, 28, 1).astype('float32') / 255.0
        pred = model.predict(scaled)
        label_idx = np.argmax(pred[0])
        confidence = pred[0][label_idx]
        results.append({
            'char': label_mapping[str(label_idx)],
            'confidence': float(confidence),
            'position': (x, y, w, h)
        })
    results = sorted(results, key=lambda r: r['position'][0])
    detectedText = ''.join([result['char'] for result in results])
    return detectedText

def translateText(text, target_language, source_language):
    result = translate_client.translate(text, target_language=target_language, source_language=source_language)
    return result['translatedText']

@app.route('/api/translate', methods=['POST'])
def translate_image():
    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'Tidak ada gambar untuk dideteksi'}), 400
    image_bytes = file.read()
    temp_path = 'tempImage.png'
    with open(temp_path, 'wb') as f:
        f.write(image_bytes)
    detectedText = detect_and_merge_text(temp_path)
    if not detectedText:
        return jsonify({'error': 'Teks tidak terdeteksi'}), 400
    source_language = request.form.get('typeLanguage')
    target_language = 'id'
    translatedText = translateText(detectedText, target_language, source_language)
    os.remove(temp_path)
    return jsonify({
        'Hasil deteksi': detectedText,
        'Hasil translate': translatedText
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
