var favMovie = {
    title: "Blade Runner",
    duration: 120,
    stars: ["Harrison Ford", "Sean Young", "Rutger Hauer"]
};

function movieInfo() {
    var movieStars = "";
    for (i = 0; i<favMovie.stars.length-1; i++){
         movieStars += favMovie.stars[i] + ", ";
    }
    movieStars += "and " + favMovie.stars[favMovie.stars.length-1] + ".";

    console.log(favMovie.title + " lasts for " + favMovie.duration + " minutes. Stars include: " + movieStars);
}

movieInfo(); // => Blade Runner lasts for 120 minutes. Stars include: Harrison Ford, Sean Young, and Rutger Hauer.


// console.log(movieStars); => undefined //=>movieStars is not defined outside the function movieInfo. It isn't global?
