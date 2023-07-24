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

// const FactoryFunction = (string) => {
//   const capitaliseString = () => string.toUpperCase();
//   const printString = () => console.log(`----${capitaliseString()}----`);
//   return { printString };
// };

// const taco = FactoryFunction("taco");

// // printString();
// // capitaliseString();
// // taco.capitaliseString();
// taco.printString();

// const counterCreator = () => {
//   let count = 0;
//   return () => {
//     console.log(count);
//     count++;
//   };
// };

// // console.log(count);

// const counter = counterCreator();

// counter();
// counter();

// const Player = (name, level) => {
//   let health = level * 2;
//   const getLevel = () => level;
//   const getName = () => name;
//   const die = () => {
//     console.log("Uh oh");
//   };
//   const damage = (x) => {
//     health -= x;
//     if (health <= 0) {
//       die();
//     }
//   };
//   const attack = (enemy) => {
//     if (level < enemy.getLevel()) {
//       damage(1);
//       console.log(`${enemy.getName()} has damaged ${name}`);
//     }
//     if (level > enemy.getLevel()) {
//       enemy.damage(1);
//       console.log(`${name} has damaged ${enemy.getName()}`);
//     }
//   };
//   return { attack, damage, getLevel, getName };
// };

// const burak = Player("Burak", 5);
// const badGuy = Player("Badguy", 3);

// burak.die();
// burak.health -= 1000;

// const Person = (name) => {
//   const sayName = () => console.log(`My name is ${name}`);
//   return { sayName };
// };

// const Nerd = (name) => {
//   // const { sayName } = Person(name);
//   //the above works in case you want specific functions to be inherited
//   // if you want all of them the below is the best
//   const prototype = Person(name);
//   const doSomething = () => console.log("Nerd stuff");
//   // return { sayName, doSomething };
//   return Object.assign({}, prototype, { doSomething });
// };

// const burak = Nerd("Burak");
// burak.sayName();
// burak.doSomething();

//The module pattern

// const calculator = (() => {
//   const add = (a, b) => a + b;
//   const sub = (a, b) => a - b;
//   const mul = (a, b) => a * b;
//   const div = (a, b) => a / b;
//   return {
//     add,
//     sub,
//     mul,
//     div,
//   };
// })();

// console.log(calculator.add(3, 5)); // 8
// console.log(calculator.sub(6, 2)); // 4
// console.log(calculator.mul(14, 5534)); // 77476

// console.log(Date.now());

// const Formatter = (function () {
//   const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
//   return { log };
// })();

// Formatter.log("Hello");

const myFactory = (name) => {
  const getName = () => console.log(`Hello, ${name}`);
  return { name, getName };
};

const inhMyFactory = (name) => {
  // const { getName } = myFactory(name);
  // return { getName, name };

  const prototype = myFactory(name);
  return Object.assign({}, prototype);
};

const burak = inhMyFactory("Burak");
burak.getName();
console.log(burak.name);
