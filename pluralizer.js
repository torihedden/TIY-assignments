pluralizer = function(noun, number){
    if (number === 1){
        console.log(number + " " + noun);
    } else if (noun[noun.length-1] === "s"){
        console.log("This word is already plural.");
    } else if (noun === "sheep" || noun === "geese"){
        console.log(number + " " + noun);
    }

    else {
        console.log(number + " " + noun + "s")    ;
    }
};


pluralizer("fish", 1);
pluralizer("cat", 5);
pluralizer("books", 25);
pluralizer("geese", 50);
pluralizer("sheep", 50);
pluralizer("class", 2); //need to write case for ends in "s" but not plural
