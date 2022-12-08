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



// check the login


// let user = prompt("Who are you?");

// if (user === "Admin"){
//     let userPw = prompt("What is the password");
//     if (userPw === "TheMaster"){
//         alert("Welcome!");
//     }else if(userPw === null || userPw === ""){
//         alert("Canceled");
//     }else{ 
//         alert("Wrong Password");
//     };
// } else if(user === null || user === ""){
//     alert("Canceled");
// } else{
//     alert("I don't know you");
// };



// allowance updater

let checkbox = document.querySelector("input");
let reward = document.getElementById("reward");
let shoppingIsDone = false;

checkbox.addEventListener("change", () =>{
    checkbox.disabled = true;
    shoppingIsDone = true;
    updater();
});


function updater(){
    let allowance;
    if (shoppingIsDone === true){
        allowance = 10;
    }else{
        allowance = 5;
    };
    
    reward.textContent = `Child earn ${allowance} Euro this week.`;
}