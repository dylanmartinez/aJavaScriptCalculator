let trailingResult = 0;
let operationOptions = ['divide', 'multiply', 'subtract', 'add'];
let workingOperation = "";

// Shows the Number you see on display
function displayNumber(input) {
  console.log(trailingResult, "<<trailingResult", document.getElementById("display").innerHTML, "<<display", workingOperation, "<<workingOperation");
  if (document.getElementById("display").innerHTML === "0" && operationOptions.indexOf(input) === -1) {
    if (input === "decimal") {
      document.getElementById("display").innerHTML = "0."
    } else if (input === "negative") {
      if (document.getElementById("display").innerHTML.indexOf("-") === -1) {
        document.getElementById("display").innerHTML = "-" + document.getElementById("display").innerHTML
      } else if (document.getElementById("display").innerHTML.indexOf("-") > -1) {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.slice(1, document.getElementById("display").innerHTML.length)
      }
    } else {
      document.getElementById("display").innerHTML = input;
    }

  } else if (operationOptions.indexOf(input) >= 0) {
    // console.log("dealing with an operation")

    if (trailingResult === document.getElementById("display").innerHTML) {
      // Operand button pressed twice exception
      workingOperation = input;

    } else if (workingOperation === "") {
      // Dealing without an operand
      workingOperation = input;
      trailingResult = document.getElementById("display").innerHTML;
      document.getElementById("display").innerHTML = 0;

    } else {
      // Dealing with a set operand
      trailingResult = calculate(trailingResult, document.getElementById("display").innerHTML, workingOperation);
      document.getElementById("display").innerHTML = 0;
      workingOperation = input;
    }

  } else if (input === "equals") {
    document.getElementById("display").innerHTML = calculate(trailingResult, document.getElementById("display").innerHTML, workingOperation);
    trailingResult = 0;
    workingOperation = "";

  } else if (input === "decimal") {
    if (document.getElementById("display").innerHTML.indexOf(".") === -1) {
      document.getElementById("display").innerHTML += ".";
    }

  } else if (input === "negative") {
    if (document.getElementById("display").innerHTML.indexOf("-") === -1) {
      document.getElementById("display").innerHTML = "-" + document.getElementById("display").innerHTML
    } else if (document.getElementById("display").innerHTML.indexOf("-") > -1) {
      document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.slice(1, document.getElementById("display").innerHTML.length);
    }
  } else {
    document.getElementById("display").innerHTML += input;
  }
};

// Clears the display
function clearDisplay() {
  document.getElementById("display").innerHTML = 0;
  trailingResult = 0;
  workingOperation = ""
};

//switch statement to define operations
function calculate(firstNumber, secondNumber, operation) {
  let result;
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  switch(operation) {
    case "add":
      result = firstNumber + secondNumber;
      break;
    case "subtract":
      result = firstNumber - secondNumber;
      break;
    case "multiply":
      result = firstNumber * secondNumber;
      break;
    case "divide":
      result = firstNumber / secondNumber;
      break;
    default:
        console.log("calculate() switch statement missed something")
  }
  return result.toString()
};

//Allows Keyboard Use on Numbers
window.document.onkeydown = function(event) {
  let keystroke = event.key;
  if (event.key === "0") {
    displayNumber("0");
  } else if (keystroke === "1") {
    displayNumber("1");
  } else if (keystroke === "2") {
    displayNumber("2");
  } else if (keystroke === "3") {
    displayNumber("3");
  } else if (keystroke === "4") {
    displayNumber("4");
  } else if (keystroke === "5") {
    displayNumber("5");
  } else if (keystroke === "6") {
    displayNumber("6");
  } else if (keystroke === "7") {
    displayNumber("7");
  } else if (keystroke === "8") {
    displayNumber("8");
  } else if (keystroke === "9") {
    displayNumber("9");
  }
}
