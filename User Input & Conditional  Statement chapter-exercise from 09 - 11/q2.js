//                       QUESTION NO 02                     \\

// Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Maam.

var gender = prompt("Write your gender");
gender = gender.toLowerCase();
if (gender === "male") {
  alert("Good Morning Sir");
} else if (gender === "female") {
  alert("Good Morning Maam");
} else {
  alert("Please type a valid gender");
}
