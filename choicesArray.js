var animalChoices = ["cats", "kittens", "puppies", "dogs", "hedgehogs"];

var foodChoices = ["sushi", "candy", "Indian food", "tacos"];

var myChoices = function(array, rank){
    var rankFormat;
    if (rank === 1){
        rankFormat = rank + "st";
    } else if (rank === 2){
        rankFormat = rank + "nd";
    } else if (rank === 3){
        rankFormat = rank + "rd";
    } else if (rank === 4){
        rankFormat = rank + "th";
    }

    console.log("My " + rankFormat + " choice is " + array[rank-1] + ".");
};

myChoices(animalChoices, 3); // => "My 3rd choice is puppies."
myChoices(foodChoices, 2); // => "My 2nd choice is candy."
myChoices(animalChoices, 4);// => "My 4th choice is dogs."
