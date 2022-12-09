"use strict"

let select = document.querySelector("select");
let para = document.querySelector("p");

select.onchange = setWeather;

function setWeather(){
    let choice = select.value;

    switch (choice){

        case "sunny":
            para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
            break;

        case "rainy":
            para.textContent= "Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.";
            break;

        case "snowing":
            para.textContent= "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
            break;

        case "overcast":
            para.textContent= "It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
            break;

        default:
            para.textContent= "";
    }
}

const dayOfWeek = new Date().getDay();
let dayInHtml = document.getElementById("day");

switch (dayOfWeek) {
    case 0:
        dayInHtml.textContent = `Today is Sunday`;
        break;
        
    case 1:
        dayInHtml.textContent = `Today is Monday`;
        break;

    case 2:
        dayInHtml.textContent = `Today is Tuesday`;
        break;

    case 3:
        dayInHtml.textContent = `Today is Wednesday`;
        break;

    case 4:
        dayInHtml.textContent = `Today is Thursday`;
        break;

    case 5:
        dayInHtml.textContent = `Today is FriYAY`;
        break;

    case 6:
        dayInHtml.textContent = `Today is Saturday`;
        break;

    default:
        dayInHtml.textContent = "What the feck happened here?";
};


let grade = document.getElementById("studentGrade");
let studentGrade = prompt("What is your grade");

switch(true){
    // If score is 90 or greater
    case studentGrade >= 90:
        grade.textContent = "You've got an A";
        break;
    // If score is 80 or greater
    case studentGrade >= 80:
        grade.textContent = "You've got a B";
        break;
    // If score is 70 or greater
    case studentGrade >= 70:
        grade.textContent = "You've got a C";
        break;
    // If score is 60 or greater
    case studentGrade >= 60:
        grade.textContent = "You've got a D";
        break;
    // Anything 59 or below is failing
    default:
        grade.textContent = "You've got an F";
};

let monthDate = new Date().getMonth();

let month = document.getElementById("month");

switch(monthDate){
    case 0:
    case 1:
    case 11:
        month.textContent = "It is winter";
        break;

    case 2:
    case 3:
    case 4:
        month.textContent = "It is spring";
        break;

    case 5:
    case 6:
    case 7:
        month.textContent = "It is summer";
        break

    case 8:
    case 9:
    case 10:
        month.textContent = "It is autumn";
        break;

    default:
        month.textContent = "Something went wrong";
};
