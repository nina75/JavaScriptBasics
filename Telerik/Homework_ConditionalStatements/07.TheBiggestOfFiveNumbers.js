//Write a script that finds the greatest of given 5 variables.
//Use nested if statements.

function findTheBiggest(a, b, c, d, e) {
    var max = a;
    if(b > max) max = b;
    if(c > max) max = c;
    if(d > max) max = d;
    if(e > max) max = e;

    return max;
}

console.log(findTheBiggest(5, 2, 2, 4, 1)); //5
console.log(findTheBiggest(-2, -22, 1, 0, 0)); //1
console.log(findTheBiggest(-2, 4, 3, 2, 0)); //4
console.log(findTheBiggest(0, -2.5, 0, 5, 5)); //5
console.log(findTheBiggest(-3, -0.5, -1.1, -2, -0.1)); //-0.1