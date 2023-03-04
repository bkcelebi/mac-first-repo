"use strict"

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