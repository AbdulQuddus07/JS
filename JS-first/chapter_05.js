// 0.1:Write a program that take two numbers & add them in a new variable. Show the result in your browser
var num1 = 3;
var num2 = 5;
var add = num1+num2;
var subtraction = num1-num2;
var multiplication = num1*num2;
var division = num1/num2;
var modulus = num2%num1;
document.write("Addition of "+num1+" and " +num2+ " is " +add+ "<br>");
// Q.2: Repeat task1 for subtraction, multiplication, division &
// modulus
document.write("Subtraction of "+num1+" from " +num2+ " is " +subtraction+ "<br>");
document.write("Multiplication of "+num1+" from " +num2+ " is " +multiplication + "<br>");
document.write("Division of "+num1+" and " +num2+ " is " +division+ "<br>");
document.write("Modulus of "+num1+" and " +num2+ " is " +modulus+ "<br>");
document.write("<br>");
// Q.4: Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets
// to a movie. Example output:
var cost_of_one_movie = 600, total_movie = 5,total_price = cost_of_one_movie*total_movie;
document.write("Total cost to buy "+total_movie+" tickets to a movie is "+total_price +"PKR"+ "<br>");
document.write("<br>");
// Q.5: Write a script to display multiplication table of any 
// number in your browser.

var numberr = 10;
document.write("Table of 4"+"<br>");
for (let index = 1; index <= numberr; index++) {
    document.write("4 x "+index+"="+index*4+"<br>");
}
document.write("<br>");
// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
var Celsius = 25;
var Fahrenheit = 70;
var result_of_celsius = (Fahrenheit-32)*5/9;
var result_of_fahrenheit = (Celsius*9/5)+32;
document.write(Celsius+"°F is equal to "+result_of_fahrenheit+"°C<br>");
document.write(Celsius+"°C is equal to "+result_of_celsius+"<br>");
document.write("<br>");
// Q.7: Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables Page 5 of 9
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
var price_of_item_one = 650,item1_quantity = 3;
var price_of_item_two = 100, quantity_of_item_2 = 7;
var shipping_charges = 100;
var total_cost = (price_of_item_one*item1_quantity)+(price_of_item_two*quantity_of_item_2)+shipping_charges;
document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is "+price_of_item_one+"<br>");
document.write("Quantity of item 1 is "+item1_quantity+"<br>");
document.write("Price of item 2 is "+price_of_item_two+"<br>");
document.write("Quantity of item 2 is "+price_of_item_two+"<br>");
document.write("Shipping Charges "+shipping_charges+"<br>");
document.write("Total cost of your order is "+total_cost+"<br>");
