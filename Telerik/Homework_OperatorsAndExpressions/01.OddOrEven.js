//Write an expression that checks if given integer is odd or even.
function isOdd(number) {
    return !!(number % 2);
}

console.log(isOdd(3));
console.log(isOdd(2));
console.log(isOdd(-2));
console.log(isOdd(-1));
console.log(isOdd(0));