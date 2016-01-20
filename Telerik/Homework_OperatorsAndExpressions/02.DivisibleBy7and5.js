//Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.
function isDivisibleBy7and5(number) {
    return !(number % 5) && !(number % 7);
}

console.log(isDivisibleBy7and5(3));
console.log(isDivisibleBy7and5(0));
console.log(isDivisibleBy7and5(5));
console.log(isDivisibleBy7and5(7));
console.log(isDivisibleBy7and5(35));
console.log(isDivisibleBy7and5(140));