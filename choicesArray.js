var animalChoices = ["cats", "kittens", "puppies", "dogs", "hedgehogs"];

var foodChoices = ["sushi", "candy", "Indian food"];

var myChoices = function(array, ranking){
    var rankFormat;
    var rank = ranking-1;
    if (rank === 1){
        rankFormat = rank + "st";
    } else if (rank === 2) {
        rankFormat = rank + "nd";
    }

    console.log("My " + rankFormat + " choice is " + array[ranking-1] + ".");
};

myChoices(animalChoices, 3);

myChoices(foodChoices, 2);
