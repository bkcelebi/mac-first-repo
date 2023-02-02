'use strict'

// let user = {
//     name: "Burak",
//     age: 28,
//     isAdmin: false,
//     // 'likes cats': true,
// };

// // delete user.age;
// user.nationality = "Turkish";
// user["likes cats"] = true;

// document.querySelector('body').innerText = user["likes cats"] + user.nationality;
// // document.querySelector('body').innerText = user.nationality;
// console.log(user.nationality);

// let key = prompt('what do you want to know about the user?', 'name');

// alert(user[key]);

// let fruit = prompt('which fruit do you want?', 'apple');
// let amount = prompt(`how many ${fruit} do you want`, 5);

// const bag = {
//     [fruit]: [amount],
// };

// document.querySelector('body').innerText = `${fruit}: ${bag[fruit]}`;


// const makeUser = (name, age) => {
//     return {
//         name,
//         age: age,
//     };
// };

// let user = makeUser('Burak', 28);

// document.querySelector('body').innerText = `${user.name} is ${user.age} years old ${user[0]}`;

// console.log( user.nationality === undefined);
// console.log( "nationality" in user );
// console.log( "name" in user );

// for (let prop in user){

//     document.querySelector('body').innerText += ` ${prop} is ${user[prop]} `;
// };

// const codes = {
//     '+90': 'Turkey',
//     '+49': 'Germany',
//     '+41': 'Switzerland',
//     '+44': 'Great Britain',
//     '+1': 'USA',
// };

// for (let code in codes) {
//     console.log(code);
// };

const user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// console.log(user.name);

function isEmpty(obj){
    for (let key in obj){
        return console.log(false);
    };
    return console.log(true);
};

// isEmpty();

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0;
for (let prop in salaries){
    sum += salaries[prop];
};

// console.log(sum);

const menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

const multiplyNumeric = obj => {

    for (let prop in obj){
        if (typeof obj[prop] === 'number') console.log(obj[prop]*2);
        else console.log(obj[prop]);
    };

};


multiplyNumeric(menu);

