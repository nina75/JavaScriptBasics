/*You are given an array of numbers. Your tasks are to first filter out all valid exam scores (between 0 and 400)
 and afterwards scale them downwards by removing 20% out of each score.
 Finally you should print out the changed scores sorted in ascending order. */

function solve(arr) {
    var filteredArr = arr.filter(function(el) {
        return el >= 0 && el <= 400;
    });
    var reducedArr = filteredArr.map(function(el) {
        return +(el * 0.8).toFixed(2);
    });
    reducedArr.sort(function(x, y) {
       return x > y;
    });
    console.log(reducedArr);
}

solve([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);