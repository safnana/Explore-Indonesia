const admin = require("firebase-admin");

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(403).json({ message: "Unauthorized" });
    }
    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken; // Menyimpan data pengguna di req.user
        next(); // Melanjutkan ke middleware/rute berikutnya
    } catch (error) {
        res.status(401).json({ message: "Token tidak valid", error: error.message });
    }
};

module.exports = { authenticate };
