//the largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99
//find largest palindrome made from product of two 3-digit numbers
//100 to 999


// for (i = 0, x = 0; i < 4, x < 4; i++, x++){
//     console.log(i+x);
// }
// a check to make sure syntax of iterating two numbers in for loop was correct


for (i = 100, x = 100; i < 1000, x < 1000; i++, x++){
    var product = i*x;
    var palindromes = [];
    var splitProduct = (product.toString()).split("");
    // console.log(splitProduct[0]);
    // if (splitProduct.length === 5){
    //     if (splitProduct[0] === splitProduct[4] && splitProduct[1] === splitProduct[3]){
    //     console.log(product);
    //     // palindromes.push(splitProduct);
    //     }
    // }
    if (splitProduct.length === 6){
        if (splitProduct[0] === splitProduct[5] && splitProduct[1] === splitProduct[4] && splitProduct[2] === splitProduct[3]){
            console.log(product);
            console.log(i);
            console.log(x);
        }
    }

}

// looking at the results, it seems the answer is 698896
//however, I've iterated both numbers at equal increments, so I'm not sure it's correct. Really I think I should have incremented the first number all the way to 999, and THEN increased the second number to 101
