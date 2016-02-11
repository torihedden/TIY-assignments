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

movieInfo();
// console.log(movieStars); //=>movieStars is not defined outside the function movieInfo. It isn't global?
