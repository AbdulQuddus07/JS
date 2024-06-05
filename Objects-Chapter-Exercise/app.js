//     Question No 01:-
// Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;

var itemsArray = [
  { name: "juice", price: 50, quantity: 3 },
  { name: "cookie", price: 30, quantity: 9 },
  { name: "shirt", price: 880, quantity: 1 },
  { name: "pen", price: 100, quantity: 2 },
];

let juice = itemsArray[3]["price"] * itemsArray[3]["quantity"];
let cookie = itemsArray[1]["price"] * itemsArray[1]["quantity"];
let shirt = itemsArray[2]["price"] * itemsArray[2]["quantity"];
let pen = itemsArray[3]["price"] * itemsArray[3]["quantity"];

console.log("The total price of juice =", juice);
console.log("The total price of cookies =", cookie);
console.log("The total price of shirt =", shirt);
console.log("The total price of pen =", pen);

console.log("The overall item price is =", juice + cookie + shirt + pen);

//  ===========================================================================  //
//                        Question No 02:-
// Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.
const Object = {
  name: "Coders.tech",
  email: "coders@gmail.com",
  password: 123456,
  age: 22,
  gender: "male",
  city: "Karachi",
  country: "Pakistan",
};
//  Check if age and country properties exist in object or not.
if ("age" in Object);
{
  console.log("age property is exist");
}
if ("country" in Object);
{
  console.log("country property is exist");
}
//  Also check firstName and lastName properties in object.
if (typeof Object.property === "firstName") {
  console.log("firstName property is exist");
} else {
  console.log("firstName property is does not exist");
}
if (typeof Object.property === "lastName") {
  console.log("lastName property is exist");
} else {
  console.log("lastName property is does not exist");
}

//  ===========================================================================  //
//                        Question No 03:-
//  Create a constructor function with some properties. Now
//  create multiple records using the constructor.


//               Constructor Function                //

function Student(name, age, email, address , profession) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.address = address;
  this.profession = this.profession
}
let engineer = new Student("Abdul Quddus",23,"abdulquddus@gmail.com","Karachi","Engineer");
let teacher = new Student("Basit",29,"basit@gmail.com","Lahore","Teacher");
let doctor = new Student("Faraz",30,"faraz@gmail.com","Islamabad","Doctor");

//  ===========================================================================  //
//                        Question No 04:-
// Suppose you want to check population of your area, their educations and professions.  
// Create a constructor function which holds following 
// properties: 
// Name, gender, address, education, profession,  
// Enter all records one by one.  
// Hint:   
//  use select box for education and profession,  
//  use radio box for gender 
// Bonus :  use can use localStorage to save records. 



class Record {
  constructor(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
  }
}

document.getElementById('recordForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var address = document.getElementById('address').value;
  var education = document.getElementById('education').value;
  var profession = document.getElementById('profession').value;

  var newRecord = new Record(name, gender, address, education, profession);
  saveRecord(newRecord);
  alert('Record saved successfully!');
  document.getElementById('recordForm').reset();
});