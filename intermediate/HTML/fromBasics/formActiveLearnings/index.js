"use strict";

const isDisabled = document.querySelector("#disable");
const paymentSubmissionButton = document.querySelector(
  "#paymentSubmissionButton"
);
const timestamp = document.querySelector("#timestamp");

// if (isDisabled.checked == true) console.log(1);
// else console.log(0);

isDisabled.addEventListener("click", () => {
  if (isDisabled.checked == false) {
    paymentSubmissionButton.setAttribute("disabled", true);
  } else {
    paymentSubmissionButton.removeAttribute("disabled");
  }

  console.log(isDisabled.value);
});

paymentSubmissionButton.addEventListener("click", () => {
  timestamp.value =
    `${new Date().getDate()}/` +
    `${new Date().getMonth() + 1}/` +
    `${new Date().getFullYear()} ` +
    `${new Date().getHours()}:` +
    `${new Date().getMinutes()}:` +
    `${new Date().getSeconds()}`;
  console.log(timestamp.value);
});

// ######## SLIDER CONFIGURATION STARTS #########

const slider = document.querySelector("#slider");
const output = document.querySelector(".slider-output");

output.textContent = slider.value;

slider.addEventListener("input", () => {
  output.textContent = slider.value;
});

// ######## SLIDER CONFIGURATION ENDS #########
