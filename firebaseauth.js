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

// Utility: show popup message
function showMessage(message, divId) {
  const messageDiv = document.getElementById(divId);
  messageDiv.style.display = 'block';
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(() => {
    messageDiv.style.opacity = 0;
  }, 5000);
}

// ==== SIGN UP ====
const signUp = document.getElementById('submitSignUp');
if (signUp) {
  signUp.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('rEmail').value;
    const password = document.getElementById('rPassword').value;
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          email,
          firstName,
          lastName
        };
        showMessage('Account created successfully', 'signUpMessage');
        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, userData)
          .then(() => {
            window.location.href = "index.html";
          })
          .catch((error) => {
            console.error('Error writing document', error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/email-already-in-use') {
          showMessage('Email address already exists!', 'signUpMessage');
        } else {
          showMessage('Unable to create user', 'signUpMessage');
        }
      });
  });
}

// ==== SIGN IN ====
const signIn = document.getElementById('submitSignIn');
if (signIn) {
  signIn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        showMessage('Login successful', 'signInMessage');
        const user = userCredential.user;
        localStorage.setItem('loggedInUserID', user.uid);
        window.location.href = 'beranda.html';
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/invalid-credential') {
          showMessage('Incorrect email or password', 'signInMessage');
        } else {
          showMessage('Account does not exist', 'signInMessage');
        }
      });
  });
}
