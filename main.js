import {db, usersCollectionRef, addDocument} from './firebaseConf';

let nameInput = document.getElementById("name-input");
let emailInput = document.getElementById("email-input");
let messageInput = document.getElementById("message-input");

document.getElementById("submit-btn").addEventListener('click', (e) =>{
      e.preventDefault();

    createMessage(nameInput.value, emailInput.value, messageInput.value);

  //   console.log(
  //       "hello "+ nameInput.value+
  //       " with the email address "+emailInput.value+
  //       " message "+ messageInput.value
  //       );
  // console.log("HELLO WORLD @!"+usersCollectionRef);
})

const createMessage = async (username, usermail, usermsg) =>{
  await addDocument(usersCollectionRef, {name: username, email: usermail, message: usermsg});
  // console.log({name, email, message});
  alert('Your message has been sent!')
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
};