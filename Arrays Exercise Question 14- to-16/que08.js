// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students

let studentNames = ["Michael", "John", "Tony"];
let studentMarks = [320, 230, 480];
let totalMarks = 500;
document.write(`<div class="container">
<h2>Students Numbers</h2>
</br>
Marks of ${studentNames[0]} is ${studentMarks[0]}. Percentage : ${
  (studentMarks[0] * 100) / totalMarks
}%
</br>
Marks of ${studentNames[1]} is ${studentMarks[1]}. Percentage : ${
  (studentMarks[1] * 100) / totalMarks
}%
</br>
Marks of ${studentNames[2]} is ${studentMarks[2]}. Percentage : ${
  (studentMarks[2] * 100) / totalMarks
}%
`);
