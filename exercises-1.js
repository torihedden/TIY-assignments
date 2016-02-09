/**
 * For each of the following Array methods,
 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!
 **/

// .sort() Sorts all the values in a given array. Default is small number to large, strings are alphabetized.

var myList = [42, 6, -1, 0, 13]
console.log(myList.sort()); --> [ -1, 0, 13, 42, 6 ]

var classMates = ["Tori", "Matt", "Alex", "Nicky"]
console.log(classMates.sort()); --> [ "Alex", "Matt", "Nicky", "Tori" ]

// .concat() Combines two arrays. The second array is added to the end of the first. Does not alter the contents of the array, just puts them together.

var choresList = ["dust", "mop", "dishes"]
var newChores = ["laundry", "grocery shopping", "clean room"]

console.log(choresList.concat(newChores)); --> [ "dust", "mop", "dishes", "laundry", "grocery shopping", "clean room" ]

// .indexOf() Returns the index of a given value in an array.

var myFavThings = ["kittens", "doorbells", "wild geese", "blue satin sashes"]
console.log(myFavThings.indexOf("doorbells")); --> 1

// .split() Takes a string, and splits it up into an array. The separator is the parameter that .split() takes.

var mySentence = "Each, of, these, words, is, going, to, be, an, element, in, an, array"
var separateWords = mySentence.split(", ");

console.log(separateWords); --> ["Each", "of", "these", "words", "is", "going", "to", "be", "an", "element", "in", "an", "array"]

// .join() Joins up all values in an array, in order.

var trueFacts = ["I", "attend", "the", "Iron", "Yard"]
console.log(trueFacts.join(" ")); --> I attend the Iron Yard

var Jenny = [8, 6, 7, 5, 3, 0, 9]
console.log(Jenny.join()); --> 8675309

// .pop() Removes the last value from the end of an array, AKA the value at the index of (array.length-1)

var classMates = ["Nicky", "Tori", "Alex"];

console.log(classMates.pop()); --> Alex
console.log(classMates);--> ["Nicky", "Tori"]

// .push() Adds a value onto the end of an array. You can also .push to empty arrays!

var classMates = [];
classMates.push("Tori");
console.log(classMates); --> ["Tori"];

classMates.push("Greg");
console.log(classMates); --> ["Tori", "Greg"]

// .slice() Returns part of an area at indices [x, y), where index x is inclusive and index y is exclusive. Does not remove this value from the array.

var redQueen = ["Off", "with", "her", "head", "!"]
console.log(redQueen.slice(3, 4)); --> [ "head" ]
console.log(redQueen); --> [ "Off", "with", "her", "head", "!" ]

// .splice() Removes value from an array at index (x, y]).

var redQueen = ["Off", "with", "her", "head", "!"]
console.log(redQueen.splice(3, 4)); --> [ "head", "!" ]
console.log(redQueen); --> [ "Off", "with", "her" ]

// .shift() Removes the first element in a given array, and returns that element.

var theTriangle = ["Raleigh", "Durham", "Chapel Hill"]
console.log(theTriangle.shift()); --> Raleigh
console.log(theTriangle); --> [ "Durham", "Chapel Hill" ]

// .unshift() adds element(s) to the beginning of an array, then returns the array with the added changes.

var theTriangle = ["Durham", "Chapel Hill"]
console.log(theTriangle.unshift("Raleigh"));
console.log(theTriangle); --> [ "Raleigh", "Durham", "Chapel Hill" ]

// .filter() Takes elements from a new array, and applies a test to them. All elements that pass the test are added to a new array, which is returned.

var someNumbers = [67, 8, -2, 0, 13, 9, 23, 4] //Reads as "The variable someNumbers is assigned the array 67, 8, -2, 0..."

function isEven(x){
  return x % 2 === 0;
}
console.log(someNumbers.filter(isEven)); --> [ 8, -2, 0, 4 ]

// .map() generates a new array based on a given array. A function is called on every element in the original array.

var myNumbers = [2.01, 4.3, 6.8, 8.4, 10.6, 12.5]
var roundUp = myNumbers.map(Math.ceil);

console.log(roundUp); --> [ 3, 5, 7, 9, 11, 13 ]
