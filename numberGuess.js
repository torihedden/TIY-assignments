// Random Number
//
// Write an app that asks the user to guess a number between 1 and 10
// The user types her answer in an input field
// Indicate if the user's guess is too high or too low
// If the user guesses the number, indicate that she's won
// Don't use alert
// Update the DOM to indicate win, too low, too high, and any other messages
// You'll probably want to use parseInt to convert the user's input from a string to an integer
// You'll probably want to use Math.random() to generate a random number for the user to guess

var yourNumber = Math.floor(Math.random()*10+1);

console.log(yourNumber)

var guess = prompt("Guess a number between 1 and 10");

if (guess > yourNumber){
  prompt("Your guess was too high. Guess again.")
} else if (guess < yourNumber){
  prompt("Your guess was too low. Guess again.")
} else {
  confirm("You guessed the number! Congrats.")
}
