function solve(arr) {
    var arrCopy = [];
    for (var i = 0; i < arr.length; i++) {
        arrCopy[i] = arr[i].split('');
    }

    for (var i = 0; i < arr.length - 2; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if(isFromX(i, j)) {
                arrCopy[i][j] = '';
                arrCopy[i][j + 2] = '';
                arrCopy[i + 1][j + 1] = '';
                arrCopy[i + 2][j] = '';
                arrCopy[i + 2][j + 2] = '';
            }
        }
    }
    
    function isFromX(row, col) {
        if(
            arr[row].charAt(col).toLowerCase() == arr[row].charAt(col + 2).toLowerCase() &&
            arr[row].charAt(col).toLowerCase() == arr[row + 1].charAt(col + 1).toLowerCase() &&
            arr[row].charAt(col).toLowerCase() == arr[row + 2].charAt(col).toLowerCase() &&
            arr[row].charAt(col).toLowerCase() == arr[row + 2].charAt(col + 2).toLowerCase()) {
           return true; 
        }
    }
    
    arrCopy.forEach(function(el) {
        console.log(el.join(''));
    })
}

solve([
    'abnbjs',
    'xoBab',
    'Abmbh',
    'aabab',
    'ababvvvv'
]);