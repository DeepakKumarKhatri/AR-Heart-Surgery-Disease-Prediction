// Connecting Firebase as formal backend for this application

const firebaseConfig = {
    apiKey: "AIzaSyCG5e2fwXSAUbOphrIdrjb6_x6oFVedSM8",
    authDomain: "augmented-medico.firebaseapp.com",
    databaseURL: "https://augmented-medico-default-rtdb.firebaseio.com",
    projectId: "augmented-medico",
    storageBucket: "augmented-medico.appspot.com",
    messagingSenderId: "702687014356",
    appId: "1:702687014356:web:74f18d198f98453509ba41",
    measurementId: "G-PW6Y943PHJ"
};

// Object intialization of firebase
firebase.initializeApp(firebaseConfig);

// reference for database
var contactFormDB = firebase.database().ref('Contact Form')

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("email");
  var subjectMessage = getElementVal("subject");
  var msgContent = getElementVal("message");

//   console.log(name, emailid, subjectMessage, msgContent);

  saveMessages(name, emailid, subjectMessage ,msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 2000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, subjectMessage ,msgContent) => {
  var newAugmentedMedico = contactFormDB.push();

  newAugmentedMedico.set({
    name: name,
    emailid: emailid,
    subjectMessage: subjectMessage,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
