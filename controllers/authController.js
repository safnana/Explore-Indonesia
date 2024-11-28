const admin = require("firebase-admin");
const { db } = require("../config/db");
const { validationResult } = require("express-validator");

const register = async (req, res) => {
    try {
        const { fullname, username, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password dan confirm password tidak cocok" });
        }

        const userRecord = await admin.auth().createUser({ email, password });
        await db.collection("users").doc(userRecord.uid).set({
            email,
            fullname,
            username,
            created: admin.firestore.FieldValue.serverTimestamp(),
        });

        res.status(201).json({ message: "Registrasi berhasil" });
    } catch (error) {
        res.status(500).json({ message: "Error", error: error.message });
    }
};

const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email } = req.body;

        const userCredential = await admin.auth().getUserByEmail(email);
        const idToken = await admin.auth().createCustomToken(userCredential.uid);
        const userId = userCredential.uid;

        await db.collection("users").doc(userCredential.uid).update({
            lastSignedIn: admin.firestore.FieldValue.serverTimestamp(),
        });

        res.status(200).json({ token: idToken, userId: userId });
    } catch (error) {
        res.status(401).json({ message: "Invalid credentials" });
    }
};

const logout = async (req, res) => {
    try {
        const { uid } = req.body;
        await admin.auth().revokeRefreshTokens(uid);
        res.status(200).json({ message: "Logout berhasil" });
    } catch (error) {
        res.status(500).json({ message: "Error saat logout", error: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const usersRef = db.collection("users");
        const response = await usersRef.get();
        const responseArr = [];
        response.forEach((doc) => {
            responseArr.push(doc.data());
        });
        res.status(200).json(responseArr);
    } catch (error) {
        res.status(500).json({ message: "Error saat mengambil data pengguna", error: error.message });
    }
};

module.exports = { register, login, getUser, logout };
