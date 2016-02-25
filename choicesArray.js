var animalChoices = ["cats", "kittens", "puppies", "dogs", "hedgehogs", "snakes"];

var foodChoices = ["sushi", "candy", "Indian food", "tacos"];

var myChoices = function(array, rank){
    var rankFormat;
    if (rank === 1){
        rankFormat = rank + "st";
    } else if (rank === 2){
        rankFormat = rank + "nd";
    } else if (rank === 3){
        rankFormat = rank + "rd";
    } else {
        rankFormat = rank + "th";
    }

    console.log("My " + rankFormat + " choice is " + array[rank-1] + ".");
};

myChoices(animalChoices, 3); // => "My 3rd choice is puppies."
myChoices(foodChoices, 2); // => "My 2nd choice is candy."
myChoices(animalChoices, 4);// => "My 4th choice is dogs."
myChoices(animalChoices, 6);// => "My 6th choice is snakes."
