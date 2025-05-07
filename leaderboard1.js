// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD7L2c0-5mADZIWV_nhOkoFVsIlUAQCWQI",
  authDomain: "math-98433.firebaseapp.com",
  projectId: "math-98433",
  storageBucket: "math-98433.firebasestorage.app",
  messagingSenderId: "820271754279",
  appId: "1:820271754279:web:da130cae80911f3021f202"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// ==== LEADERBOARD ====
const form = document.getElementById('scoreForm');
const leaderboardList = document.getElementById('leaderboard');

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    alert("Silakan login terlebih dahulu.");
    form.style.display = "none";
    return;
  }

  const userUID = user.uid;
  const userDocRef = doc(db, "leaderboard_populasi", userUID);
  const userDocSnap = await getDoc(userDocRef);

  if (userDocSnap.exists()) {
    // Sudah pernah submit
    form.innerHTML = `<p>Anda sudah mengirim skor.</p>`;
  } else {
    // Belum pernah submit, izinkan pengisian
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = user.email; // atau user.displayName jika tersedia
      const score = parseInt(document.getElementById('score').value);

      if (!isNaN(score)) {
        try {
          await setDoc(doc(db, "leaderboard_populasi", userUID), {
            name,
            score,
            created_at: serverTimestamp()
          });
          form.innerHTML = `<p>Skor berhasil dikirim!</p>`;
        } catch (error) {
          console.error("Error adding score:", error);
        }
      }
    });
  }

  // Tampilkan leaderboard
  const leaderboardQuery = query(
    collection(db, "leaderboard_populasi"),
    orderBy("score", "desc"),
    limit(10)
  );

  onSnapshot(leaderboardQuery, (snapshot) => {
    leaderboardList.innerHTML = "";
    snapshot.forEach((doc) => {
      const data = doc.data();
      const li = document.createElement("li");
      li.textContent = `${data.name}: ${data.score}`;
      leaderboardList.appendChild(li);
    });
  });
});