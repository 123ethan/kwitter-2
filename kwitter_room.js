
const firebaseConfig = {
      apiKey: "AIzaSyBzY7CJ7jB9fL65bbZ2yiKwm-O804fCoFA",
      authDomain: "kwitter-bece8.firebaseapp.com",
      databaseURL: "https://kwitter-bece8-default-rtdb.firebaseio.com",
      projectId: "kwitter-bece8",
      storageBucket: "kwitter-bece8.appspot.com",
      messagingSenderId: "993052443781",
      appId: "1:993052443781:web:87cd6495127c8b90a9d5ec"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout(){
      window.location = "index.html"
}
