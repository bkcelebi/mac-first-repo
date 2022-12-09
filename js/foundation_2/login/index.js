"use strict"

// check the login


let user = prompt("Who are you?");

if (user === "Admin"){
    let userPw = prompt("What is the password");
    if (userPw === "TheMaster"){
        alert("Welcome!");
    }else if(userPw === null || userPw === ""){
        alert("Canceled");
    }else{ 
        alert("Wrong Password");
    };
} else if(user === null || user === ""){
    alert("Canceled");
} else{
    alert("I don't know you");
};