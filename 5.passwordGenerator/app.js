const inputSlider = document.querySelector("[data-lenghtSlider]");
const lenghtDisplay = document.querySelector("[data-lenghtNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numberscaseCheck = document.querySelector("#numbers");
const symbolscaseCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-Indicator]");

const generateBtn = document.querySelector(".generate-button");
const allCheckBox = document.querySelector("input[type=checkbox]");


let password = "";
let passwordLenght = 15;
let checkCount = 1;

handleSlider()



function handleSlider(){
    inputSlider.value = passwordLenght;
    lenghtDisplay.innerText = passwordLenght;
}

function setIndicator(){
    indicator.style.backgroundColor = color;
    // shadow
}

function randInt(){
    return Math.floor(Math.random()*(max-min)+min);
}