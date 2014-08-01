alert("JavaScript works!");

/*Curtis Tate
SDI 1407
Assignment 4 
July 31 2014*/


// Global Variables 

var phoneReturn
var urlReturn
var emailReturn
var firstCase


/* string Function
Check phoneNumber */

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
	
	
// End of Check PhoneNumber 
	
	
// Check Url 
	
	
var url = function (enterUrl) {
	var suburl = enterUrl.substr(0,8);
	if(subUrl.contains ("http://")) {
	return true;
} else if (subUrl.contains("http://")) {
	return true;
} else 
	return false;
		return urlResult;
};	


myPrompt = prompt ("Enter Url");
if (myPrompt === "http://www.ign.com") {
	console.log("Its a match");
if	(myPrompt === "http//:www.google.com") {
	console.log("Not a Match Try Again");	
} else {
	console.log("Wrong Url Try again");
};
} else {
	console.log("Its a Match congratulations");
};

// End of Check Url  


// Check E-mail Address


var checkemail = function(val) {
var at = email.indexof("@"); 
var email = val;
var dot = email.lastaindexof(".");

if (at == -1 ||dot == -1 || (at + 2) >= dot) { 
	return false;
} else {
	return true;
	}
};

// End of Check Email


var firstCase = function (srtinginput) {
var letter = stringinput.split ("");
	for (i + 0; i<word.length; i++) { [i].substr(0,1).upperCase() + word[i].substr(1).lowerCase();
}; 
	var capletter = letter.combine ("");
	return capLetter;
};


var actualNumber = function(string) {
var changeString = paraseInt(string);
	numberReturn = changeString;
		return numberReturn;
};