alert('please do not use symbols when filling in blanks');
var cost = prompt("enter total cost of a new car"); //use total cost of car to start calculating payments.
var apr = prompt("enter annual percentage rate on loan as a decimal"); //use apr to figure amount of interest for term.
var down= prompt("enter cash down or value of trade-in"); //use down to take into account the amount off of total.
var term= prompt("enter length of term for loan in months"); // use term to figure out length of payment plan.

var final= (cost - down * apr) /term; // equation used to solve for monthly payments order of operations makes a world of difference. use parentheses well.
alert('Your monthly payments are $' +final); // result of equation
console.log("cost of car monthly $" +final); // answer is printed in log for assignment parameters

alert(" cost of gas in a month");


var Gallons= prompt("gallons of gas per day");
var price= prompt("Price of gas without dollar sign");
var days= prompt("days of use");

var total= (Gallons * price) * days;
alert('cost of gas in a month $'+ total);
console.log("cost of gas in a month $"+total);

var FinalCost= (final+total)*12;
alert("basic cost of a car in a year $" +FinalCost);

console.log("basic cost of car in a year $"+FinalCost);