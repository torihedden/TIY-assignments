function verbing(str) {
	if (str.length >= 3){
		if (str.slice(length-3, str.length) === "ing"){
			return str + "ly";
		}
		else {
			return str + "ing";
		}
	}
	else {
		return str;
	}
}


verbing("swimming");
//=> "swimmingly"

verbing("go");
//=> "go"

verbing("run");
//=>"runing"
//due to complexity of the English, language, to make this function more robust, you would have to do some more work in order to account for all cases
