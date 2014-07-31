alert("JavaScript works!");

/*Curtis Tate
SDI 1407
Assignment 4 
July 31 2014*/


// Global Variables 

var phoneReturn
var urlReturn


// string Function


var phoneNumber = function(number) {
	var firstDash = number.charAt (3);
	var secondDash = number.charAt (7);
	var firstNumbers = number.substring (0,3);
	var secondNumbers = number.substring (4,7);
	var thirdNumbers = number.substring (8,12);
	
	
	if (firstDash != "-") {
		return false;
	} else if (secondDash != "-") {
		return false;
	} else if (firstNumbers >= "0" && firstNumbers <= "9") {
		return true;
	} else if (secondNumbers >= "0" && secondNumbers <= "9") {
		return true;
	} else if (thirdNumber >= "0" && secondNumbers <= "9") {
		return true;
	} else if (number != 12) {
		return false;
	} else return false;
	
		return phoneReturn};
	
	