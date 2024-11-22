const express = require('express');
const admin = require("firebase-admin");
const credentials = require("./backend-73491-firebase-adminsdk-su5he-21aa383fd3.json");
const FAQRoutes = require("./routes/FAQRoute");
const quizRoutes = require("./routes/quizRoute");

const app = express();

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

const db = admin.firestore();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRoute = require('./authRoute'); 
app.use('/auth', authRoute);

app.use(express.json());

app.use("/api/FAQ", FAQRoutes);
app.use("/api/quiz", quizRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
