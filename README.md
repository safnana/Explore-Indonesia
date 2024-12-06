# Explore Nusantara - OCR Model
This is the Machine Learning Model API, namely the OCR Translate Model. This API is made using Flask.

## API Reference
#### Post Translate

```
  POST /api/translate
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `image`   | `file`   | **Required**. file image |
| `typeLanguage`   | `text`   | **Required**. There are 3 types of language codes available, namely btx (Medan), tpi (Papua), and mak (Makassar)  |


## clone this branch
```
git clone -b API-ML https://github.com/safnana/Explore-Indonesia.git API-ML
cd API-ML
```
## Install Dependencies
```
pip install -r requirements.txt
```

## Initialize and enable API
```
$ gcloud init
$ gcloud services enable run.googleapis.com
```
## build and push image
```
gcloud builds submit --tag gcr.io/<Your-Project-ID>/api-ml
```
## Deploy your model in cloud run
```
gcloud run deploy api-ml \
--image=gcr.io/<YOUR-PROJECT-ID>/api-ml
--allow-unauthenticated \
--memory=2Gi \
--max-instances=1 \
--cpu=1
--region=asia-southeast1 \
--<YOUR-PROJECT-ID>
```
