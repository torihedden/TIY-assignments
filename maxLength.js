// Write a JS function that accepts the list of country names as inputs and returns the longest one.


var sample = ["USA", "Germany", "India"];
var lengthArray = [];


var longerCountry = function(array){
    for (var i = 0; i < array.length; i++){
        lengthArray.push(array[i].length);

    }
    console.log(lengthArray);

    var mathMax = Math.max.apply(0, lengthArray);

    console.log(mathMax);

    var theIndex = lengthArray.indexOf(mathMax);
    console.log(theIndex);


    return sample[theIndex];
};

longerCountry(sample);
// => 'Germany'
