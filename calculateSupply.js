function calculateSupply(age, amountPerDay){
    if (age>100){
        console.log("No one lives to be older than 100!")
    } else {
        var amountPerLife=((100-age)*365*amountPerDay)
    console.log("You will need " + amountPerLife + " granola bars to last you until the age of 100!")
    }
}

//assuming a max age anyone can live to of 100
//assuming granola bars are the best snack ever

calculateSupply(25, 10); => You will need 273750 granola bars to last you until the age of 100!
calculateSupply(100, 2); => You will need 0 granola bars to last you until the age of 100!
calculateSupply(31, 1); => You will need 25185 granola bars to last you until the age of 100!
calculateSupply(105, 2); => No one lives to be older than 100!
calculateSupply(99, 1); => You will need 365 granola bars to last you until the age of 100!
