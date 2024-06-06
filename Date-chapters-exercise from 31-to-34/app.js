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
document.write(
  "</br>=================================================Question no 03====================================="
);
//                  QUESTION NO 03                     \\
// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const day = new Date();
alert("Current day is : " + weekday[day.getDay()]);
document.write(
  "</br>=================================================Question no 04====================================="
);
//                  QUESTION NO 04                     \\
// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

let weekDays = [
  "Saturaday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
let fundayArray = ["Saturaday", "Sunday"];
let dt = new Date();
let dy = dt.getDay();
let todays = weekDays[dy];

if (fundayArray.includes(todays)) {
  document.write("</br></br>", todays, " It's a funday");
} else {
  document.write("</br></br>", todays, " It's Working day");
}
document.write(
  "</br>=================================================Question no 05====================================="
);
//                  QUESTION NO 05                     \\
// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
let Pmonth = [
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
let dte = new Date();
let days = dte.getDate();
let months = date.getMonth();
let presentMonth = Pmonth[months];
if (days < 15) {
  document.write(`</br></br> First Fifteen Days of ${presentMonth}`);
} else {
  document.write(`</br></br> Last Fifteen Days of ${presentMonth}`);
}
document.write(
  "</br>=================================================Question no 06====================================="
);
//                  QUESTION NO 06                     \\
// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
let newdate = new Date();
let presentDate = date.toString();
let millSeconds = date.getTime();
document.write(` </br></br>Current Date ${presentDate} </br></br> Elapsed Milliseconds since "Jan 1 , 1970 " ${millSeconds}</br></br>
    Elapsed Minutes since "Jan 1 , 1970 " : ${millSeconds / 1000 / 60}`);
document.write(
  "</br>=================================================Question no 07====================================="
);
//                  QUESTION NO 07                     \\
// rite a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

let hour = new Date();
let hours = hour.getHours();
if (hours < 12) {
  document.write(`</br></br>${hours.toLocaleString()} :Its A.M`);
} else {
  document.write(` </br></br>${hours.toLocaleString()} : Its P.M`);
}
document.write(
  "</br>=================================================Question no 08====================================="
);
//                  QUESTION NO 08                     \\
// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
let laterDate = new Date("12 31, 2024");
document.write(`</br></br>Later Date : ${laterDate}`);
document.write(
  "</br>=================================================Question no 09====================================="
);
//                  QUESTION NO 09                     \\
// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

let dat = new Date();
let presentMilliseconds = date.getTime();
let ramadanDate = new Date("Mar 11 , 2024");
let ramadanDateMilliseconds = ramadanDate.getTime();
let difference = presentMilliseconds - ramadanDateMilliseconds;
let passedDate = Math.floor(difference / (1000 * 60 * 60 * 24));
document.write(`</br></br>1st Ramadan was on ${ramadanDate.toDateString()}</br></br>
     ${passedDate} days has passed since last Ramadan </span>
    `);

document.write(
  "</br>=================================================Question no 10====================================="
);
//                  QUESTION NO 10                      \\
// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
let pDate = new Date();
let pMilliseconds = pDate.getTime();
// console.log(presentMilliseconds);
let myDate = new Date ("Dec 05 ,2015");
// console.log(referenceDate);

let df = pMilliseconds - myDate ;
let passedSecond =  Math.floor(df/1000)
document.write(`</br></br>reference Date ${myDate} </br></br>${passedSecond} seconds has passed since beginning of 2015`);