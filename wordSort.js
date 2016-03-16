var wordSort = function(word){

    var newWord = word.split("");
    console.log(newWord);
    var sortWord = newWord.sort();
    return sortWord.join("");
};

wordSort("victoria");
// => 'aciiortv'
