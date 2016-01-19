/* Write a function that checks if the element at given position in given array of integers is bigger than its two neighbours
   (when such exist) */

function isBiggerThanNeighbours(arr, index) {
    if(index < 0 || index > arr.length - 1) {
        return 'No such index';
    } else if(index == 0 || index == arr.length - 1) {
        return 'Element has only one neighbour';
    }
    return arr[index] > arr[index - 1] && arr[index] > arr[index + 1];
}

var arr = [1, 2, 5, 4, 7, 8, 6, 2];
console.log(isBiggerThanNeighbours(arr, 5));