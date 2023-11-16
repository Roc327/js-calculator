let currNum = "";
let prevNum = "";
let currOp = "";
let prevOp = "";
let result = "";

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
  currNum += num;
  displayNumber(currNum);
}

function displayNumber(num) {
  document.getElementById("numbers").innerHTML = num;
}

function clearCalc() {
  currNum = "";
  prevNum = "";
  currOp = "";
  prevOp = "";
  result = "";
  displayNumber("0");
}

function operatorClick(operator) {
  //
}

function operate(firstNum, secondNum, operator) {
  switch (operator) {
    case "/":
      if (secondNum === "0") {
        document.getElementById("numbers").innerHTML = "Error";
        storedNum = "0";
        displayNum = "0";
        operandNums = 0;
        break;
      } else {
        displayNum = divide(firstNum, secondNum);
        displayNumber(displayNum);
        storedNum = displayNum;
        displayNum = "0";
        break;
      }
    case "*":
      displayNum = multiply(firstNum, secondNum);
      displayNumber(displayNum);
      storedNum = displayNum;
      displayNum = "0";
      break;
    case "-":
      displayNum = subtract(firstNum, secondNum);
      displayNumber(displayNum);
      storedNum = displayNum;
      displayNum = "0";
      break;
    case "+":
      displayNum = add(parseFloat(firstNum), parseFloat(secondNum));
      displayNumber(displayNum);
      storedNum = displayNum;
      displayNum = "0";
      break;
  }
}
