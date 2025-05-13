
import {
  getAuth,
  updateProfile,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  updateDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD7L2c0-5mADZIWV_nhOkoFVsIlUAQCWQI",
  authDomain: "math-98433.firebaseapp.com",
  projectId: "math-98433",
  storageBucket: "math-98433.appspot.com",
  messagingSenderId: "820271754279",
  appId: "1:820271754279:web:da130cae80911f3021f202"
};

const auth = getAuth();
const db = getFirestore();

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // gunakan yang sudah ada
}



document.addEventListener("DOMContentLoaded", () => {
  const updateBtn = document.getElementById("submitUpdate");
  const genderSelect = document.getElementById("gender");


  updateBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const user = auth.currentUser;
    if (!user) {
      alert("Silakan login terlebih dahulu.");
      return;
    }

    const firstName = document.getElementById("fName").value.trim();
    const lastName = document.getElementById("lName").value.trim();
    const gender = document.getElementById("gender").value;
    const displayName = `${firstName} ${lastName}`;
    const photoURL = gender === "male" ? "images/pic-1.jpg" : "images/pic-2.jpg";

    try {
      // Update ke Firebase Auth (nama dan foto)
      await updateProfile(user, { displayName, photoURL });

      // Update ke Firestore
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { firstName, lastName, gender, photoURL });

      // Update tampilan
      document.querySelectorAll("img.image").forEach(img => {
        img.src = photoURL;
      })
      document.querySelectorAll(".loggedUserFName").forEach(el => el.textContent = firstName);
      document.querySelectorAll(".loggedUserLName").forEach(el => el.textContent = lastName);


      // Cache
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);

      alert("Profil berhasil diperbarui!");
    } catch (err) {
      console.error("Gagal memperbarui:", err);
      alert("Gagal memperbarui profil.");
    }
  });

  // Jika user login, load nama dari Firestore
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const data = userDoc.data();
        if (data.firstName && data.lastName) {
          document.querySelectorAll(".loggedUserFName").forEach(el => el.textContent = data.firstName);
          document.querySelectorAll(".loggedUserLName").forEach(el => el.textContent = data.lastName);
        }
        if (data.gender) {
          genderSelect.value = data.gender;
          const updatedPhotoURL = data.gender === "male" ? "images/pic-1.jpg" : "images/pic-2.jpg";
          document.querySelectorAll("img.image").forEach(img => {
          img.src = updatedPhotoURL;
          });
        }
      }
    }
  });
});
