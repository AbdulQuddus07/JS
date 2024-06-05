//                        QUESTION NO 01 & 02                    \\
// Show an alert box on click on a link.
var google = document.getElementById("google");
google.addEventListener("click", () => {
  alert("Google");
});
// Display some Mobile images in browser. On click on an
// image Show the message in alert to user.
var mo = document.querySelector(".mo");
mo.addEventListener("click", () => {
  alert("Thanks for purchasing a phone from us");
});

//                        QUESTION NO 03                    \\
//   Display 10 student records in table and each row should contain a delete
//   button. If you click on a button to delete a record, entire row should be
//   deleted.
var table = document.getElementById("table");
table.addEventListener("click", deleteRow);

function deleteRow(event) {
  if (event.target.classList.contains("removeItem")) {
    return;
  }

  event.target.parentNode.remove();
  event.preventDefault();
}
//                        QUESTION NO 04                    \\
// Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

function sizeImage() {
  document.getElementById("before").style.width = "600px";
  document.getElementById("before").style.height = "600px";
  document.getElementById("before").src =
    "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
}
function resizeImageAgain() {
  document.getElementById("before").style.width = "300px";
  document.getElementById("before").style.height = "300px";
  document.getElementById("before").src =
    "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
}

//                        QUESTION NO 04                    \\
// Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.
let increment = 0;
var inc = document.querySelector(".inc");
var h3 = document.querySelector("#h3");
inc.addEventListener("click", () => {
  ++increment;
  h3.innerHTML = increment;
});
function decrement() {
  if (increment > 0) {
    --increment;
    h3.innerHTML = increment;
  }
}
