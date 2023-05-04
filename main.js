import {db, usersCollectionRef, addDocument} from './firebaseConf.js';

let nameInput = document.getElementById("name-input");
let emailInput = document.getElementById("email-input");
let messageInput = document.getElementById("message-input");

document.getElementById("submit-btn").addEventListener('click', (e) =>{
    e.preventDefault();

    createMessage(nameInput.value, emailInput.value, messageInput.value);

})

const createMessage = async (username, usermail, usermsg) =>{
  try {
    
    await addDocument(usersCollectionRef, {name: username, email: usermail, message: usermsg});
    alert('Your message has been sent!');
    nameInput.value ="";
    emailInput.value ="";
    messageInput.value ="";

  } catch (error) {
    console.error(error)
  }   
};