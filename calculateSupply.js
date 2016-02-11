var maxAge = 101;
var favSnack = "bags of chips"


function calculateSupply(age, amountPerDay){
    if (age>maxAge){
        console.log("No one lives to be older than " + maxAge + "!")
    } else {
        var amountPerLife=((maxAge-age)*365*amountPerDay)
    console.log("You will need " + amountPerLife + " " + favSnack + " to last you until the age of " + maxAge + "!")
    }
}

//assuming a max age anyone can live to of 100
//assuming granola bars are the best snack ever

calculateSupply(25, 10);
calculateSupply(100, 2);
calculateSupply(31, 1);
calculateSupply(105, 2);
calculateSupply(99, 1);
