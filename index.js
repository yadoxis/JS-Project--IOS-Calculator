const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const reset = document.querySelector(".function-AC")
const neg_pos = document.querySelector(".negative-positive")
const percentage = document.querySelector(".percentage")

const divide = document.querySelector(".divide")
const multiply = document.querySelector(".multiply")
const subtract = document.querySelector(".subtract")
const plus = document.querySelector(".plus")

const equal = document.querySelector(".equal")

const _0 = document.querySelector(".number-0");
const _1 = document.querySelector(".number-1");
const _2 = document.querySelector(".number-2");
const _3 = document.querySelector(".number-3");
const _4 = document.querySelector(".number-4");
const _5 = document.querySelector(".number-5");
const _6 = document.querySelector(".number-6");
const _7 = document.querySelector(".number-7");
const _8 = document.querySelector(".number-8");
const _9 = document.querySelector(".number-9");
const _dot = document.querySelector(".number-dot");

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");

let time = () => {
  hour.innerHTML = new Date().getHours().toString().padStart(2, "0");
  minute.innerHTML = new Date().getMinutes().toString().padStart(2, "0");
};
setInterval(time, 1000);

let num1 = null;
let num2 = null;
let operator = "";
let result = 0;


reset.addEventListener("click", () =>{
    screen1.innerText = "";
    screen2.innerText = "0";
    num1 = null;
    num2 = null;
    operator = "";
    result = 0;
})

neg_pos.addEventListener("click", ()=>{
    screen2.innerText = -1 * (+screen2.innerText);
})

percentage.addEventListener("click", () =>{
    screen2.innerText = +screen2.innerText / 100;
})

const digit = document.querySelectorAll(".number");

for(let i = 0; i < digit.length; i++){
    digit[i].addEventListener("click", () =>{
        screen2.innerText = (screen2.innerText =="0") ? digit[i].innerText : screen2.innerText + digit[i].innerText
    })
}

_dot.addEventListener("click", ()=>{
    if(!screen2.innerText.includes(".")){
        screen2.innerText += ".";
    }
})

plus.addEventListener("click", () => {
    num1 = +screen2.innerText;
    operator = "+";
    screen2.innerText ="";
    screen1.innerText =num1 + operator
})

subtract.addEventListener("click", () => {
    num1 = +screen2.innerText;
    operator = "-";
    screen2.innerText ="";
    screen1.innerText =num1 + operator
})

multiply.addEventListener("click", () => {
    num1 = +screen2.innerText;
    operator = "*";
    screen2.innerText ="";
    screen1.innerText =num1 + operator
})

divide.addEventListener("click", () => {
    num1 = +screen2.innerText;
    operator = "/";
    screen2.innerText ="";
    screen1.innerText =num1 + operator
})

equal.addEventListener("click", () => {
    num2 = +screen2.innerText;
    switch (operator) {
        case "+":
            result = num1 + num2;            
            break;
        case "-":
            result = num1 - num2; 
            break;
        case "*":
            result = num1 * num2; 
            break;
        case "/":
            result = (num2 == 0) ? 0 : num1 / num2; 
            break;
    
        default:
            break;
    }
    screen2.innerText = result;
    screen1.innerText = "";    
})


