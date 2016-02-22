greaterNum = function(num1, num2){
  if (num1 === num2){
      console.log("Those numbers are the same.");
  } else if (num1 > num2){
      console.log(num1 + " is greater.");
  } else {
      console.log(num2 + " is greater than " + num1 + ".");
  }
};

greaterNum(0, 19);
greaterNum(2,2);
greaterNum(100, 5);
