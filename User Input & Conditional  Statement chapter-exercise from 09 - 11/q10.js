//                       QUESTION NO 10                     \\

// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var firstNumber = +prompt("Enter first number");
var secondNumber = +prompt("Enter second number");
var operator = prompt("enter operator");
if (operator === "+") {
  console.log(firstNumber + secondNumber);
} else if (operator === "-") {
  console.log(firstNumber - secondNumber);
} else if (operator === "*") {
  console.log(firstNumber * secondNumber);
} else if (operator === "/") {
  console.log(firstNumber / secondNumber);
} else {
  console.log("Enter a valid number and operator");
}
