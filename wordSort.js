// Write a JavaScript function that retuns a passed string with letters in alphabetical order.

var wordSort = function(word){

    var newWord = word.split("");
    var sortWord = newWord.sort();
    var trimWord = sortWord.join("");
    return trimWord.trim(); //removes whitespace from both ends of a string
};

wordSort("victoria");
// => 'aciiortv'

wordSort("Victoria Michelle Hedden");
// => 'HMVaccddeeeehiiillnort'

// wordSort("voldemort");
// // => 'delmoortv'
