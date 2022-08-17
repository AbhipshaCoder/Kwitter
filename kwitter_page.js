//YOUR FIREBASE LINKS
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

     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

     function send()
     {
           message = document.getElementById("message").value;
           firebase.database().ref(room_name).push({
              name: user_name,
              message: message,
              likes:0
           });

           document.getElementById("message").value = " ";
     }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
