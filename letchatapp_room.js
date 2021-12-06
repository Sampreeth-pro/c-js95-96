
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
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Letschatapp_page.html"
}
function addUser() {

      user_name = document.getElementById("user_name").value;
  
      localStorage.setItem("user_name", user_name);
  
      window.location = "letschatwebapp_room.html";
  }
  function addRoom()
  {
      room_name = document.getElementById("room_name").value;
  
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      })
  
      localStorage.setItem("room_name", room_name);
  
      window.location = "Letschatapp_page.html";
  }
