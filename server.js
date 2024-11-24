const express = require('express');
const admin = require("firebase-admin");
const FAQRoutes = require("./routes/FAQRoute");
const quizRoutes = require("./routes/quizRoute");
const flashcardsRoutes = require("./routes/flashcardsRoute");
const authRoute = require('./routes/authRoute'); 
const riwayatRoutes = require('./routes/riwayatRoute'); 
const profileRoutes = require("./routes/profileRoute");

const app = express();

const db = admin.firestore();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoute);
app.use('/api', riwayatRoutes);
app.use("/api/FAQ", FAQRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/flashcards", flashcardsRoutes);
app.use("/api/profile", profileRoutes);

app.get("/api/protected", authenticate, (req, res) => {
    res.status(200).json({ message: "Anda berhasil mengakses rute yang dilindungi", user: req.user });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
