//  1. Write a program to take a number in a variable, do the
//  required arithmetic to display the following result in your
//  browser:
var result = "Result";
var a = 10;
document.write(result +"<br>");
document.write("The value of a is: "+a+"<br>");
document.write(".............................."+"<br>");
//==============================================================
document.write("<br>")
document.write("The value of ++a is: ",++a+"<br>");
document.write("Now the value of a is: ",a+"<br>");

document.write("<br>")
document.write("The value of a++ is: "+a++,"<br>");
document.write("Now the value of a is: "+a+"<br>");

document.write("<br>")

document.write("The value of --a is: ",--a+"<br>");
document.write("Now the value of a is: ",a+"<br>");

document.write("<br>")

document.write("The value of a-- is: "+a--,"<br>");
document.write("Now the value of a is: "+a+"<br>");

//  2. What will be the output in variables a, b & result after
//  execution of the following script:
//  var a = 2, b = 1;
//  var result = --a - --b + ++b + b--;
//  Explain the output at each stage:
//  --a;
//  --a - --b;
//  --a - --b + ++b;
//  --a - --b + ++b + b--
document.write("<br>")
var a = 2, b = 1;
document.write("a is "+a +"<br>"+ "b is "+b+"<br>");
var result1 = --a ;
var result2 = --a - --b;
var result3 = --a - --b + ++b;
var result4 = --a - --b + ++b + b--;
document.write("--a result is "+result1 +"<br>"+"--a - --b result is "+result2+"<br>"+"--a - --b + ++b result is" +  result3+ "<br>"+"--a - --b + ++b +b-- result is " +result4+"<br>");

document.write("<br>")
//  3. Write a program that takes input a name from user & 
//  greet the user.
var user = prompt("Write something here!");
document.write(user);



//  4.
//  5. Write a program to take input a number from user & 
//  display it’s multiplication table on your browser. If user 
//  does not enter a new number, multiplication table of 5 
//  should be displayed by default.
document.write("<br>")
var userMy = +prompt("Write some number here!","5");
document.write(userMy*5);


//  6. Take
//  a) Take three subjects name from user and store them in 3 
//  different variables.
//  b) Total marks for each subject is 100, store it in another 
//  variable.
//  c) Take obtained marks for first subject from user and 
//  stored it in different variable.
//  ALERTS | JAVASCRIPT
//  Page 3 of 3
//  d) Take obtained marks for remaining 2 subjects from user 
//  and store them in variables.
//  e) Now calculate total marks and percentage and show the 
//  result in browser like this.(Hint: user table)

var firstSubject = prompt("write first subject name");
var secondSubject = prompt("write second subject name");
var thirdSubject= prompt("write third subject name");
var totalMarks = 100;
var Obtained_Marks = +prompt("Enter-Obtained-Marks")
document.write("<h3>"+"Subject"+"Total Marks"+"Obtained Marks"+"Percentage");
document.write(firstSubject,totalMarks+Obtained_Marks,totalMarks/Obtained_Marks*100+"5");
