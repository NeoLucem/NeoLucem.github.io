// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore, doc, setDoc, collection, addDoc} from "firebase/firestore";
import { initializeApp} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js'
import { getFirestore, doc, setDoc, collection, addDoc} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyCNHFkm24z1ueu7a0k3iLxTAiWGVBt14OY",
  authDomain: "portfolio-v0-db2c1.firebaseapp.com",
  projectId: "portfolio-v0-db2c1",
  storageBucket: "portfolio-v0-db2c1.appspot.com",
  messagingSenderId: "443021629405",
  appId: "1:443021629405:web:fcbf60056f22159c178834",
  measurementId: "G-WS78C3QNXH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Add a new document in collection "cities"
export const usersCollectionRef = collection(db, "user-infos");
// console.log(usersCollectionRef);

export const getDatabase = getFirestore(app);
export const document = doc;
export const addDocument = addDoc;
