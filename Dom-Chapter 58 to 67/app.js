//   Get element of id “main-content” and assign them in a variable.
//   Display all child elements of “main-content” element.


let maincontent = document.getElementById("main-content").childNodes;
for (i = 0; i < maincontent.length; i++) {
  console.log(maincontent[i]);
}


//   Get all elements of class “render” and show their innerHTML 
//   in browser.
var renderEle = document.getElementsByClassName("render");
console.log(renderEle[0].innerHTML);
console.log(renderEle[1].innerHTML);
console.log(renderEle[2].innerHTML);
console.log(renderEle[3].innerHTML);
console.log(renderEle[4].innerHTML);


// Fill input value whose element id first-name using javascript.

let firstname = document.getElementById("first-name").values;
let lastname = document.getElementById("last-name").values;
let email = document.getElementById("email").values;


let first_name = prompt("Enter your first name");
let last_name = prompt("Enter your last name");
let _email = prompt("Enter your email");


firstname = first_name;
lastname = last_name;
email = "Your email : "+ _email;


console.log( "Your Name : " + firstname + " "+lastname);



console.log("Your Email : " +_email);

//                     PART 02                   //


//  What is node type of  element having id “form-content”.

let form_content = document.getElementById("form-content");
console.log(form_content.nodeType);

//  Show node type of element having id “lastName” and its child node.
let lastnameNodeType = document.getElementById("last-name");
console.log(lastnameNodeType.nodeType);


// Update child node of element having id "lastName".

let update = document.getElementById("last-name");
update.innerHTML = 'newnode';
console.log(update);


// Get First and last child of id “main-content”.
// Get next and previous siblings of id “lastName”.
// Get parent node and node type of element having id “email”

let main_content = document.getElementById("main-content");
console.log(main_content.firstChild);
console.log(main_content.lastChild);
console.log(lastnameNodeType.nextSibling);
console.log(lastnameNodeType.previousSibling);