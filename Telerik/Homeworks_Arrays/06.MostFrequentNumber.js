// Write a script that finds the most frequent number in an array.
function findMostFrequent(arr) {
    var maxCount = 0 ,
        mostFrequentEl,
        frequencies = arr.reduce(function(obj, el) {
        if(!obj[el]) {
            obj[el] = 1;
        } else {
            obj[el]++;
        }
        return obj;
    }, {});
    for(var prop in frequencies) {
        if(frequencies[prop] > maxCount) {
            maxCount = frequencies[prop];
            mostFrequentEl = prop * 1;
        }
    }
    return [mostFrequentEl, maxCount];
}

var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
var result = findMostFrequent(arr);
console.log(result[0] + '(' + result[1] + ' times)');