//                       QUESTION NO 01                     \\
// Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

var userCity = prompt("Enter your city name e.g karachi");
userCity = userCity.toLowerCase();
  if (userCity === "karachi") {
    alert("“Welcome to the city of lights”");
  } else {
    alert("Please type a valid city name");
  }
