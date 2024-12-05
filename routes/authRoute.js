const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const authController = require("../controllers/authController");

router.post(
    "/register",
    [
        body("email").isEmail().withMessage("Email tidak valid"),
        body("password").isLength({ min: 6 }).withMessage("Password minimal 6 karakter"),
    ],
    authController.register
);

router.post(
    "/login",
    [
        body("email").isEmail().withMessage("Email tidak valid"),
        body("password").notEmpty().withMessage("Password wajib diisi"),
    ],
    authController.login
);

router.get("/user", (req, res) => {
    res.status(200).json({ message: "Anda berhasil mengakses rute yang dilindungi", user: req.user });
});

router.post("/logout", authController.logout);
router.get("/getuser", authController.getUser);

module.exports = router;
