//Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
//Use a sequence of if operators.

function findProductSign(a, b, c) {
    if(a == 0 || b == 0 || c == 0) {
        return 0;
    }
    if(a > 0) {
        if(b > 0) {
            return c > 0 ? '+' : '-';
        } else {
            return c > 0 ? '-' : '+';
        }
    } else {
        if(b > 0) {
            return c > 0 ? '-' : '+';
        } else {
            return c > 0 ? '+' : '-';
        }
    }
}

console.log(findProductSign(5, 2, 2));
console.log(findProductSign(-2, -2, 1));
console.log(findProductSign(-2, 4, 3));
console.log(findProductSign(0, -2.5, 4));
console.log(findProductSign(-1, -0.5, -5.1));