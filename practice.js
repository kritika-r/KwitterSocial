
var firebaseConfig = {
    apiKey: "AIzaSyD42KtSJSjxpSQrd-ecMk7PQNA3PcRQEfQ",
    authDomain: "kwitter-387fc.firebaseapp.com",
    databaseURL: "https://kwitter-387fc-default-rtdb.firebaseio.com",
    projectId: "kwitter-387fc",
    storageBucket: "kwitter-387fc.appspot.com",
    messagingSenderId: "371698628502",
    appId: "1:371698628502:web:85bdd7cc4c3dbed79a4fb7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      var username = document.getElementById("username_input").value;
      firebase.database().ref("/").child(username).update({
          purpose: "adding username"
      });
  }