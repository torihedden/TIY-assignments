// Using JavaScript, change the body's tag style so it has a font-family of the sans-serif font stack of your choice.
// Using JavaScript, replace each of the spans with your own information.
// Iterate through each li and change the class to listitem. Add a style tag that sets a rule for listitem to make the color red.
//See Adding/removing classes section in the lecture notes!
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.


//Styles the font of the body contents.
var body = document.querySelector("body");
body.style.fontFamily = "Arial, Helvetica, sans-serif";

//Replace FIRST span only with the following text. Any further attempts just add text to this same span.
//How to target span of the class "fullname"? Class "hometown"? and etc.

//Adds information to your profile.
var span = document.querySelector("#fullname");
span.textContent = "Tori Hedden";

var span = document.querySelector("#hometown");
span.textContent = "Snellville, GA";

var span = document.querySelector("#movie");
span.textContent = "I don't have a favorite movie, but I do like Blade Runner";

var span = document.querySelector("#food");
span.textContent = "sushi";

//




//link to picture of me
//https://avatars1.githubusercontent.com/u/16636389?v=3&s=460
