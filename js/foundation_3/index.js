"use strict"

//manipulating string
const myText = document.querySelector("h1").innerText;
const newText = myText.replace("world", "Burak");
document.querySelector("h1").innerText = newText;

//manipulating array
const myP = document.querySelector("p").innerText;
const myArray = ["I", "want", "a", "house"];
const newArray = myArray.join(" ");
document.querySelector("p").innerText = newArray;

//creating a random number
const aRandomNumber = Math.random();
document.getElementById("random").innerText = aRandomNumber;

//a basic function
function myFunction(){
    alert("Burki loves Reci");
};

const myButton = document.getElementById("fnc");
myButton.addEventListener("click", myFunction);

