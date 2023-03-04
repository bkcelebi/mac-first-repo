"use strict"

// let admin;
// let name;

// name = "John";
// admin = name;

// alert(name);
// alert(admin);

// let ourPlanetName = "Earth";
// let currentUserName = "Burak";

const myInt = 5;
const myFloat = 1.7665849586757463642;

console.log(myInt, myFloat)

// typeof myFloat;
// typeof myInt;

console.log(typeof myFloat, typeof myInt)

const twoDecimalPlaces = myFloat.toFixed(5)

console.log(twoDecimalPlaces)

//string+int
const myNumber = "12";
let newNumber = myNumber + 3;
document.getElementById("innerHtml1").innerHTML = newNumber;

//string turned into int by + sign - int+int
newNumber = +myNumber + 3;
document.getElementById("innerHtml2").innerHTML = newNumber;

//string turned into int by Number() - int+int
newNumber = Number(myNumber) + 3;
document.getElementById("innerHtml3").innerHTML = newNumber;


const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);


function updateBtn (){
    if (btn.textContent === "Start Machine"){
        btn.textContent = "Stop Machine";
        txt.textContent = "The machine has started!";
    }else{
        btn.textContent = "Start Machine";
        txt.textContent = "Machine is stopped";
    }
}

//assignment
//1 
document.getElementById("assignment1").innerHTML = 23+ 97;
//2
document.getElementById("assignment2").innerHTML = 1+2+3+4+5+6;
//3
const assignment3 = (4 + 6 + 9) / 77
const fixNumber = assignment3.toFixed(5)
document.getElementById("assignment3").innerHTML = fixNumber;
//4
const a = 10;
const b = 7 * a
document.getElementById("assignment4").innerHTML = b;
//5
const max = 57;
const actual = max - 13;
const percentage = actual / max;
document.getElementById("assignment5").innerHTML = percentage.toFixed(4);
//6
// document.getElementById("assignment6").innerHTML = ;