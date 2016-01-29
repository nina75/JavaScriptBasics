function solve(arr){
    var sum = +arr[1],
        matrix = [], row, col, magicNum,
        encryptedMsg = arr[0],
        result = '';
    for (var i = 2, len = arr.length; i < len; i += 1) {
        matrix.push(arr[i].split(' ').map(Number));
    }

    var rowFirst = 0,
        colFirst = 0,
        rowSecond = 0,
        colSecond = 1;

    while(true) {
        if(matrix[rowFirst][colFirst] + matrix[rowSecond][colSecond] === sum) {
            break;
        } else if(colSecond < matrix[0].length - 1) {
            colSecond++;
        } else {
            colSecond = 0;
            rowSecond++;
        }
        if(rowSecond >= matrix.length) {
            if(colFirst < matrix[0].length - 1) {
                colFirst++;
                if(colFirst == matrix[0].length - 1) {
                    rowSecond = rowFirst + 1;
                    colSecond = 0;
                } else {
                    rowSecond = rowFirst;
                    colSecond = colFirst + 1;
                }
            } else {
                colFirst = 0;
                rowFirst++;
                if(colFirst == matrix[0].length - 1) {
                    rowSecond = rowFirst + 1;
                    colSecond = 0;
                } else {
                    rowSecond = rowFirst;
                    colSecond = colFirst + 1;
                }
            }
        }
    }
    magicNum = rowFirst + rowSecond + colFirst + colSecond;
    for (var j = 0; j < encryptedMsg.length; j += 1) {
        if(!(j % 2)) {
            result += String.fromCharCode(encryptedMsg[j].charCodeAt(0) + magicNum);
        } else {
            result += String.fromCharCode(encryptedMsg[j].charCodeAt(0) - magicNum);
        }
    }
    console.log(result);
}