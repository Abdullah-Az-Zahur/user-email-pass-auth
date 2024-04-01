// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpY1PNZEEI3pL30vyVslz9ahP6WJzDxsI",
    authDomain: "user-email-pass-auth-7ca54.firebaseapp.com",
    projectId: "user-email-pass-auth-7ca54",
    storageBucket: "user-email-pass-auth-7ca54.appspot.com",
    messagingSenderId: "808332565113",
    appId: "1:808332565113:web:2636f92d1cbb489d8712a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;