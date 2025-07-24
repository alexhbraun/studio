// src/lib/firebase.ts
import { initializeApp, getApps, getApp, FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBk5oIWJ_ujhPF71He6LgncqAxdmM29cqQ",
  authDomain: "slimwalk.firebaseapp.com",
  projectId: "slimwalk-123",
  storageBucket: "slimwalk-123.appspot.com",
  messagingSenderId: "596337424461",
  appId: "1:596337424461:web:203d266d5d4dce8d41c404"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);

export { app, auth };
