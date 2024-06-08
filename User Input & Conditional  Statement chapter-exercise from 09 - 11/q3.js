//                       QUESTION NO 03                     \\
// Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color----------Message
// Red                   Must Stop
// Yellow                Ready to move
// Green                 Move now

var trafficColor = prompt("Enter a traffic color signal!");
trafficColor = trafficColor.toLowerCase();
if (trafficColor === "red") {
  alert("Must Stop!");
} else if (trafficColor === "yellow") {
  alert("Ready to move!");
} else if (trafficColor === "green") {
  alert("Move now!");
}