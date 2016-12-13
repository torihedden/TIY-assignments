function verbing(yourString){
    if (yourString[yourString.length-1] === "g"){
            console.log(yourString + "ly");
    } else if (yourString.length >= 3){
        console.log(yourString + "ing");
    } else
        console.log(yourString);
}

//verbing("mix"); --> "mixing"

verbing("go");
verbing("throw");
verbing("a b g");
verbing("ug");
