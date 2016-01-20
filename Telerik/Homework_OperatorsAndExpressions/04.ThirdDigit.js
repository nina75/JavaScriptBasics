//Write an expression that checks for given integer if its third digit (right-to-left) is 7.
function isThirdDigit7(number) {
    return ((number / 100) | 0) % 10 === 7;
}

console.log(isThirdDigit7(5));
console.log(isThirdDigit7(701));
console.log(isThirdDigit7(1732));
console.log(isThirdDigit7(9703));
console.log(isThirdDigit7(877));
console.log(isThirdDigit7(777877));
console.log(isThirdDigit7(9999799));