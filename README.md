# ExploreIndonesia - Backend.
<ul>
  <li><b><a href="https://github.com/safnana/Explore-Indonesia.git"> Backend & API Explore Nusantara</a></b></li>
  <ul>
    <li><b><a href="https://github.com/safnana/Explore-Indonesia/blob/main/README.md#backend-and-cloud-architecture">Cloud Architecture</a></b></li>
    <li><b><a href="">Documentation</a></b></li>
    <li><b><a href="https://github.com/safnana/Explore-Indonesia/blob/main/README.md#teck-stack">Tech Stack</a></b></li>
    <li><b><a href="https://github.com/safnana/Explore-Indonesia/blob/main/README.md#dependencies">Dependencies</a></b></li>
    <li><b><a href="https://github.com/safnana/Explore-Indonesia/blob/main/README.md#code-configuration">Code Configuration</a></b></li>
    <li><b><a href="https://github.com/safnana/Explore-Indonesia/blob/main/README.md#service-account-configuration">Service Account Configuration</a></b></li>
    <li><b><a href="https://github.com/safnana/Explore-Indonesia/blob/main/README.md#local-development">Local Development</a></b></li>
    <li><b><a href="https://github.com/safnana/Explore-Indonesia/blob/main/README.md#configuration-for-cloud-function">Configuration for Cloud Function</a></b></li>
    <li><b><a href="https://github.com/safnana/Explore-Indonesia/blob/main/README.md#deployment-to-google-cloud-platform">Deployment To Google Cloud Platform</a></b></li>
    <li><b><a href="https://github.com/safnana/Explore-Indonesia/blob/main/README.md#public-api">Public API</a></b></li>
  </ul>
</ul>

## ExploreIndonesia.
ExploreIndonesia-Backend adalah komponen backend ExploreIndonesia, aplikasi untuk memperkenalkan budaya dan sejarah yang ada di indo

## Backend and Cloud Architecture.
![Backend and Cloud Design Architecture](https://github.com/user-attachments/assets/7bbcb493-f238-4138-b461-9d2b0dbe5af2)

## Teck Stack.
* Express.js
* Firebase
* Google Cloud Platform (GCP) services:
    * Cloud Functions
    * App Engine
    * Google Cloud Vision API
    * Google Translate API
    * Pub/Sub
    * Cloud Storage/Buckets 1

## Dependencies.
* @google-cloud/pubsub: 4.9.0
* @google-cloud/storage: 7.14.0
* axios: 1.7.7
* cors: 2.8.5
* dotenv: 16.4.5
* express: 4.21.1
* express-validator: 7.2.0
* firebase-admin: 13.0.0
* moment: 2.30.1
* multer: 1.4.5-lts.1
* nodemon: 3.1.7

## Code Configuration.
To run this project, you will need to add the following environment variables to your `.env` file:
### *Express Server Configuration.
```
PORT=YOUR-PORT
HOST=YOUR-HOST
HOST_URL=http://YOUR-HOST:YOUR-PORT
```
### *Firebase Database Configuration.
To obtain the required configuration, create a Firebase project and retrieve the following details:
```
FIREBASE_PROJECT_ID=project-id
FIREBASE_CLIENT_EMAIL=client-email
FIREBASE_PRIVATE_KEY=private-key
```

## Service Account Configuration.
* Firebase Service Account
```
- Create your firebase project
- Download your service account and copy in serviceAccount-firebase-key.json
```
* Bucket Service Account
```
- Create your cloud bucket
- Create service account and copy in serviceAccount-image-key.json
```

## Local Development.
Follow these steps to run the ExploreIndonesia - Backendd locally:

Clone the project, navigate to the project directory, and install dependencies
```
https://github.com/safnana/Explore-Indonesia.git
cd Explore-Indonesia
npm install
```
Start the server
```
npm run start
```

## Configuration for Cloud Function.
To configure the Calorify-Backend for deployment to Google Cloud Functions, follow these steps

Install the Firebase CLI:
```
npm install -g firebase-tools
```
Navigate to the project directory and initialize Firebase
```
cd Explore-Indonesia/firebasefunction
firebase init
```
Change to the Functions directory, install dependencies, and go back to the project directory
```
cd Functions
npm install
cd ../
```
Deploy your code to cloud function
```
firebase deploy --only functions
```

## Deployment to Google Cloud Platform
Clone the project, navigate to the project directory, and install dependencies
```
https://github.com/safnana/Explore-Indonesia.git
cd Calorify
npm install
```
Deploy to App Engine
```
gcloud app deploy
```

## Public API

<ul>
  <li><b><a href="https://cloud.google.com/vision/docs?hl=id"> Vision API</a></b></li>
  <li><b><a href="https://cloud.google.com/translate/docs/reference/rest/"> Translate API</a></b></li>
  <ul>
