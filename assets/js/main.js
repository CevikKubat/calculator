function main(){
  const calculator = document.querySelector("#calculator");
  const screen = document.querySelector("#screen");

  let result = 0;
  let inputString = "";
  let outputString = "";
  let array = [];

  calculator.addEventListener("click", (e) => {
    let target = e.target;
    
    // Assign buttons to variables
    const number = target.getAttribute("data-number");
    const operator = target.getAttribute("data-operator");

    // Display numbers on screen
    if (number !== null){
      screen.textContent += number;
      inputString += number;
      if (checkZeroRepetition(inputString)){
        inputString = cleanInput(inputString);
      }
    }
    if (operator !== null){
      inputString += operator;
      screen.textContent = "";
      // console.log(isValidInput(inputString))
      if (!isValidInput(inputString)){
        inputString = cleanInput(inputString);
      }
    }
    if (operator === "="){
      outputString = inputString.replace(/([+\-*\/])/g, ' $1 ');
      console.log(outputString);
      let [x, op, y] = outputString.split(' ');
      // array = Array.from(inputString);
      // x = array[0];
      // op = array[1];
      // y = array[2];
      console.log(array);
      result = calculate(x, op, y);
      screen.textContent = result;
      inputString = result;
    }
    if (operator == "C"){
      inputString = "";
      screen.textContent = inputString;
    }

    console.log(inputString);
    }
  )
}

function isValidInput(inputString){
  if (inputString.length >= 2){
    let lastChar = inputString.slice(-1);
    let secondLastChar = inputString.slice(-2, -1);
    // console.log(`lastChar |${lastChar}|`)
    // console.log(`secondLastChar |${secondLastChar}|`)
    if (isOperator(lastChar) && isOperator(secondLastChar)) {
      return false;
    }
    else if (isOperator(lastChar)) {
      return true;
    }
  }
}

function isOperator(char){
  if (char === "+" || char === "-" || char === "*" || char === "/" || char === ","){
    return true;
  }
}

function cleanInput(inputString){
  return inputString.slice(0, -1);
}

function calculate(x, op, y){
  x = parseFloat(x);
  y = parseFloat(y);
  switch (op) {
    case "+":
      return add(x, y);
    case "-":
      return subtract(x, y);
    case "*":
      return multiply(x, y);
    case "/":
      return divide(x, y);
  }
}

function checkZeroRepetition(inputString){
  if (inputString.length >= 2){
    let firstChar = inputString.slice(0, 1);
    let secondChar = inputString.slice(1, 2);
    if (firstChar == "0" && secondChar == "0") {
      return inputString = "0";
    }
  }
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    return "can't divide by zero";
  } else {
    return x / y;
  }
}

main();