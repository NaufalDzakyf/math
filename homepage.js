import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

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

const updateAllElements = (className, value) => {
    document.querySelectorAll(`.${className}`).forEach(el => el.innerText = value);
};

onAuthStateChanged(auth, (user) => {
    const loggedInUserId = localStorage.getItem('loggedInUserID');
    if (loggedInUserId) {
        const docRef = doc(db, 'users', loggedInUserId);
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    updateAllElements('loggedUserFName', userData.firstName);
                    updateAllElements('loggedUserLName', userData.lastName);
                    updateAllElements('loggedUserEmail', userData.email);
                    const profileImages = document.querySelectorAll('.profile img')
                    if (userData.gender === 'female') {
                        profileImages.forEach(img => img.src = 'images/pic-2.jpg');
                    }else {
                        profileImages.forEach(img => img.src = 'images/pic-1.jpg')
                    }
                } else {
                    console.log("No document found matching ID");
                }
            })
            .catch((error) => {
                console.log('Error getting document:', error);
            });
    } else {
        console.log("User ID not found in localStorage");
    }
});

// Delegated logout listener
document.body.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'logout') {
        localStorage.removeItem('loggedInUserID');
        signOut(auth)
            .then(() => {
                window.location.href = 'index.html';
            })
            .catch((error) => {
                console.error('Error during logout:', error);
            });
    }
});
