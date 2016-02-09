var sumThreeFive = 0;

for (x=1; x<1000; x++){
  if (x % 3 === 0 || x % 5 === 0){
    sumThreeFive += x;
  }
};

console.log(sumThreeFive); --> 233168
//This is the specific case.


//This function is a more generalizable solution. You can find the sum of numbers divisible by 3 and/or 5
//within any range of numbers.
function sumThreeFive(minNum, maxNum){

    var sum = 0;

    for (x = minNum; x < maxNum; x++){
      if (x % 3 === 0 || x % 5 === 0){
        sum += x;
      }
    }
    return sum;
}

console.log(sumThreeFive(2, 20)); --> 78
