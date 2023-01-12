
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBv4LMPjT3NNcIqzmr5yv1O_ZtGtH6f5qg",
      authDomain: "kwitter1-7d612.firebaseapp.com",
      databaseURL: "https://kwitter1-7d612-default-rtdb.firebaseio.com",
      projectId: "kwitter1-7d612",
      storageBucket: "kwitter1-7d612.appspot.com",
      messagingSenderId: "237039145410",
      appId: "1:237039145410:web:5fa3f04446e9d5e64f865b"
    };
    firebase.initializeApp(firebaseConfig);  
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name +"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();



function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}



function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}