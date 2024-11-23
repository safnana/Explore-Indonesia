const admin = require('firebase-admin');
const moment = require('moment');

const db = admin.firestore();

const simpanRiwayat = async (userId, flashcardId) => {
    try {

        if (!userId || !flashcardId) {
            throw new Error('userId dan flashcardId harus diisi');
        }

        await db.collection('riwayat').doc(userId).set(
            { 
                riwayat: admin.firestore.FieldValue.arrayUnion({
                    flashcardId: flashcardId,
                    timestamp: new Date()
                }),
            }, 
            { merge: true }
        );

        console.log('Riwayat berhasil disimpan!');
        } catch (error) {
        console.error('Error menyimpan riwayat:', error); 
        throw error; 
    }
};

const ambilRiwayatTerakhir = async (userId) => {
    try {
        const doc = await db.collection('riwayat').doc(userId).get();
        if (doc.exists) {
            const riwayat = doc.data().riwayat;
            if (riwayat && riwayat.length > 0) {
                const riwayatTerakhir = riwayat[riwayat.length - 1];
                const flashcardIdTerakhir = riwayatTerakhir.flashcardId;

                if (riwayatTerakhir.timestamp && riwayatTerakhir.timestamp.toDate) {
                    const timestamp = riwayatTerakhir.timestamp.toDate();
                    const formattedTimestamp = moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
                    return { flashcardId: flashcardIdTerakhir, timestamp: formattedTimestamp };
                    } else {
                    return { flashcardId: flashcardIdTerakhir, timestamp: 'Timestamp tidak tersedia' };
                    }
            } else {
            throw new Error('Tidak ada riwayat untuk pengguna ini');
            }
            } else {
            throw new Error('Tidak ada riwayat untuk pengguna ini');
            }
        } catch (error) {
        console.error('Error mengambil riwayat:', error);
        throw error;
    }
};

module.exports = { simpanRiwayat, ambilRiwayatTerakhir };