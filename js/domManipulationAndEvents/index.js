"use strict"

const test = document.querySelector('.title');
test.textContent = 'The Title Of Your Page';

//referencing the parent element
const container = document.querySelector('#container');

//a <p> with red text that says “Hey I’m red!”

const p = document.createElement('p');
p.style.color = 'red';
p.textContent = "Hey I'm red!";
container.appendChild(p);

// an <h3> with blue text that says “I’m a blue h3!”

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3";
container.appendChild(h3);

// a <div> with a black border and pink background color 
//with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with 
//createElement, append the <h1> and <p> to it 
//before adding it to the container.

const div = document.createElement('div');
div.setAttribute('style', 'background: pink; border: solid black 2px;')
const h1 = document.createElement('h1');
h1.textContent = 'I am in a div';
const par = document.createElement('p');
par.textContent = 'ME TOO';

div.appendChild(h1);
div.appendChild(par);
container.appendChild(div);


//method2
const button = document.querySelector("#btn");
button.onclick = () => alert("Hello World");

//method3
const btn = document.querySelector("#btn_2");
btn.addEventListener('click', (e) => {
    // alert("Hello World");
    console.log(e);
    e.target.style.background = 'blue';
});

// function alertFunc(){
//     alert('This works');
// };

// const btn_3 = document.querySelector('#btn_3');
// btn_3.onclick = alertFunc;

// const btn_4 = document.querySelector('#btn_4');
// btn_4.addEventListener('click', alertFunc);


//looping through container to add event 
//to its child elements

const buttons = document.querySelectorAll("button");

buttons.forEach((btnn) => {
    btnn.addEventListener('click', () => {
        alert(btnn.id);
    });
});
