/* Write functions for working with shapes in standard Planar coordinate system.
   Points are represented by coordinates P(X, Y)
   Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
   Calculate the distance between two points.
   Check if three segment lines can form a triangle.
*/

function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.calcDistance = function(otherPoint) {
    return Math.sqrt((otherPoint.x - this.x) * (otherPoint.x - this.x) + (otherPoint.y - this.y) * (otherPoint.y - this.y) );
};

function Line(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
}

function check(line1, line2, line3) {
    var line1Len = line1.p1.calcDistance(line1.p2),
        line2Len = line2.p1.calcDistance(line2.p2),
        line3Len = line3.p1.calcDistance(line3.p2);
    return line1Len < line2Len + line3Len &&
        line2Len < line1Len + line3Len &&
        line3Len < line1Len + line2Len ;
}

var p1 = new Point(7, 5),
    p2 = new Point(0, 2),
    p3 = new Point(7, 8),
    p4 = new Point(9, 2),
    p5 = new Point(1, 4),
    p6 = new Point(8, 3),
    line1 = new Line(p1, p2);
    line2 = new Line(p3, p4);
    line3 = new Line(p5, p6);

console.log(p1.calcDistance(p2));
console.log(check(line1, line2, line3));