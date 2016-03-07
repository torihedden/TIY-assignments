var finishedString = [];

var LetterCapitalize = function(string){
    stringSplit = string.split(" ");
    console.log(stringSplit);

    for (i = 0; i < stringSplit.length; i++){
        eachString = (stringSplit[i])[0].toUpperCase() + stringSplit[i].slice(1);

        finishedString.push(eachString);

        console.log(eachString);

    }

    var answer = finishedString.join(" ");
    console.log(answer);
};


// LetterCapitalize("cat in the hat");
LetterCapitalize("victoria hedden");
