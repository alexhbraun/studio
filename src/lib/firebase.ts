
// src/lib/firebase.ts
import { initializeApp, getApps, getApp, FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";

// IMPORTANT: Replace the placeholder values with your actual Firebase project configuration.
// You can find this in your Firebase project settings.
const firebaseConfig: FirebaseOptions = {
  apiKey: "YOUR_API_KEY", // Replace with your API Key
  authDomain: "stridesculpt.firebaseapp.com",
  projectId: "stridesculpt",
  storageBucket: "stridesculpt.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // Replace with your Messaging Sender ID
  appId: "YOUR_APP_ID" // Replace with your App ID
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
