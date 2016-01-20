//Write a script that finds the max and min number from a sequence of numbers.
function findMin(arr) {
    return arr.reduce(function(min, el) {
        if(el < min) {
            min = el;
        }
        return min;
    }, Infinity)
}

function findMax(arr) {
    return arr.reduce(function(max, el) {
        if(el > max) {
            max = el;
        }
        return max;
    }, -Infinity)
}

var arr = [2, 1, 17, 4, 5, 0, -1, 7];
console.log(findMin(arr));
console.log(findMax(arr));