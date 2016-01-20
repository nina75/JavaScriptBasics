//Write a script that finds the biggest of three numbers.
//Use nested if statements.

function findTheBiggest(a, b, c) {
    var max = a;
    if(b > max) {
        max = b;
    }
    if(c > max) {
        max = c;
    }

    return max;
}

console.log(findTheBiggest(5, 2, 2));
console.log(findTheBiggest(-2, -2, 1));
console.log(findTheBiggest(-2, 4, 3));
console.log(findTheBiggest(0, -2.5, 5));
console.log(findTheBiggest(-0.1, -0.5, -1.1));