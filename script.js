const buttons = document.getElementsByClassName("btn");
const textArea = document.getElementById("display");
const calculator = document.getElementsByClassName("calculator")[0];
const body = document.getElementsByTagName("body")[0];
const darkBtn = document.getElementsByClassName("dark")[0];
const lightBtn = document.getElementsByClassName("light")[0];

let start = "";
// let op = null;
// let end = null;

const calc = function () {
    let value = this.getAttribute("data-value");

    if (value == "op") {
        value = this.getAttribute("val");
        textArea.textContent = value;
    } else if (value == "clear") {
        start = "";
        textArea.textContent = start;
        return;
    } else if (value == "equal") {
        const ans = eval(start);
        textArea.textContent = ans;
        start = "" + ans;
        return;
    } else if (value == "back" && start.length > 0) {
        start = start.slice(0, start.length - 1);
        textArea.textContent = start;
        return;
    } else if (value == "back") {
        return;
    }
    start += value;
    textArea.textContent = start;
};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", calc);
}

const changeToLight = function () {
    calculator.style.borderColor = "black";
    body.style.backgroundColor = "white";
};

const changeToDark = function () {
    calculator.style.borderColor = "white";
    body.style.backgroundColor = "black";
};

darkBtn.addEventListener("click", changeToDark);
lightBtn.addEventListener("click", changeToLight);
