let displayNum = "";
let currNum = 0;
let prevNum = 0;
let currOp = "";
let prevOp = "";
let result = 0;
let clearSwitch = false;

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
  if (num === "." && displayNum.includes(".")) return;
  displayNum += num;
  displayNumber(displayNum);
  currNum = parseFloat(displayNum);
}

function displayNumber(num) {
  document.getElementById("numbers").innerHTML = num;
  if (num.length > 25) {
    document.getElementById("num-display").style.fontSize = "20px";
  } else if (num.length > 15) {
    document.getElementById("num-display").style.fontSize = "32px";
  } else if (num.length <= 15) {
    document.getElementById("num-display").style.fontSize = "48px";
  }
}

function clearCalc() {
  displayNum = "";
  currNum = 0;
  prevNum = 0;
  currOp = "";
  prevOp = "";
  result = 0;
  clearSwitch = false;
  displayNumber("0");
}

function operatorClick(operator) {
  if (clearSwitch === false) {
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
  if (currNum === 0) {
    displayNum = "";
    document.getElementById("numbers").innerHTML = "Error";
    displayNumber("Error");
    prevNum = null;
    currNum = null;
  } else {
    operate(arguments[0], arguments[1], arguments[2]);
    displayNumber(result);
    prevNum = result;
    currNum = 0;
    currOp = "";
    displayNum = "";
    clearSwitch = true;
  }
}

function deleteClick() {
  displayNum = displayNum.toString().slice(0, -1);
  displayNumber(displayNum);
  currNum = parseFloat(displayNum);
}

function operate(prev, curr, op) {
  switch (op) {
    case "/":
      result = divide(prev, curr);
      displayNumber(result);
      prevNum = result;
      currNum = null;
      break;
    case "*":
      result = multiply(curr, prev);
      break;
    case "-":
      result = subtract(prev, curr);
      break;
    case "+":
      result = add(parseFloat(curr), parseFloat(prev));
      break;
  }
}
