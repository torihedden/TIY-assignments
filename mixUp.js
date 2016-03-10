//Create a function that takes two strings and returns a concatenation of the two, swapping the first letter of both words onto the other.

var firstOne;
var firstTwo;

var newOne;
var newTwo;

var mixUp = function(strOne, strTwo){

    firstOne = strOne.slice(0, 2);
    firstTwo = strTwo.slice(0, 2);

    newOne = firstTwo + strOne.slice(2, strOne.length);
    newTwo = firstOne + strTwo.slice(2, strTwo.length);

    return newOne + " " + newTwo;

};

mixUp("dog", "cat");
mixUp("java", "script");
mixUp("tori", "kathryn");
