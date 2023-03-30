let numberOfElements = 0;
let sizeOfElements = 0;
let number = 0;
let colors = [];
let numbersVh = [];
let numbersVw = [];
let numbersPxFirst = [];
let numbersPxSecond = [];
let concatArrMain = [];

const randomEverything = () => {
  numberOfElements = Math.floor(Math.random() * 10000 + 1);
  sizeOfElements = Math.floor(Math.random() * 50 + 1);
  document.querySelector(
    "h2.size"
  ).textContent = `Size max: ${sizeOfElements}px`;
};
const colorGenerate = () => {
  for (let i = 0; i < number; i++) {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    colors.push(color);
  }
};

const numberGenerate = () => {
  number = Math.floor(Math.random() * numberOfElements);
  document.querySelector("h2.elements").textContent = `Elements: ${number}`;
};

const random = () => {
  for (let i = 0; i < number; i++) {
    const numberVh = Math.floor(Math.random() * 200 - 100);
    numbersVh.push(numberVh);
    const numberVw = Math.floor(Math.random() * 200 - 100);
    numbersVw.push(numberVw);
    const numberPxFirst = Math.floor(Math.random() * sizeOfElements + 1);
    numbersPxFirst.push(numberPxFirst);
    const numberPxSecond = Math.floor(Math.random() * sizeOfElements + 1);
    numbersPxSecond.push(numberPxSecond);
  }
};

const addUnit = () => {
  for (let i = 0; i < number; i++) {
    numbersPxFirst[i] += "px";
    numbersPxSecond[i] += "px";
    numbersVh[i] += "vh";
    numbersVw[i] += "vw";
  }
};

const concatToString = () => {
  for (let i = 0; i < number; i++) {
    const concatStringMain = `${numbersVh[i]} ${numbersVw[i]} ${numbersPxFirst[i]} ${numbersPxSecond[i]} ${colors[i]}`;
    concatArrMain.push(concatStringMain);
  }
};

let textMain = "";
const concatToFullString = () => {
  for (let i = 0; i < number; i++) {
    textMain += concatArrMain[i] + ",";
    if (i === number - 1) {
      textMain += concatArrMain[i] + "";
    }
  }
};

const add = () => {
  document.querySelector("div.main").style.boxShadow = textMain;
  document.body.style.backgroundColor = colors[0];
};
const divAnimation = () => {
  document.querySelector(".generate").classList.toggle("rotateY");
  document.querySelector(".generate").classList.toggle("rotateZ");
  document.querySelector("div.animation").style.display = "flex";
};
const reset = () => {
  numbersVh = [];
  numbersVw = [];
  numbersPxFirst = [];
  numbersPxSecond = [];
  concatArrMain = [];
  colors = [];
  textMain = "";
};

const start = () => {
  randomEverything();
  numberGenerate();
  colorGenerate();
  random();
  addUnit();
  concatToString();
  concatToFullString();
  add();
  reset();
  divAnimation();
};

document.querySelector(".generate").addEventListener("click", start);
const btn = document.querySelector("div.btn");
btn.addEventListener("click", () => {
  btn.classList.toggle("rotateY");
  btn.classList.toggle("rotateX");
  document.querySelector(".main").classList.toggle("zoom");
  if (btn.textContent === "OFF" && btn.style.backgroundColor === "red") {
    btn.textContent = "ON";
    btn.style.backgroundColor = "rgb(17, 202, 17)";
  } else {
    btn.textContent = "OFF";
    btn.style.backgroundColor = "red";
  }
});
