// Used to Grab on to Firebase -> Connection
var firebaseConfig = {
  apiKey: "AIzaSyBm63HPdyZv9gfsH7JBs--kyhNdYyawdOE",
  authDomain: "contactform-64d17.firebaseapp.com",
  databaseURL: "https://contactform-64d17.firebaseio.com",
  projectId: "contactform-64d17",
  storageBucket: "contactform-64d17.appspot.com",
  messagingSenderId: "456053601309",
  appId: "1:456053601309:web:da1586ad492f17e2b442f4",
  measurementId: "G-HCKYEW4FR1"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// Start grabbing DOM Element

const submitBtn = document.querySelector('#submit');

let name = document.querySelector('#name');
let email = document.querySelector('#email');
let message = document.querySelector('#message');

const db = firestore.collection('contactData');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  
  let nameInput = name.value;
  let emailInput = email.value;
  let messageInput = message.value;

  // Access the Database Collection
  db.doc()
    .set({
      name: nameInput,
      email: emailInput,
      message: messageInput
  })
  .then(function() {
    console.log('Data Saved');
  })
  .catch(function(error){
    console.log(error);
  });

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3s
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear Form
  document.getElementById('contactForm').reset();
});














// Reference message collection
// var messagesRef = firebase.database().ref('messages');

// Listen for form submit
// document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
// function submitForm(e) {
//   e.preventDefault();

//   // Get values
//   var name = getInputVal('name');
//   var email = getInputVal('email');
//   var message = getInputVal('message');
//   console.log(name);
//   // Save message
//   // saveMessage(name, email, message);
// }

// function to get form values
// function getInputVal(id){
//   return document.getElementById(id).value;
// }

// Save the message to firebase
// function saveMessage(name, email, message) {
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name: name,
//     email: email,
//     message: message,
//   });
// }