const admin = require('firebase-admin');
const moment = require('moment-timezone'); 

const db = admin.firestore();

const simpanRiwayat = async (userId, flashcardId) => {
    try {
        if (!userId || !flashcardId) {
            throw new Error('userId dan flashcardId harus diisi');
        }

        // Ambil waktu sekarang dalam zona WIB
        const wibTimestamp = moment().tz("Asia/Jakarta").format();

        await db.collection('riwayat').doc(userId).set(
            { 
                riwayat: admin.firestore.FieldValue.arrayUnion({
                    flashcardId: flashcardId,
                    timestamp: wibTimestamp, // Simpan waktu dalam format ISO untuk zona WIB
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

                // Ambil data flashcard
                const flashcardDoc = await db.collection('flashcards').doc(flashcardIdTerakhir).get();
                if (flashcardDoc.exists) {
                    const flashcardData = flashcardDoc.data();
                    const { category, languageType, title } = flashcardData;

                    if (riwayatTerakhir.timestamp) {
                        // Konversi timestamp yang disimpan di WIB
                        const formattedTimestamp = moment(riwayatTerakhir.timestamp).tz("Asia/Jakarta").format('MMMM Do YYYY, h:mm:ss a');
                        return { 
                            flashcardId: flashcardIdTerakhir, 
                            timestamp: formattedTimestamp,
                            category,
                            languageType,
                            title
                        };
                    } else {
                        return { 
                            flashcardId: flashcardIdTerakhir, 
                            timestamp: 'Timestamp tidak tersedia',
                            category,
                            languageType,
                            title
                        };
                    }
                } else {
                    throw new Error('Flashcard tidak ditemukan');
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
