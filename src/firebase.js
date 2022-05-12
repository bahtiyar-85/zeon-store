
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDzi3HPf7w4y2q97zAf72HX4QrjL2uUoLY",
  authDomain: "zeon-store.firebaseapp.com",
  databaseURL: "https://zeon-store-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "zeon-store",
  storageBucket: "zeon-store.appspot.com",
  messagingSenderId: "18324421857",
  appId: "1:18324421857:web:53e2a1f5da8869c5eb4ba0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;