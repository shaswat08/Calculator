const display = document.querySelector("#display");

function action(sign){
    display.value += sign;
}

function calculate(){
    display.value = eval(display.value);
}

function clearDisplay(){
    display.value = "";
}