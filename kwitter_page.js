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
              like:0
           });

           document.getElementById("message").value = " ";
     }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
namee = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ namee +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

row = name_with_tag+ message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML+= row;
//End code
      } });  }); }
getData();
 
function updateLike(message_id){
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;

firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
});
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "index.html";
}