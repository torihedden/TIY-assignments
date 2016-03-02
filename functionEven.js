var checkEven = function(number1, number2){
    for (i = number1; i <= number2; i++){
    if (i % 2 === 0){
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
    }
};


checkEven(0, 21044);
