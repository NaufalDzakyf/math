// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7L2c0-5mADZIWV_nhOkoFVsIlUAQCWQI",
  authDomain: "math-98433.firebaseapp.com",
  projectId: "math-98433",
  storageBucket: "math-98433.firebasestorage.app",
  messagingSenderId: "820271754279",
  appId: "1:820271754279:web:da130cae80911f3021f202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// ==== LEADERBOARD ====
const form = document.getElementById('scoreForm');
const leaderboardList = document.getElementById('leaderboard');

if (form && leaderboardList) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const score = parseInt(document.getElementById('score').value);

    if (name && !isNaN(score)) {
      try {
        await addDoc(collection(db, "leaderboard_pemusatan_data"), {
          name,
          score,
          created_at: serverTimestamp()
        });
        form.reset();
      } catch (error) {
        console.error("Error adding score:", error);
      }
    }
  });

  const leaderboardQuery = query(
    collection(db, "leaderboard_pemusatan_data"),
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
}
