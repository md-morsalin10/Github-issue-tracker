document.getElementById("login-btn").addEventListener("click", ()=>{
    // console.log("clicked")
    const userName = document.getElementById("user-name");
    const name = userName.value;
    console.log(name);
    const userPassword = document.getElementById("password");
    const pin = userPassword.value;
    console.log(pin);  

    if(name == "admin" && pin == "admin123"){
        alert("login successful")
        window.location.assign("./home.html");
    }
    else{
        alert("login Failed")
        return;
    }
    
    
})