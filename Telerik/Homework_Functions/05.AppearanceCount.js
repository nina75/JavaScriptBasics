//Write a function that counts how many times given number appears in given array.
//Write a test function to check if the function is working correctly.

function countNumberOccurrences(arr, number) {
    return arr.reduce(function(count, el){
        if(el == number) {
            count++
        }
        return count;
    }, 0);
}

var arr = [1, 2, 7, 3, 4, 1, 5, 1, 6, 6, 1, 8, 1, 9, 9, 7, 7, 1];
console.log(countNumberOccurrences(arr, 1));
console.log(countNumberOccurrences(arr, 7));