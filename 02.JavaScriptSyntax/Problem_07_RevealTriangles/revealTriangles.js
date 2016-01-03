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

reveal(['abcdexgh', 'bbbdxxxh', 'abcxxxxx']);
reveal(['aa', 'aaa', 'aaaa', 'aaaaa']);
reveal(['ax','xxx','b','bbb','bbbb']);
reveal(['dffdsgyefg', 'ffffeyeee', 'jbfffays', 'dagfffdsss', 'dfdfa','dadaaadddf','sdaaaaa','daaaaaaasf']);