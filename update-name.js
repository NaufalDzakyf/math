// updateName.js
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

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD7L2c0-5mADZIWV_nhOkoFVsIlUAQCWQI",
  authDomain: "math-98433.firebaseapp.com",
  projectId: "math-98433",
  storageBucket: "math-98433.firebasestorage.app",
  messagingSenderId: "820271754279",
  appId: "1:820271754279:web:da130cae80911f3021f202"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Saat halaman siap
document.addEventListener("DOMContentLoaded", () => {
  const updateBtn = document.getElementById("submitUpdate");

  // Tampilkan nama dari cache jika ada
  const cachedF = localStorage.getItem("firstName");
  const cachedL = localStorage.getItem("lastName");
  if (cachedF && cachedL) {
    updateDOMName(cachedF, cachedL);
  }

  // Saat tombol update ditekan
  updateBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const user = auth.currentUser;
    if (!user) {
      alert("Silakan login terlebih dahulu.");
      return;
    }

    const firstName = document.getElementById("fName").value.trim();
    const lastName = document.getElementById("lName").value.trim();
    const displayName = `${firstName} ${lastName}`;

    try {
      // Update ke Firebase Auth
      await updateProfile(user, { displayName });

      // Update ke Firestore
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { firstName, lastName });

      // Update tampilan langsung
      updateDOMName(firstName, lastName);

      // Cache
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);

      alert("Nama berhasil diperbarui!");
    } catch (err) {
      console.error("Update gagal:", err);
      alert("Gagal memperbarui nama.");
    }
  });

  // Saat login, muat nama dari Firestore jika belum ada di localStorage
  onAuthStateChanged(auth, async (user) => {
    if (user && !cachedF) {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const data = userDoc.data();
        if (data.firstName && data.lastName) {
          updateDOMName(data.firstName, data.lastName);
          localStorage.setItem("firstName", data.firstName);
          localStorage.setItem("lastName", data.lastName);
        }
      }
    }
  });
});

// Fungsi untuk update isi <span>
function updateDOMName(firstName, lastName) {
  document.querySelectorAll(".loggedUserFName").forEach(el => el.textContent = firstName);
  document.querySelectorAll(".loggedUserLName").forEach(el => el.textContent = lastName);
}
