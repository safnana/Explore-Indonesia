const express = require('express');
const router = express.Router();
const riwayatController = require('../controllers/riwayatController');

router.post('/riwayat', async (req, res) => {
    try {
        const { userId, flashcardId } = req.body;
        await riwayatController.simpanRiwayat(userId, flashcardId);
        res.status(200).send({ message: 'Riwayat berhasil disimpan!' });
    } catch (error) {
        res.status(500).send({ 
            message: 'Error menyimpan riwayat',
            error: error.message 
        });
    }
});

router.get('/riwayat/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const riwayat = await riwayatController.ambilRiwayatTerakhir(userId);
        res.status(200).send(riwayat);
    } catch (error) {
        res.status(500).send({ 
            message: 'Error mengambil riwayat', 
            error: error.message 
        });
    }
});

module.exports = router;
