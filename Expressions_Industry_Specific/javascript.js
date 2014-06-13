alert("gas card cost in a month");


var Gallons= prompt("gallons of gas");
var price= prompt("Price of gas without dollar sign");
var days= prompt("days of use");

var total= (Gallons * price) * days;
alert('cost of gas in a month $'+ total);
console.log("cost of gas in a month $"+total);