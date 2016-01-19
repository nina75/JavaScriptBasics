/* Write a function that returns the index of the first element in array that is larger than its neighbours or -1,
   if there’s no such element.
   Use the function from the previous exercise. */
function firstLargerThanNeighbours(arr) {
    var index = arr.find(function(_, i) {
        return arr[i] > arr[i - 1] && arr[i] > arr[i + 1];
    });
    return index ? index : -1;
}

var arr = [1, 2, 3, 5, 4, 8, 7];
var arr1 = [1, 2, 3, 5, 6, 7, 8];
console.log(firstLargerThanNeighbours(arr));
console.log(firstLargerThanNeighbours(arr1));



