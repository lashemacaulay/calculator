function add(A,B) {
    return A + B;
}

function subtract(A,B) {
    return A - B;
}

function multiply(A,B) {
    return A * B;
}

function divide(A,B) {
    return A / B;
}

let numA = 0;
let numB = 0;
let operator = null;

function operate(numA,operator,numB) {
    return operator(numA,numB);
}

/* Functions to populate display*/
const display = document.getElementById("display");
let buttons = document.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++){
    if (buttons[i].classList.contains("digits"))
        buttons[i].addEventListener("click", function(event){
            display.value += event.target.innerText;
            let num = display.value;
        });

    if (buttons[i].innerText == "÷") {
        buttons[i].addEventListener("click", function(event){
            numA = display.value;
            display.value = "";
            operator = divide;
        });
    }

    if (buttons[i].innerText == "×") {
        buttons[i].addEventListener("click", function(event){
            numA = display.value;
            display.value = "";
            operator = multiply;
        });
    }

    if (buttons[i].innerText == "-") {
        buttons[i].addEventListener("click", function(event){
            numA = display.value;
            display.value = "";
            operator = subtract;
        });
    }

    if (buttons[i].innerText == "+") {
        buttons[i].addEventListener("click", function(event){
            numA = display.value;
            display.value = "";
            operator = add;
        });
    }

    if (buttons[i].innerText == "=") {
        buttons[i].addEventListener("click", function(){
            numB = display.value;
            display.value = operate(numA,operator,numB);
        });
    }
}