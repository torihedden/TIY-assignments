var newWord;


var fixStart = function(word){
  var firstLetter = word[0];

  for (var i = 1; i < word.length; i++){
      if (word[i] === firstLetter){

          console.log(i);

          newWord = word.replace(word[i], "*");
      }
  }
  return newWord;
};

fixStart("babble");
