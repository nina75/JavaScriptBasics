//Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
//As a result print the values a and b, separated by a space.

function sortTwoNumbers(a, b) {
    return a > b ? b + ' ' + a : a + ' ' + b;
}

console.log(sortTwoNumbers(5, 2));
console.log(sortTwoNumbers(3, 4));
console.log(sortTwoNumbers(5.5, 4.5));