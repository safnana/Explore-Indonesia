const express = require('express');
const {getFlashcardAll, getFlashcardbyCategory, getFlashcardbyjenisBahasa} = require ('.../controller/api/flashcardController');
const {getQuizAll, getQuizbyCategory, getQuizbyjenisBahasa} = require ('.../controller/api/quizController');
const {getProfile, updateProfile} = require ('.../controller/api/profileController');
const router = express.Router();

router.get('/flashcard', getFlashcardAll);
router.get('/flashcard/:category', getFlashcardbyCategory);
router.get('/flashcard/:jenisBahasa', getFlashcardbyjenisBahasa);

router.get('/quiz', getQuizAll);
router.get('/quiz/:category', getQuizbyCategory);
router.get('/quiz/:jenisBahasa', getQuizbyjenisBahasa);

router.get('/profile/:userID', getProfile);
router.put('/profile/:userID', updateProfile);

module.exports = router;
