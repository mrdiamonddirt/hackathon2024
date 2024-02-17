import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdO_r8GpR5i7QXPTGqIGdv1It3Gs1sciA",
  authDomain: "adriana-5160c.firebaseapp.com",
  projectId: "adriana-5160c",
  storageBucket: "adriana-5160c.appspot.com",
  messagingSenderId: "753527466482",
  appId: "1:753527466482:web:023cffd5e92f2f3ade236b",
  measurementId: "G-J10HT0HPFZ"
};

// Initialize Firebase
let app  = null;

export default function useFirebase() {

    if (!app) {
        app = initializeApp(firebaseConfig);
    }

    return {app}

}
