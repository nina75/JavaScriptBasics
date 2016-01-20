/* Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
   Calculates and prints its real roots. */

function solveQuadraticEquation(a, b, c) {
    var x1, x2, d;
    d = b * b - 4 * a * c;
    if(d > 0) {
        x1 = (- b - Math.sqrt(d)) / (2 * a);
        x2 = (- b + Math.sqrt(d)) / (2 * a);
        console.log('x1=' + x1 + '; x2='+ x2);
    } else if(d === 0) {
        x1 = (- b - Math.sqrt(d)) / (2 * a);
        console.log('x1=x2='+ x1);
    } else {
        console.log('no real roots');
    }
}

solveQuadraticEquation(2, 5, -3);
solveQuadraticEquation(-1, 3, 0);
solveQuadraticEquation(-0.5, 4, -8);
solveQuadraticEquation(5, 2, 8);