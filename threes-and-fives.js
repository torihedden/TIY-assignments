var sumThreeFive = 0;

for (x=1; x<1000; x++){
  if (x % 3 === 0 || x % 5 === 0){
    sumThreeFive += x;
  }
};

console.log(sumThreeFive);


//does this work as a function? I want to be able to give any range of numbers to my function, within which
//to find the sum of all numbers divisible by 3 and/or 5
/*
var totalSum = 0;

function sumOfThreeFive(bottomNum, topNum){
  for (x = bottomNum; x<topNum; x++){
    if (x % 3 === 0 || x % 5 === 0){
      totalSum += x;
    }
    return totalSum;
  }
}

sumOfThreeFive(10, 50); return all numbers > 10 and < 50 that are divisible by 3 and/or 5
*/
