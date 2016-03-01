var countTags = function(element){
    var tagCount = 0;
    $("*").each(function() {
        if ($(this) === $(element)){
            tagCount += 1;
        }
    });
    return "There are " + tagCount + " tags of type " + element + " on the page.";
};

countTags('p');
