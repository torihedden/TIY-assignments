// Write a JS function that accepts the list of country names as inputs and returns the longest one.

var sample = ["USA", "Germany", "India", "longest country name"];
var lengthArray = [];


var longerCountry = function(array){
    for (var i = 0; i < array.length; i++){
        lengthArray.push(array[i].length);
    }

    var mathMax = Math.max.apply(0, lengthArray);
    var theIndex = lengthArray.indexOf(mathMax);
    return sample[theIndex];
};

longerCountry(sample);
