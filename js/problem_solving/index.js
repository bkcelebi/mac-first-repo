"use strict"

let startNumber = 1;

let fizzBuzz = startNumber => {
    if (startNumber % 3 === 0){
        if (startNumber % 5 === 0){
            startNumber = "FizzBuzz";
        }else{
            startNumber = "Fizz";
        }
    }else if(startNumber % 5 === 0){
        startNumber = "Buzz";
    }else{
        startNumber = startNumber;
    }
    return startNumber;
};

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let userNumber = parseInt(document.getElementById("number").value);

    if (userNumber <= 0){
        document.getElementById("fizzBuzz").innerText = "Please enter a number greater than 0";
    }else{
        while (startNumber <= userNumber){
            document.getElementById("fizzBuzz").innerText += " " + fizzBuzz(startNumber);
            startNumber++
        }
    };
});




