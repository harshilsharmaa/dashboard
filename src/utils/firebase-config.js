
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDx9PoI94ariUI44GlkNpSRwt96EcW_V9E",
    authDomain: "frontend-9eb95.firebaseapp.com",
    projectId: "frontend-9eb95",
    storageBucket: "frontend-9eb95.appspot.com",
    messagingSenderId: "690465094414",
    appId: "1:690465094414:web:b66bc556c1ef3006b6b55f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export { app }