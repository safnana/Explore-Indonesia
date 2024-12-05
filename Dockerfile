FROM python:3.10..16

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . .

ENV PYTHONUNBUFFERED=1

ENV HOST 0.0.0.0

EXPOSE 5000

CMD ["python", "app.py"]