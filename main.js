// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, addDoc} from "firebase/firestore";


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
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Add a new document in collection "cities"
const usersCollectionRef = collection(db, "user-infos");

const createMessage = async (username, usermail, usermsg) =>{
  await addDoc(usersCollectionRef, {name: username, email: usermail, message: usermsg});
  // console.log({name, email, message});
  alert('Your message has been sent!')
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
};
// createMessage();


let submitBtn = document.getElementById("submit-btn");
let nameInput = document.getElementById("name-input");
let emailInput = document.getElementById("email-input");
let messageInput = document.getElementById("message-input");

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(
        "hello "+ nameInput.value+
        " with the email address "+emailInput.value+
        " message "+ messageInput.value
        );

    createMessage(nameInput.value, emailInput.value, messageInput.value);

})