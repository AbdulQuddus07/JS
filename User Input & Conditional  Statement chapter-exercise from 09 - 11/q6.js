//                       QUESTION NO 06
// . Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade

let engishMarks = +prompt("Write you english marks");
let urduMarks = +prompt("Write you urdu marks");
let mathMarks = +prompt("Write you math marks");
if (engishMarks >= 80 && urduMarks >= 80 && engishMarks >= 80) {
  console.log("Excellent");
  let div = document.querySelector("div");
  let heading = document.createElement("h1");
  console.log(heading);
  div.append(heading);
  div.append(h1);
  div.style.maxWidth = "300px";
  div.style.minHeight = "300px";
  div.style.border = "1px solid black";
  div.style.margin = "50px auto";
} else if (engishMarks >= 70 && urduMarks >= 70 && engishMarks >= 70) {
  console.log("Good");
} else if (engishMarks >= 60 && urduMarks >= 60 && engishMarks >= 60) {
  console.log("You need to improve");
} else if (engishMarks < 60 && urduMarks < 60 && engishMarks < 60) {
  console.log("Sorry");
} else {
  console.log("Enter a valid marks");
}
