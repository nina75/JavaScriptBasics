//Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5). //{0,0} is the centre and 5 is the radius

function isInsideInCircle(x, y) {
    return  x * x + y * y <= 25;
}

console.log(isInsideInCircle(0, 1));
console.log(isInsideInCircle(-5, 0));
console.log(isInsideInCircle(-4, 5));
console.log(isInsideInCircle(1.5, -3));
console.log(isInsideInCircle(-4, -3.5));
console.log(isInsideInCircle(100, -30));
console.log(isInsideInCircle(0, 0));
console.log(isInsideInCircle(0.2, -0.8));
console.log(isInsideInCircle(0.9, -4.93));
console.log(isInsideInCircle(2, 2.655));