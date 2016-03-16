// Write a JavaScript function that retuns a passed string with letters in alphabetical order.

var wordSort = function(word){

    var lowerWord = word.toLowerCase();
    var splitWord = lowerWord.split("");
    var sortWord = splitWord.sort();
    var trimWord = sortWord.join("");
    return trimWord.trim(); //removes whitespace from both ends of a string, although in this case there will only be leading whitespace
};

wordSort("victoria");
// => 'aciiortv'

wordSort("Victoria Michelle Hedden");
// => 'accddeeeehhiiillmnortv'

// wordSort("kathryn amanda hedden");

// wordSort("the quick brown fox jumps over the lazy dog");
