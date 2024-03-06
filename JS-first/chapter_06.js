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

