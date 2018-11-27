/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var dob = new Date(1992, 1, 13);
var theDay = dob.getDay();
alert(theDay);

function daysToEndYear(){
  // calculates the number of days left to end of year
  var today = new Date();
  var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); //set date and month
  endYear.setFullYear(today.getFullYear()); // set year to this year
  var msPerDay = 24 * 60 * 60 * 1000; // number of milliseconds per day
  var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
  var daysLeft = Math.round(daysLeft); // returns days left in the year
  
  return daysLeft;
}

function JSDigiClock() {
  // represents the time in digital clock format e.g. 10:40:23 P.M., 9:05:10 A.M.
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var temp = '' + ((hour > 12) ? hour-12 : hour);
  if (temp == 0)
    temp = '12';
  
  temp += ((minute < 10) ? ':0' : ':') + minute;
  temp += ((second < 10) ? ':0' : ':') + second;
  temp += (hour>=12) ? ' P.M' : ' A.M';
  
  return temp;
}

alert(JSDigiClock());

var s = new String('foo');
alert(typeof s);

var s1 = '2+2';
alert(eval(s1));

// template literals, embedded expression
var tempLit = function(){
  var a = 5;
  var b = 10;
  return `Fifteen is ${a+b} and not ${2 * a + b}.`;
}

alert(tempLit());









