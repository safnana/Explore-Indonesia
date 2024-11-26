# ExploreIndonesia - Backend.
<ul>
  <li><b><a href="https://github.com/safnana/Explore-Indonesia.git"> Backend & API Explore Nusantara</a></b></li>
  <ul>
    <li><b><a>Cloud Architecture</a></b></li>
    <li><b>Documentation</b></li>
    <li><b>Tech Stack</b></li>
    <li><b>Dependencies</b></li>
    <li><b>Code Configuration</b></li>
    <li><b>Service Account Configuration</b></li>
    <li><b>Local Development</b></li>
    <li><b>Configuration for Cloud Function</b></li>
    <li><b>Deployment To Google Cloud Platform</b></li>
    <li><b>Public API</b></li>
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

### Express Server Configuration
```javascript
`PORT= YOUR-PORT`
`HOST= YOUR-HOST`
`HOST_URL= http://YOUR-HOST:YOUR-PORT`
