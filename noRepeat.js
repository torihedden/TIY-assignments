//Write a JS function to find the first not repeated character, expected output is that character.

//PS neither of these work, come back to it later to solve.

function noRepeat (string){
   for (var i = 0; i < string.length; i++){
        var patt = new RegExp(string[i]);
        var res = patt.test(string[i]);
        if(patt.test){
            return string[i];
        } else {
            //do nothing
        }
       }

}

noRepeat("sslkdrr");


function noRepeat(string){
     for (var i = 0; i < string.length; i++){
        var testChar = string[i];
        for (var j = 0; j < string.length; j++){
            if (testChar === string[j]){
                //do nothing
            } else {
                console.log(string[j]);
            }
        }
     }
}

noRepeat("aabbbc");
