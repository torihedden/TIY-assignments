assignGrade = function(score){
    if (score <60){
        console.log("You got an F.");
    } else if (score < 70 && score >= 60){
        console.log("You got a D.");
    } else if (score >= 70 && score < 80){
        console.log("You got a C.");
    } else if (score >= 80 && score <= 90){
        console.log("You got a B.");
    } else if (score > 90 && score <= 99){
        console.log("You got an A.");
    } else if (score === 100) {
        console.log("You got a perfect score!");
    } else {
        console.log("That doesn't look like a grade.");
    }

};

assignGrade(72);
assignGrade(101);
assignGrade(82);
