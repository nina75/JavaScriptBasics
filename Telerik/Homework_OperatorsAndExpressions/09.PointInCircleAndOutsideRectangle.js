// Write an expression that checks for given point P(x, y) if it is within the circle K( (1,1), 3) 
// and out of the rectangle R(top=1, left=-1, width=6, height=2)

function checkIsInCircleOutRectangle(x, y) {
    return isInCircle(x, y) && !isInRectangle(x, y) ? 'yes' : 'no';
}
function isInCircle(x, y) {
    return (x - 1) * (x - 1) + (y - 1) * (y - 1) <= 9;
}
function isInRectangle(x, y) {
    return x >= -1 && x <= 5 && y >= -1 && y <= 1;
}

console.log(checkIsInCircleOutRectangle(1, 4)); //yes
console.log(checkIsInCircleOutRectangle(3, 2)); //yes
console.log(checkIsInCircleOutRectangle(0, 1));
console.log(checkIsInCircleOutRectangle(4, 1));
console.log(checkIsInCircleOutRectangle(2, 0));
console.log(checkIsInCircleOutRectangle(4, 0));
console.log(checkIsInCircleOutRectangle(2.5, 1.5));//yes
console.log(checkIsInCircleOutRectangle(3.5, 1.5));//yes
console.log(checkIsInCircleOutRectangle(-100, -100));