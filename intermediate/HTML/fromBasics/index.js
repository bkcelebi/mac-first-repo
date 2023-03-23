"use strict";

const input = document.querySelector("#userName");
const button = document.querySelector("#greeting");
const gArea = document.querySelector(".greetingArea");

button.addEventListener("click", () => {
  // console.log(input.value);
  if (input.value === "") return;
  else gArea.innerText = `Hi, ${input.value}!;`;
});
