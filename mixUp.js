var firstOne;
var firstTwo;

var newOne;
var newTwo;

var mixUp = function(strOne, strTwo){

    firstOne = strOne.slice(0, 1);
    console.log(firstOne);

    firstTwo = strTwo.slice(0, 1);
    console.log(firstTwo);

    newOne = firstTwo + strOne.slice(1, strOne.length);
    console.log(newOne);

    newTwo = firstOne + strTwo.slice(1, strTwo.length);
    console.log(newTwo);

};

mixUp("dog", "cat");
mixUp("tori", "kathryn");
