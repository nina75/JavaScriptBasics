//Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.
function findIndex(sortedArr, el) {
    var min = 0, 
        max = sortedArr.length - 1,
        guess;

    while(true) {
        if(max < min) {
            return -1;
        }
        guess = ((min + max) / 2) | 0 ;
        if(sortedArr[guess] === el) {
            return guess;
        } else if(sortedArr[guess] < el) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }
}

var arr = [1, 2, 3, 4, 5, 5.5, 6, 7];
console.log(findIndex(arr, 3));

//Let min = 0 and max = n-1.
//Compute guess as the average of max and min, rounded down (so that it is an integer).
//If array[guess] equals target, then stop. You found it! Return guess.
//If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
//Otherwise, the guess was too high. Set max = guess - 1.
//Go back to step 2.