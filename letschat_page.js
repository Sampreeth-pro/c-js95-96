const firebaseConfig = {
    apiKey: "AIzaSyAp4glenWr71ebHkc1ACBB_84G39nWNgy4",
    authDomain: "c-94-595ad.firebaseapp.com",
    databaseURL: "https://c-94-595ad-default-rtdb.firebaseio.com",
    projectId: "c-94-595ad",
    storageBucket: "c-94-595ad.appspot.com",
    messagingSenderId: "1094313138302",
    appId: "1:1094313138302:web:240180d945e74bd495e02f",
    measurementId: "G-23G1N0350G"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)


  user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

 

 console.log(firebase_message_id);
 console.log(message_data);
 name = message_data['name'];
 like = message_data['like'];
 message = message_data['message']
 name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
 message_with_tag = "<hr class='message_h4'>" + message +"</h4>";
 like_button ="<button class='btn btn-warning' id="+ firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
 span_with_tag ="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

 row= name_with_tag + message_with_tag +like_button +span_with_tag;
 document.getElementById("output").innerHTML += row;

} })  }); }
getData();

function updateLike(message_id)
{
 console.log("clicked a like button -" + message_id);
 button_id = message_id;
 likes = document.getElementById(button_id).value;
 updated_likes = Number(likes) + 1;
 console.log(updated_likes);

 firebase.database().ref(room_name).child(message_id).update({
       like : updated_likes
 })
}

function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location.replace("index.html");
}

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
   });
   
    document.getElementById("msg").value = "";
}