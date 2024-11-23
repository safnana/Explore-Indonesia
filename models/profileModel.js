const { db } = require("../config/db");

const Profile = {
  getProfile: async (userID) => {
    const Profile = await db.collection("users").doc(userID).get();
    if (!Profile.exists) {
      return null;
    }
    return { id: Profile.id, ...Profile.data() };
  },
  updateProfile: async (userID, updateData) => {
    const Profile = await db.collection("users").doc(userID);
    await Profile.update(updateData);
    const updateProfile = await Profile.get();
    return { id: updateProfile.id, ...updateProfile.data() };
  },
};

module.exports = Profile;
