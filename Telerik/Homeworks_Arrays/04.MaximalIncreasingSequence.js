//Write a script that finds the maximal increasing sequence in an array.
function findMaxIncreasingSequence(arr) {
    var maxSeq = [],
        curSeq = [arr[0]],
        i,
        len;
    for (i = 1, len = arr.length; i < len; i += 1) {
        if(arr[i] > arr[i - 1]) {
            curSeq.push(arr[i]);
        } else {
            curSeq = [arr[i]];
        }
        if(curSeq.length > maxSeq.length) {
            maxSeq = curSeq.slice();
        }
    }
    return maxSeq;
}

var arr = [3, 2, 3, 4, 2, 2, 4];
console.log(findMaxIncreasingSequence(arr));