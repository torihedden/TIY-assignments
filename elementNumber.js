var countTags = function(element){
    var tagCount = 0;
    $("*").each(function() {
        if ($(this).is($(element))){
            tagCount += 1;
        }
    });
    return "There are " + tagCount + " tags of type " + element + " on the page.";
};

console.log(countTags('p'));


console.log("hello world");
