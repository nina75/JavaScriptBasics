/* Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
   The bits are counted from right to left, starting from bit #0.
   The result of the expression should be either 1 or 0. */

function findThirdBit(number) {
    var binaryNum = number.toString(2),
        len = binaryNum.length;
    if(len < 16) {
        for (var i = len; i < 16; i++) {
            binaryNum = '0' + binaryNum;
        }
    }
    console.log(binaryNum);
    return binaryNum[binaryNum.length - 4];
}

console.log(findThirdBit(5));
console.log(findThirdBit(8));
console.log(findThirdBit(0));
console.log(findThirdBit(15));
console.log(findThirdBit(5343));
console.log(findThirdBit(62241));