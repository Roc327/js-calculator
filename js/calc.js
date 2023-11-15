let storedNum = "0";
let displayNum = "0";
let operatorSelection = "";
let operandNums = 0;

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
  if (displayNum === "0") {
    displayNum = num;
    displayNumber(displayNum);
  } else {
    displayNum += num;
    displayNumber(displayNum);
  }
}

function displayNumber(displayNum) {
  document.getElementById("numbers").innerHTML = displayNum;
  if (displayNum.length > 25) {
    document.getElementById("num-display").style.fontSize = "20px";
  } else if (displayNum.length > 15) {
    document.getElementById("num-display").style.fontSize = "32px";
  } else if (displayNum.length <= 15) {
    document.getElementById("num-display").style.fontSize = "48px";
  }
}

function clearCalc() {
  displayNum = "0";
  storedNum = "0";
  operatorSelection = "";
  operandNums = 0;
  displayNumber(displayNum);
}

function operatorClick(operator) {
  operatorSelection = operator;
  if (operandNums === 1) {
    operate(storedNum, displayNum);
  } else {
    storedNum = displayNum;
    displayNum = "0";
    operandNums++;
    displayNumber(displayNum);
  }
}

function operate(firstNum, secondNum, operator) {
  // Takes 2 numbers and an operator then performs the appropiate call to the function to perform the operation
}
