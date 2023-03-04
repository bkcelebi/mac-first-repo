"use strict"

let select = document.querySelector("select");
let html = document.querySelector("html");
document.body.style.margin = "50px";

function themeChanger(bgColour, txtColour){
    html.style.background = bgColour;
    html.style.color = txtColour;
};

select.addEventListener(
    "change", () => select.value === "dark" //condition
    ? themeChanger("black", "white") //value1 if it is truthy
    : themeChanger("white", "black") //value2 if it is falsy
);


// let message = (login == "Employee") ? "Hello" :
//     (login == "Director") ? "Greetings" :
//     (login == "") ? "No login" : ""