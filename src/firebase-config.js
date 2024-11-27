// src/firebase-config.js
// Import necessary modules from Firebase v9+ modular SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For Firestore
import { getAuth } from "firebase/auth"; // For Authentication
import { getStorage } from "firebase/storage"; // For Storage

// Firebase configuration object from Firebase Console
const firebaseConfig = {
	apiKey: "AIzaSyAfAFYZ5I-CxKd_xR3uao_Yo4nx8VgmOK0",
	authDomain: "onlaw-landing-page.firebaseapp.com",
	projectId: "onlaw-landing-page",
	storageBucket: "onlaw-landing-page.firebasestorage.app",
	messagingSenderId: "213402107409",
	appId: "1:213402107409:web:951c387511e72d91ab7bb0",
	measurementId: "G-EER1T0GCHM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore, Auth, and Storage
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Export Firebase services for use in your app
export { db, auth, storage };
