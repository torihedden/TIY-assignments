// var firstAge = 0;
// var secondAge = 0;

function calculateAge(birthYear, currentYear){
   var yourAge = (currentYear - birthYear)-1;
   console.log("You are either " + yourAge + " or " + (yourAge+1) + ".")
}


//Based on today's date? Which age you would be. This needs your birthDAY, not birth YEAR, though.
// var today = new Date();
// console.log(today)

calculateAge(1990,2016); /*--> "You are either 25 or 26."*/
calculateAge(1987,2016);
calculateAge(1965,2016);
