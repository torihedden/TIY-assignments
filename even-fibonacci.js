var prevNum = 0; //your initial number in the sequence
var currentNum = 1; //the next number in the sequence
var fibNum = 1; //the number of interest. the current Fibonacci number that is being tested for even-ness

var fibSum = 0; //the total sum of the even Fibonacci numbers.

while (fibNum <= 4000000){//all Fibonacci numbers that do not exceed 4 million.
  if (fibNum % 2 === 0){
    fibSum += fibNum;
  }

  fibNum = currentNum + prevNum;
  prevNum = currentNum;
  currentNum = fibNum;
}

console.log(fibSum);

//test: returns 188 if the statement in while (fibNum <= 609)
//returns 4613732 for all even Fibonacci numbers <= 4 million
