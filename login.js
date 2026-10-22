function compareLogin(event){
    event.preventDefault();

    const USERNAME = "Hiro";
    const PASSWORD = "030209";
    const userName = document.getElementById("username").value;
    const passWord = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
    if(userName === USERNAME && passWord === PASSWORD){
        alert("whats up twin");
        window.location.href = "chat.html";
    }else{
        alert("U aint twin");
        errorMessage.textContent = "Invalid Username or Password!";

    }
}

const myLogInButton = document.getElementById("btnLogIn");
myLogInButton.addEventListener('click', compareLogin);
