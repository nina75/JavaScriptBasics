function solve(arr) {
    var arrCopy = [];
    arr.forEach(function(el){
        arrCopy.push(el.split(''));
    });
    
    for (var i = 0; i < arr.length - 2; i++) {
        for (var j = 1; j <arr[i].length; j++) {
            if(isFromPlus(i, j)) {
                arrCopy[i][j] = '';
                arrCopy[i + 1][j - 1] = '';
                arrCopy[i + 1][j] = '';
                arrCopy[i + 1][j + 1] = '';
                arrCopy[i + 2][j] = '';
            }
        }
    }
    
    function isFromPlus(row, col) {
        if(arr[row].charAt(col).toLowerCase() == arr[row + 1].charAt(col - 1).toLowerCase() &&
           arr[row].charAt(col).toLowerCase() == arr[row + 1].charAt(col - 1).toLowerCase() &&
           arr[row].charAt(col).toLowerCase() == arr[row + 1].charAt(col).toLowerCase() &&
           arr[row].charAt(col).toLowerCase() == arr[row + 1].charAt(col + 1).toLowerCase() &&
           arr[row].charAt(col).toLowerCase() == arr[row + 2].charAt(col).toLowerCase()) {
            return true;
        }
    }
    arrCopy.forEach(function(el) {
        console.log(el.join(''));
    })
}

solve([
    'ab**l5',
    'bBb*555',
    'absh*5',
    'ttHHH',
    'ttth'
]);