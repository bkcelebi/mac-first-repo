import { myName, backGround } from "./myName";
import { backGround } from "./test";

const component = () => {
  const element = document.createElement("div");
  element.textContent = myName("Burak");
  return element;
};

const bg = () => {
  const bgColor = prompt("Please enter a color");
  backGround(bgColor);
};

document.body.appendChild(component());
bg();
