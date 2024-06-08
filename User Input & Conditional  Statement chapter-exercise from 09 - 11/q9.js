//                       QUESTION NO 09                      \\

// Write a program that checks whether the given input is an
// even number or an odd number.

let usernumber = +prompt(
  "Write a number to checks whether the given input is an even number or an odd number"
);
if (usernumber % 2 == 0) {
  alert("The given number is an even number.");
} else {
  alert("The given number is an odd number.");
}
