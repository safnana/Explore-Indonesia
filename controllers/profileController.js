const { storage, bucket } = require("../config/storage");
const Profile = require("../models/profileModel");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

const getProfilebyID = async (req, res) => {
  const userID = req.params.userID;
  try {
    const profile = await Profile.getProfile(userID);
    if (!profile) {
      return res.status(404).json({ message: "Profile Tidak Ditemukan" });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: "Gagal Mengambil Data", error });
  }
};

const uploadPicture = upload.single("picture");

const putProfilebyID = async (req, res) => {
  const userID = req.params.userID;
  try {
    const { username, fullname } = req.body;
    const picture = req.file;
    let profileURL;

    if (picture) {
      const fileName = `${userID}_${Date.now()}`;
      const file = bucket.file(fileName);

      await file.save(picture.buffer, {
        metadata: {
          contentType: picture.mimetype,
        },
      });

      profileURL = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
    }

    const updateData = {
      ...(username && { username }),
      ...(fullname && { fullname }),
      ...(profileURL && { profileURL }),
      updatedAt: new Date().toISOString(),
    };

    const updateProfile = await Profile.updateProfile(userID, updateData);
    res.status(200).json({ message: "Profile Berhasil Diperbarui", data: updateProfile });
  } catch (error) {
    res.status(500).json({ message: "Gagal Memperbarui Profile", error });
  }
};

module.exports = { getProfilebyID, uploadPicture, putProfilebyID };
