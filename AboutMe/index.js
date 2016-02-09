
// Using JavaScript, change the body's tag style so it has a font-family of the sans-serif font stack of your choice.
var body = document.querySelector("body");
body.style.fontFamily = "Arial, Helvetica, sans-serif";

// Using JavaScript, replace each of the spans with your own information.
var spanInfo = document.querySelector("#fullname");
span.textContent = "Tori Hedden";

// how do I name these variables???
var spanInfo = document.querySelector("#hometown");
span.textContent = "Snellville, GA";

var spanInfo = document.querySelector("#movie");
span.textContent = "I don't have a favorite movie, but I like Blade Runner";

var span = document.querySelector("#food");
span.textContent = "sushi";

// Iterate through each li and change the class to listitem. Add a style tag that sets a rule for listitem to make the color red.

var allLists = document.getElementsByTagName("li");

for (var myCount = 0; myCount < allLists.length; myCount ++){
  allLists[myCount].className = "listitem";
  listitem.style.fontcolor="red";
  console.log("yo");
};

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
// document.write('<img src= "https://avatars1.githubusercontent.com/u/16636389?v=3&s=460">');

//https://avatars1.githubusercontent.com/u/16636389?v=3&s=460
