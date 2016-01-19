//Write a function that reverses the digits of given decimal number.
function reverseDigit(number) {
    return (number.toString().split('').reverse().join('')) * 1;
}

console.log(reverseDigit(123.45));
console.log(reverseDigit(256));

