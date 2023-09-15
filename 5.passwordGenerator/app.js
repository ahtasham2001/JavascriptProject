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

let symbols = '~!@#$%^&*()_+[{]}|\'";:.<,>?/'


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

function getRndInteger(){
    return Math.floor(Math.random()*(max-min)+min);
}
function generateRandomNumber(){
    return getRndInteger(0,9);
}
function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123));
}
function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91));
}
function generateSymbol(){
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrenght(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numberscaseCheck.checked) hasNum = true;
    if(symbolscaseCheck.checked) hasSym = true;

    if(hasUpper && hasLower && (hasNum || hasSym)&& passwordLenght){
        setIndicator("#0f0");
    }else if((hasLower || hasUpper)&&(hasNum || hasSym)&& passwordLenght>=6){
        setIndicator("#ff0");
    }else{
        setIndicator("#f00");
    }

}

async function copyContent(){
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied"
    }
    catch(e){
        copyMsg.innerText = "Failed";
    }
    copyMsg,classList.add("active");

    setTimeout( ()=>{
        copyMsg.classList.remove("active");
    },2000)
}