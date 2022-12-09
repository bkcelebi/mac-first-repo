"use strict"

const test = NaN + 1;


document.getElementById("test").innerHTML = test;


const string = "The revolution will not be televised";

document.getElementById("string").innerHTML = string

const bigMounth = 'I\'ve got no right'

document.getElementById("bigMounth").innerHTML = bigMounth;


const name = "Burak";

const greeting = `Hello, ${name}`;

document.getElementById("greeting").innerHTML = greeting;



const button = document.querySelector("button");

function greet(){
    const name = prompt("What is your name");
    alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener("click", greet);


const tostring = 123;

document.getElementById("toString").innerHTML = typeof tostring.toString();


const toNumber = "123";

document.getElementById("toNumber").innerHTML = typeof Number(toNumber);


let twoLine = "I like the song.\nI gave it a score of 90%.";

document.getElementById("twoLine").innerHTML = twoLine;

document.getElementById("length").innerHTML = twoLine.length;

document.getElementById("slice").innerHTML = twoLine.slice(2, 6);

document.getElementById("sliceNegative").innerHTML = twoLine.slice(-13, -8);

document.getElementById("substr").innerHTML = twoLine.substr(2, 4);







