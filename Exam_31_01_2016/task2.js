function solve(arr) {
    var seqLen = +arr[arr.length - 1];
    var rowLengths = [],
        longArray = [];
    for (var i = 0; i < arr.length - 1; i += 1) {
        var rowArr = arr[i].split(' ');
        rowLengths.push(rowArr.length);
        rowArr.forEach(function(el) {
            longArray.push(el);
        });
    }
    for (var j = 0; j < longArray.length; j += 1) {
        if(checkIfEqualsSeqInArr(j, seqLen, longArray)) {
            for (var k = 0; k < seqLen; k += 1) {
                longArray[j + k] = '*';
            }
        }
    }

    rowLengths.forEach(function(len) {
        var output = longArray.slice(0, len).join(' ').replace(/\*/g, '').trim().replace(/\s+/g, ' ');
        if(output === '') {
            console.log('(empty)');
        } else {
            console.log(output);
        }


        longArray.splice(0, len);
    });

    function checkIfEqualsSeqInArr(index, len, arr) {
        for (var i = 0; i < len - 1; i += 1) {
            if(arr[index] !== arr[index + i + 1]) {
                return false;
            }
        }
        return true;
    }

    console.log(longArray.join(' '));

}

//solve([
//    '3 3 3 2 5 9 9 9 9 1 2',
//    '1 1 1 1 1 2 5 8 1 1 7 7',
//    '7 1 2 3 5 7 4 4 1 2',
//    '2'
//]);

solve([
    '2 1 1 1',
    '1 1 1',
    '3 7 3 3 1',
    '2'
]);