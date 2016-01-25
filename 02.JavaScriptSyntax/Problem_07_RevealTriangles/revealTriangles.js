function reveal(arr) {
    String.prototype.replaceAt=function(index, character) {
        return this.substr(0, index) + character + this.substr(index + character.length);
    }
    var revealedArr = arr.slice();
    for (var row = 0, len = arr.length; row < len - 1; row++) {
        for (var col = 1, strLen = arr[row].length; col < strLen; col++) {
            if(existTriangleInPosition(row, col)) {
                revealedArr[row] = revealedArr[row].replaceAt(col, '*');
                revealedArr[row + 1] = revealedArr[row + 1].replaceAt(col - 1, '*');
                revealedArr[row + 1] = revealedArr[row + 1].replaceAt(col, '*');
                revealedArr[row + 1] = revealedArr[row + 1].replaceAt(col + 1, '*');
            }
        }
    }

    revealedArr.forEach(function(row) {
        console.log(row);
    })
    
    function existTriangleInPosition(row, col) {
        if (arr[row][col] == arr[row + 1][col - 1] &&
            arr[row][col] == arr[row + 1][col] &&
            arr[row][col] == arr[row + 1][col + 1]) {
            return true;
        }

        return false;
    }
}

function solve(arr) {
    var arrCopy = [];
    arr.forEach(function(row) {
        arrCopy.push(row.split(''));
    });

    for (var row = 0; row < arr.length - 1; row += 1) {
        for (var col = 1; col < arr[row].length; col += 1) {
            if(arr[row] != undefined && arr[row + 1] != undefined && isTrianglePart(row, col)) {
                arrCopy[row][col] = '*';
                arrCopy[row + 1][col - 1] = '*';
                arrCopy[row + 1][col] = '*';
                arrCopy[row + 1][col + 1] = '*';
            }
        }
    }
    
    function isTrianglePart(row, col) {
        return arr[row].charAt(col) == arr[row + 1].charAt(col - 1) &&
               arr[row].charAt(col) == arr[row + 1].charAt(col) &&
               arr[row].charAt(col) == arr[row + 1].charAt(col + 1);
    }
    arrCopy.forEach(function(el) {
       console.log(el.join(''));
    });
}

reveal(['abcdexgh', 'bbbdxxxh', 'abcxxxxx']);
reveal(['aa', 'aaa', 'aaaa', 'aaaaa']);
reveal(['ax','xxx','b','bbb','bbbb']);
reveal(['dffdsgyefg', 'ffffeyeee', 'jbfffays', 'dagfffdsss', 'dfdfa','dadaaadddf','sdaaaaa','daaaaaaasf']);