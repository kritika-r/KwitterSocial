function addUser(){
    var username= document.getElementById("userNameInput").value;
    localStorage.setItem("Username", username);
    window.location("kwitter_room.html");
}