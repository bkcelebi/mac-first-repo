"use strict";

// console.log("Hello");

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greeting = function () {
//   console.log(`Hi ${this.name}`);
// };

// const newPerson = new Person("Burak", 28);

// newPerson.greeting();

// const person = (name, age) => {
//   const greeting = () => console.log(`Hi ${name}`);
//   return { name, age, greeting };
// };

// const burak = person("Burak", 28);
// const rachael = person("Rachael", 28);

// console.log(burak.name);
// burak.greeting();
// rachael.greeting();

// let a = 17;

// const func = (x) => {
//   let a = x;
//   return a;
// };

// // func(99);

// console.log(a);
// console.log(func(99));

// const name = "Maynard";
// const color = "red";
// const number = 34;
// const food = "rice";

// console.log({ name, color, number, food });
// console.log(name, color, number, food);

// const sayHello = (name) => {
//   const text = `Hello, ${name}`;
//   return () => {
//     console.log(text);
//   };
// };

// const hiBurak = sayHello("Burak");
// hiBurak();
// or sayHello("Burak")();

// const sayHello = (name) => {
//   const text = `Hello, ${name}`;
//   return text;
// };

// console.log(sayHello("Burak"));

// const links = document.querySelectorAll("li");

// for (let i = -1; i < links.length; i++) {
//   console.log(this);
// }

// for (let i = 0; i < links.length; i++) {
//   (function () {
//     console.log(this);
//   }).call(links[i]);
// }

// var width = 100;
// console.log(width); // 100
// width = 200;
// console.log(width); // 200

// var width = 100;

// function setWidth() {
//   var width = 100;
//   console.log(width);
// }
// setWidth();
// console.log(width); // error, width is not defined

// var age = 100;
// if (age > 12) {
//   var dogYears = age * 7;
//   console.log(`You are ${dogYears} dog years old!`);
// }

// console.log(dogYears);

// var age = 100;
// if (age > 12) {
//   const dogYears = age * 7;
//   console.log(`You are ${dogYears} dog years old!`);
// }

// console.log(dogYears);

const FactoryFunction = (string) => {
  const capitaliseString = () => string.toUpperCase();
  const printString = () => console.log(`----${capitaliseString()}----`);
  return { printString };
};

const taco = FactoryFunction("taco");

// printString();
// capitaliseString();
// taco.capitaliseString();
taco.printString();

const counterCreator = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};

// console.log(count);

const counter = counterCreator();

counter();
counter();
