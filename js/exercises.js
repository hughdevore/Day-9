// Assignment Day-9




// Problem 1.
//Create a function that takes an array of values and returns one randonly 
//selected value from that array.



function randoArray(value) {

	var myArray = [1, 2, 3, 4, 5];

	var arrayLength = myArray.length;

	return value = myArray[Math.round(Math.random() * arrayLength)];
}






// Problem 2.
//Create a function that takes an unencrypted string and returns the ROT-13
//version of that string. This is slightly different but similar to the example 
//we did in class.


function rot13(myName) {

	var rot = 13;

	var encrypted = '';

	var charValue = 0;

	var lowLowRange = 'a'.charCodeAt();
	var highLowRange = 'z'.charCodeAt();
	var midLowRange = 'm'.charCodeAt();

	var lowUpRange = 'A'.charCodeAt();
	var highUpRange = 'Z'.charCodeAt();
	var midHighRange = 'M'.charCodeAt();

		for(var i = 0; i < myName.length; i++) {

			charValue = myName.charCodeAt(i);
	// lower case
			if (charValue >= lowLowRange && charValue <= highLowRange) {
				if(charValue >= midLowRange) {
					charValue -= rot;
					encrypted = encrypted + String.fromCharCode(charValue);
				} else {
					charValue += rot;
					encrypted = encrypted + String.fromCharCode(charValue);
				}	
			}
	// upper case
			else if (charValue >= lowUpRange && charValue <= highUpRange) {
				if (charValue >= midHighRange) {
					charValue -= rot;
					encrypted = encrypted + String.fromCharCode(charValue);
				} else {
					charValue += rot;
					encrypted = encrypted + String.fromCharCode(charValue);
				}

			}
			else {
				throw 'You\'ve entered an invalid character' + myName[i];
			}
		}
		return encrypted;
}






// Problem 3.
//Create a function that takes a ROT-13 encrypted string and returns the decrypted 
//version of that string.



function decrypt(myName) {

var rot = 13;

var encrypted = '';

var charValue = 0;

var lowLowRange = 'a'.charCodeAt();
var highLowRange = 'z'.charCodeAt();
var midLowRange = 'm'.charCodeAt();

var lowUpRange = 'A'.charCodeAt();
var highUpRange = 'Z'.charCodeAt();
var midHighRange = 'M'.charCodeAt();

	for(var i = 0; i < myName.length; i++) {

		charValue = myName.charCodeAt(i);
// lower case
		if (charValue >= lowLowRange && charValue <= highLowRange) {
			if(charValue >= midLowRange) {
				charValue -= rot;
				encrypted = encrypted + String.fromCharCode(charValue);
			} else {
				charValue += rot;
				encrypted = encrypted + String.fromCharCode(charValue);
			}	
		}
// upper case
		else if (charValue >= lowUpRange && charValue <= highUpRange) {
			if (charValue >= midHighRange) {
				charValue -= rot;
				encrypted = encrypted + String.fromCharCode(charValue);
			} else {
				charValue += rot;
				encrypted = encrypted + String.fromCharCode(charValue);
			}

		}
		else {
			throw 'You\'ve entered an invalid character' + myName[i];
		}
	}
	return encrypted;
}






//Problem 4.
//Create a function that takes an unencrypted string and an integer (n) and returns
//the ROT-N version of that string.


function rotn(myName, rot) {

	var encrypted = '';

	var charValue = 0;

	// lowerLow = 97
	var lowerLow = 'a'.charCodeAt();

	// lowerHigh = 122
	var lowerHigh = 'z'.charCodeAt();

	// upperLow = 65
	var upperLow = 'A'.charCodeAt();

	// upperHigh = 90
	var upperHigh = 'Z'.charCodeAt();

	if (rot === undefined) {
		rot = 13;
	}

// this for loop will check to see that the entered values are within our ascii upper and lower 
// alphabets and then make sure the 
	for(var i = 0; i < myName.length; i++) {

		charValue = myName.charCodeAt(i);

// lower case myName solver
		if (charValue >= lowerLow && charValue <= lowerHigh) {
			// local variable 'alphabetValue' is the charalue minus the ascii value
			var alphabetValue = (charValue - 96);
			var value = (alphabetValue + rot)

			// this loop will reduce value by 26 until it is less than or equal to 26
				while (value > 26) {
					value = value - 26;
				}

			charValue = value + 96;
			encrypted = encrypted + String.fromCharCode(charValue);
		} 

// upper case myName solver
		else if (charValue >= upperLow && charValue <= upperHigh) {
			// local variable 'alphabetValue' is the charalue minus the ascii value
			var alphabetValue = (charValue - 64);
			var value = (alphabetValue + rot)

			// this loop will reduce value by 26 until it is less than or equal to 26
			while (value > 26) {
				value = value - 26;
			}

			charValue = value + 64;

			encrypted = encrypted + String.fromCharCode(charValue);
			
		} else {
			throw 'You\'ve entered an invalid character' + myName[i];
		}
	}
	return encrypted;
}






//Problem 5.
//Create a javascript function that takes an array of student names and returns an
//array of randomly selected pairs of students (array of arrays).


function pairPicker(randomOne, randomTwo) {
	var students = ['Hughie', 'Alex', 'Gabe', 'Paul', 'Charlie', 'Travis', 'Erika', 'Daniel', 'Jacob', 'Ryan'];

	var classSize = students.length;

	randomOne = students[Math.round(Math.random() * classSize)];

	randomTwo = students[Math.round(Math.random() * classSize)];

	while (randomOne === randomTwo) {
		students[Math.round(Math.random() * classSize)];
	}

	return '(' + randomOne + ', ' + randomTwo + ')'
}





//Problem 6.
//Create a function that takes a string and returns a string with a dash (-) in 
//between each character using .split and .join.





//Problem 7.
//Create a function that takes a string and returns a string with a dash (-) in 
//between each character without using .split or .join.






//Problem 8.
//Create a function that takes two string strings and returns a string with a dash (-) 
//in between each character without using .split or .join.






//Problem 9.
//Use $('selector').val() and $('selector').click() to re-create your number guessing 
//game without using window.prompt. Use Bootstrap to build the page.




//Problem 10.
//Use $('selector').val() and $('selector').click() to re-create your slot machine 
//without using window.prompt. Use Bootstrap to build the page.
