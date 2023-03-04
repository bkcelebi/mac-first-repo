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

let func = (name) => {
    // let name = "Burky";

    document.getElementById("arrowFunc").innerText = name;
};

let name = prompt("What is your name", "Anonymous");
func(name);

let sum = (a, b) => a + b;
document.getElementById("sum").innerText = sum(2, 4);

let sqr = a => a * a;
let sq = a => {
    return a*a;
};
document.getElementById("sqr").innerText = sq(4);


let age = prompt("How old are you?", " ");

let permissionCheck = (age > 18) ?
    () => document.getElementById("age").innerText = "Permission is granted" :
    () => document.getElementById("age").innerText = "Permission is declined";

permissionCheck(age)


//before 
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }
  
// ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
// );

//after

let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};

ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
);


//basic return
function basicReturn(animal){
    return `${animal} is my favorite animal`
};

document.getElementById("rtrn").innerText = basicReturn("roly");


//Call stack

let sm = (a, b) => a + b;
let av = (a, b) => sm(a, b)/2;
document.getElementById("av").innerText = av(12, 2);

//stack overflow

// let stackOverflow = () => stackOverflow();
// stackOverflow();


//Assignment

//1
let add7 = a => a + 7;
document.getElementById("as1").innerText = add7(5);

//2
let multiply = (a, b) => a * b;
document.getElementById("as2").innerText = multiply(2, 6);

//3
let capitalise = (aString) => aString.toUpperCase();
document.getElementById("as3").innerText = capitalise("burak");

//4
let lastLetter = (lstLetter) => lstLetter.slice(-1);
document.getElementById("as4").innerText = lastLetter("Rachy");
