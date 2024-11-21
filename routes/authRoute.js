const express = require('express');
const router = express.Router();
const authController = require('./authController'); 


router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/getuser', authController.getUser); 
router.post('/logout', authController.logout);

module.exports = router;