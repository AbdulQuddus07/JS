//                       QUESTION NO 04                     \\
// Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
var fuel = prompt("Please enter a remaining fuel in your car");
if (fuel <= 0.25) {
    alert("please refill the fuel in your car");
} else {
    alert("your car fuel is full");
}