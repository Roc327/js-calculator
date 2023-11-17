let displayNum = "";
let currNum = 0;
let prevNum = 0;
let currOp = "";
let prevOp = "";
let result = 0;
let clearSwitch = 0;

function add() {
  return arguments[0] + arguments[1];
}

function subtract() {
  return arguments[0] - arguments[1];
}

function multiply() {
  return arguments[0] * arguments[1];
}

function divide() {
  return arguments[0] / arguments[1];
}

function onNumClick(num) {
  displayNum += num;
  displayNumber(displayNum);
  currNum = parseFloat(displayNum);
}

function displayNumber(num) {
  document.getElementById("numbers").innerHTML = num;
}

function clearCalc() {
  displayNum = "";
  currNum = 0;
  prevNum = 0;
  currOp = "";
  prevOp = "";
  result = 0;
  displayNumber("0");
}

function operatorClick(operator) {
  if (clearSwitch === 0) {
    currOp = operator;
    prevNum = currNum;
    currNum = 0;
    displayNum = "";
  } else {
    currOp = operator;
    prevNum = result;
    currNum = 0;
    displayNum = "";
  }
}

function equalClick() {
  operate(arguments[0], arguments[1], arguments[2]);
  displayNumber(result);
  prevNum = result;
  currNum = 0;
  currOp = "";
  clearSwitch = 1;
}

function operate(firstNum, secondNum, operator) {
  switch (operator) {
    case "/":
      if (secondNum === "0") {
        document.getElementById("numbers").innerHTML = "Error";
        currNum = 0;
        prevNum = 0;
        currOp = "";
        prevOp = "";
        break;
      } else {
        result = divide(firstNum, secondNum);
        break;
      }
    case "*":
      result = multiply(firstNum, secondNum);
      break;
    case "-":
      result = subtract(firstNum, secondNum);
      break;
    case "+":
      result = add(parseFloat(firstNum), parseFloat(secondNum));
      break;
  }
}
