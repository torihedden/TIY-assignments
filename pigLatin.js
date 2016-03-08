var pigLat = function(word){

    var pigWord;

    word = word.toLowerCase();

    switch(word[0]) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        pigWord = word + "ay";
        break;

    case "q":
        quSlice = word.slice(0, 2);
        pigWord = word.slice(2, word.length) + quSlice + "ay";
        break;

    case "b":
    case "c":
    case "d":
        firstTwo = word.slice(0, 2);
        console.log(firstTwo);
        pigWord = word.slice(2, word.length) + firstTwo + "ay";
        break;

    default:
        firstLetter = word.slice(0, 1);
        pigWord = word.slice(1, word.length) + firstLetter + "ay";
}

    return pigWord;
};

// pigLat("quick"); => "ickquay"
// pigLat("tonight"); => "onighttay"
// pigLat("advice"); => "adviceay"
// pigLat("string"); => "tringsay" <=incorrect but hard to do with they way I set up switch
pigLat("break") => "eakbray"
