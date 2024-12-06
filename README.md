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
    <li><b><a href="https://github.com/safnana/Explore-Indonesia/blob/main/README.md#deployment-to-google-cloud-platform">Deployment To Google Cloud Platform</a></b></li>
    <li><b><a href="https://github.com/safnana/Explore-Indonesia/blob/main/README.md#public-api">Public API</a></b></li>
  </ul>
</ul>

## ExploreIndonesia.
ExploreIndonesia-Backend adalah komponen backend ExploreIndonesia, aplikasi untuk memperkenalkan budaya dan sejarah yang ada di indo

## Backend and Cloud Architecture.

![Backend and Cloud Architecture](https://github.com/user-attachments/assets/2cbad4c6-6407-4993-af50-8f606adfa6e2)



## Teck Stack.
* Express.js
* Firebase
* Google Cloud Platform (GCP) services:
    * App Engine
    * Cloud Run
    * Firestore
    * Google Translate API
    * Cloud Storage

## Dependencies.
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
* Express Server Configuration.
```
PORT=YOUR-PORT
HOST=YOUR-HOST
HOST_URL=http://YOUR-HOST:YOUR-PORT
```
* Firebase Database Configuration.
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
git clone https://github.com/safnana/Explore-Indonesia.git
cd Explore-Indonesia
npm install
```
Start the server
```
npm run start
```

## Deployment to Google Cloud Platform
Clone the project, navigate to the project directory, and install dependencies
```
git clone https://github.com/safnana/Explore-Indonesia.git
cd Explore-Indonesia
npm install
```
Deploy to App Engine
```
gcloud app deploy
```

## Public Api
<ul>
  <li><b><a href="https://cloud.google.com/translate/docs/reference/rest/">Google Translate API</a></b></li>
</ul>
