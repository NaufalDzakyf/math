// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "API_KEY_KAMU",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const genderSelect = document.getElementById("gender");
  const profileImagePreview = document.getElementById("profileImagePreview");

  // Ganti gambar profil berdasarkan gender
  genderSelect.addEventListener("change", () => {
    const selectedGender = genderSelect.value;
    if (selectedGender === "male") {
      profileImagePreview.src = "images/pic-1.png";
    } else if (selectedGender === "female") {
      profileImagePreview.src = "images/pict-2.png";
    }
  });

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const email = document.getElementById("email").value;
    const oldPass = document.getElementById("old_pass").value;
    const newPass = document.getElementById("new_pass").value;
    const confirmPass = document.getElementById("c_pass").value;
    const gender = document.getElementById("gender").value;

    if (newPass !== confirmPass) {
      alert("Password tidak cocok!");
      return;
    }

    // Gunakan gambar default berdasarkan gender
    const photoURL = gender === "male" ? "images/pic-1.png" : "images/pict-2.png";

    try {
      await db.collection("users").doc(email).set({
        fName,
        lName,
        email,
        gender,
        oldPassword: oldPass,
        newPassword: newPass,
        photoURL,
        updatedAt: new Date()
      });

      alert("Profil berhasil diperbarui!");
      profileImagePreview.src = photoURL;

    } catch (err) {
      console.error("Gagal:", err);
      alert("Gagal memperbarui profil.");
    }
  });
});
