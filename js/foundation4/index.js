"use strict"

// document.getElementById("test").innerText = "test";

//loop through an array by using "for ... of" loop
const myFam = ["Rachael", "Burak", "Aydin", "Ayse", "Burcu", "Barak"];

for (const member of myFam){

    document.getElementById("test").innerText += " " + member;
}

//loop through an array by using map()
const toUpper = str => {
    return str.toUpperCase();
};

const upperFam = myFam.map(toUpper);

document.getElementById("test2").innerText = " " + upperFam;


//loop through an array by using filter()

const findItemStartsWith = item => {
    return item.startsWith("Bu");
};

const newArray =  myFam.filter(findItemStartsWith);

document.getElementById("test3").innerText = " " + newArray;

//basic loop sample

const result = document.getElementById("test4");
const del = document.getElementById("del");
const cal = document.getElementById("cal");

const getSquare = number => {

    for (let i = 1; i < 100; i++){
        const newResult = `${i} x ${i} = ${i*i}`;
        result.innerText += `${newResult}\n`;
    }
    result.innerText += `\nCalculation is completed`;
};

cal.addEventListener('click', getSquare);
del.addEventListener('click', () => {result.innerText = ''});

//going through a collection by using a basic for loop


const collect = document.getElementById("test5");

for (let i = 0; i < myFam.length; i++){
    collect.innerText += ' ' + myFam[i];
}


const properLayout = document.getElementById("test6");
properLayout.innerText = "My family is ";

for (let i = 0; i < myFam.length; i++){

    if (i === myFam.length - 1){
        properLayout.innerText += ` and ${myFam[i]}.`
    }else{
        properLayout.innerText += ` ${myFam[i]},`
    }
}