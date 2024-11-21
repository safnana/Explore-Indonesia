const admin = require("firebase-admin");
const db = admin.firestore();

const register = async (req, res) => {
    try {
        const { fullname, username, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Password dan confirm password tidak cocok' });
        }

        const userRecord = await admin.auth().createUser({ email, password });
        await db.collection('users').doc(userRecord.uid).set({ fullname, email, password, username });

        res.status(201).json({ message: 'Registrasi berhasil' });
    } catch (error) {
        res.status(500).json({ message: 'Error', error: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userCredential = await admin.auth().getUserByEmail(email);
        const idToken = await admin.auth().createCustomToken(userCredential.uid);

        await db.collection('users').doc(userCredential.uid).update({
            lastSignedIn: admin.firestore.FieldValue.serverTimestamp()
        });

        res.status(200).json({ token: idToken });
    } catch (error) {
        res.status(401).json({ message: 'Invalid credentials' });
    }
}

const getUser = async (req, res) => { 
    try {
        const usersRef = db.collection("users");
        const response = await usersRef.get();
        let responseArr = [];
        response.forEach(doc => {
            responseArr.push(doc.data());
        });
        res.send(responseArr);
    } catch (error) {
        res.send(error);
    }
}

const logout = async (req, res) => {
    res.status(200).json({ message: "Logout Berhasil" });
}

module.exports = { register, login, getUser, logout };