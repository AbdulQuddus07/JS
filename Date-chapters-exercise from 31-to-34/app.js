//                  QUESTION NO 01                     \\
// Write a program that displays current date and time in
// your browser.

let date = new Date();
document.write(date);

//                  QUESTION NO 02                     \\
// Write a program that alerts the current month in words.
// For example December.
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();
alert("Current month is : " + month[d.getMonth()]);

//                  QUESTION NO 03                     \\
// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const day = new Date();
alert("Current day is : " + weekday[day.getDay()]);





const weekdays= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const funday = new Date();

weekdays.forEach(element => {
    
});
if (weekdays[funday.getDay()] === "Saturday" || weekday[funday.getDay()] === "Sunday") {
    alert("It's a Funday");
} else {
    alert("oops it's not!");
}






