// Using JavaScript, change the body's tag style so it has a font-family of the sans-serif font stack of your choice.
var body = document.querySelector("body");
body.style.fontFamily = "Arial, Helvetica, sans-serif";

// Using JavaScript, replace each of the spans with your own information.
var fullNameSpan = document.querySelector("#fullname");
fullNameSpan.textContent = "Tori Hedden";

var homeTownSpan = document.querySelector("#hometown");
homeTownSpan.textContent = "Snellville, GA";

var movieSpan = document.querySelector("#movie");
movieSpan.textContent = "I don't have a favorite movie, but I like Blade Runner";

var foodSpan = document.querySelector("#food");
foodSpan.textContent = "sushi";

// Iterate through each li and change the class to listitem. Add a style tag that sets a rule for listitem to make the color red.

var allLists = document.getElementsByTagName("li");

for (var myCount = 0; myCount < allLists.length; myCount ++){
  allLists[myCount].className = "listitem";
}

var listItems = document.getElementsByClassName("listitem");

for (var myCount = 0; myCount < listItems.length; myCount ++){
  listItems[myCount].style.color = "red";
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

var profilePic = document.createElement("img");
profilePic.src = "https://avatars1.githubusercontent.com/u/16636389?v=3&s=460";

body.appendChild(profilePic);
