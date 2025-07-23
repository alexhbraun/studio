// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  projectId: "stridesculpt",
  appId: "1:596337424461:web:203d266d5d4dce8d41c404",
  storageBucket: "stridesculpt.firebasestorage.app",
  apiKey: "AIzaSyBk5oIWJ_ujhPF71He6LgncqAxdmM29cqQ",
  authDomain: "stridesculpt.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "596337424461"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
