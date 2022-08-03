
//ADD YOUR FIREBASE LINKS HERE


const firebaseConfig = {
      apiKey: "AIzaSyBEfQm7TkSFlV55jvVrQmfJraaoqfeEsco",
      authDomain: "kwitter-22558.firebaseapp.com",
      databaseURL: "https://kwitter-22558-default-rtdb.firebaseio.com",
      projectId: "kwitter-22558",
      storageBucket: "kwitter-22558.appspot.com",
      messagingSenderId: "811890229735",
      appId: "1:811890229735:web:430d3adcc1e8e2b9b87d42"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
