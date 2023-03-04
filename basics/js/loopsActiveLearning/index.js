"use strict"

//count down
let output = document.querySelector(".output");
output.innerHTML = "";

let i = 10;

while (i >= 0){
    const para = document.createElement("p");

    if (i === 10){
        para.textContent = `Countdown ${i}`;
    }else if(i === 0){
        para.textContent = "Blast off!";
    }else{
        para.textContent = i;
    }
    
    output.appendChild(para);

    i--;
}

// filling in a guest list

const admitted = document.getElementById('admitted'); 
const refused = document.getElementById('refused'); 

const people = [
    'Chris', 
    'Anne', 
    'Colin', 
    'Terri', 
    'Phil', 
    'Lola', 
    'Sam', 
    'Kay', 
    'Bruce'
];

const admittedList = [];
const refusedList = [];

for (const person of people){

    if (person === 'Phil' || person === 'Lola'){
        refusedList.push(person);
        refused.textContent = `Refuse: ${refusedList}`;
    }else{
        admittedList.push(person);
        admitted.textContent = `Admit: ${admittedList} `;
    }
}

// //prefix
// let j = 0;
// while (++j < 5) console.log( j );
// //postfix
// let k = 0;
// while (k++ < 5) console.log( k );

// console.log("for loop")

// for (let i = 0; i < 5; i++) console.log( i );

// for (let i = 0; i < 5; ++i) console.log( i );

//Output even numbers in the loop
// for (let i = 2; i <= 10; i++) {

//     if (i % 2 === 0){
//         alert(i);
//     }

// }

//Replace "for" with "while"
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }

// let l = 0;
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++
// }


//Repeat until the input is correct

// let userInput;

// do {

//     userInput = prompt("Enter a number greater than 100");

// }while(userInput <= 100 && userInput)

let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue nextPrime;
    }

    console.log(`Prime: ${i}`)
}