const express = require("express");
const cors = require("cors");
const authRoute = require('./routes/authRoute'); 
const quizRoutes = require("./routes/quizRoute");
const FAQRoutes = require("./routes/FAQRoute");
const flashcardsRoutes = require("./routes/flashcardsRoute");
const profileRoutes = require("./routes/profileRoute");
const riwayatRoutes = require('./routes/riwayatRoute'); 
const {authenticate} = require("./middleware/authMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Alhamdullilah');
});

app.use('/api/auth', authRoute);
app.use("/api/quiz", quizRoutes);
app.use("/api/FAQ", FAQRoutes);
app.use("/api/flashcards", flashcardsRoutes);
app.use("/api/profile", profileRoutes);
app.use('/api', riwayatRoutes);
app.use("/api/protected", authenticate);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
