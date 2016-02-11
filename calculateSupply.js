function calculateSupply(age, amountPerDay){
    var amountPerLife=(age*365*amountPerDay)
    console.log("You will need " + amountPerLife + " granola bars to last you until the age of " + age + "!")
}

calculateSupply(25, 10);
calculateSupply(100, 2);
calculateSupply(31, 1);
