// Connecting Firebase as formal backend for the signUp Form
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
var signUpFormDB = firebase.database().ref('Sign Up')

document.getElementById("SignUpForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var fullname = getElementVal("fullname");
  var emailid = getElementVal("email");
  var password = getElementVal("password");

  saveMessages(fullname,emailid,password);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 2000);

  //   reset the form
  document.getElementById("SignUpForm").reset();
}

const saveMessages = (fullname,emailid,password) => {
  var newSignUpForm = signUpFormDB.push();

  newSignUpForm.set({
    fullname: fullname,
    emailid: emailid,
    password: password,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
