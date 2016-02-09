// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

//Object constructor
function Book (bookTitle, author, alreadyRead) {
    this.bookTitle = bookTitle;
    this.author = author;
    this.alreadyRead = alreadyRead;
}

//a new Object (Book)
var book1 = new Book();
  book1.bookTitle = "The Left Hand of Darkness";
  book1.author = "Ursula K. Le Guin"
  book1.alreadyRead = false;

var book2 = new Book();
  book2.bookTitle = "Stranger in a Strange Land";
  book2.author = "Robert Heinlein";
  book2.alreadyRead = true;

var book3 = new Book();
  book3.bookTitle = "Persepolis";
  book3.author = "Marjane Satrapi";
  book3.alreadyRead = true;

var myLibrary = [book1, book2, book3];

for (eachBook = 0; eachBook < myLibrary.length; eachBook++){
  console.log(myLibrary[eachBook].bookTitle + ", by " + myLibrary[eachBook].author)
}

//=> The Left Hand of Darkness, by Ursula K. Le Guin
//Stranger in a Strange Land, by Robert Heinlein
//Persepolis, by Marjane Satrapi

for (x = 0; x < myLibrary.length; x++){
  if (myLibrary[x].alreadyRead){
    console.log("You have read " + myLibrary[x].bookTitle + " by " + myLibrary[x].author + ".");
  } else {
    console.log("You still haven't read " + myLibrary[x].bookTitle + " by " + myLibrary[x].author + ".");
  }
}

//=> You still haven't read The Left Hand of Darkness by Ursula K. Le Guin.
//You have read Stranger in a Strange Land by Robert Heinlein.
//You have read Persepolis by Marjane Satrapi.
