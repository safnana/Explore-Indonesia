FROM python:3.10.16

RUN apt-get update && \
    apt-get install -y \
    libgl1-mesa-glx \
    libglib2.0-0 \
    libsm6 \
    libxrender1 \
    libxext6

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .

ENV PYTHONUNBUFFERED=1
ENV HOST=0.0.0.0

EXPOSE 5000

CMD ["python", "app.py"]
