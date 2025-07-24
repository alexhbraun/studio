
// src/lib/firebase.ts
import { initializeApp, getApps, getApp, FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";

// --- IMPORTANT ---
// Replace this with your actual Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBk5oIWJ_ujhPF71He6LgncqAxdmM29cqQ",
  authDomain: "stridesculpt.firebaseapp.com",
  projectId: "stridesculpt",
  storageBucket: "stridesculpt.firebasestorage.app",
  messagingSenderId: "596337424461",
  appId: "1:596337424461:web:203d266d5d4dce8d41c404"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
