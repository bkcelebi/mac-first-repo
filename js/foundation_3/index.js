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

//anonymous function and arrow function

//anonymous function
// function logKey(event){
//     // console.log(`You pressed ${event.key}.`);
//     document.getElementById("txtOutput").innerText += `You pressed ${event.key}.`;
// };

// const txt = document.getElementById("txt");
// txt.addEventListener("keydown", logKey);

//Arrow function

const txt = document.getElementById("txt");
txt.addEventListener("keydown", (event) => {
    document.getElementById("txtOutput").innerText += `You pressed ${event.key}.`;
});


const originals = [1, 2, 3];
const doubled = originals.map((item) => item * 2);
document.getElementById("mapping").innerText = doubled;

//basic return
function basicReturn(animal){
    return `${animal} is my favorite animal`
};

document.getElementById("rtrn").innerText = basicReturn("roly");