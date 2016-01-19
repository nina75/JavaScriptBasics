//Write a script that finds the maximal sequence of equal elements in an array.
function findMaxSequence(arr) {
    var maxLen = 1,
        currentLen = 1,
        element = arr[0],
        i,
        len;
    for (i = 0, len = arr.length - 1; i < len; i += 1) {
        if(arr[i] === arr[i + 1]) {
            currentLen++;
        } else {
            currentLen = 1;
        }
        if(currentLen > maxLen) {
            maxLen = currentLen;
            element = arr[i];
        }
    }
    return (new Array(maxLen)).fill(element);
}

var arr = [1, 1, 1, 1, 3, 4, 4, 4, 4, 4, 5, 6, 7, 5, 5, 5, 5, 5, 5];
console.log(findMaxSequence(arr).join(', '));


