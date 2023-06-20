
//ADICIONE SEUS LINKS DO FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyDp7Ajm2GxSL_O4jVS8WIL7OulaWmDBSX4",
    authDomain: "teste100-cd4f5.firebaseapp.com",
    databaseURL: "https://teste100-cd4f5-default-rtdb.firebaseio.com",
    projectId: "teste100-cd4f5",
    storageBucket: "teste100-cd4f5.appspot.com",
    messagingSenderId: "944202407190",
    appId: "1:944202407190:web:fb3c5c72e461eeefb18437"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adicionando nome da sala"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "chat_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Nome da sala: " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adicionar sala"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "chat_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }