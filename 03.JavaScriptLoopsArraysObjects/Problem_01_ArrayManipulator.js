/*You are given an array of objects. Your task is to write a JavaScript code that filters out the numbers of that array
 (removes all non-number objects). Then you should:
 1. Find the Min number,
 2. Find the Max number,
 3. Find the most frequent number.
 Finally you should print out the numbers you have found and the filtered array sorted in descending order.*/

function solve(arr) {
    var filteredArr = arr.filter(function(el) {
        return !isNaN(el)
    });
    filteredArr.sort(function(x, y) {
        return x < y;
    });
    console.log('Min number = ' + Math.min.apply(null, filteredArr));
    console.log('Max number = ' + Math.max.apply(null, filteredArr));
    console.log('Most frequent number: ' + findMostFrequent(filteredArr));
    console.log(filteredArr);
    console.log();

    function findMostFrequent(array) {
        var occurrences = {},
            mostFrequentCount = 1,
            indexOfMostFrequent;
        array.forEach(function(el) {
            occurrences[el] ? occurrences[el]++ : occurrences[el] = 1
        });

        for(var index in occurrences) {
            if(occurrences[index] > mostFrequentCount) {
                mostFrequentCount = occurrences[index];
                indexOfMostFrequent = index;
            }
        }
        return indexOfMostFrequent;
    }
}

solve(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]]);