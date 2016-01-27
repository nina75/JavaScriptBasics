function solve(arr) {
    var degrees = parseInt(arr[0].match(/\d+/)[0]),
        words = arr.slice(1),
        maxLength  = words[0].length;

    for (var i = 1; i < words.length; i++) {
        if(words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    function rotate(degrees) {
        var matrix = [],
            rotation = degrees % 360,
            rotatedMatrix = [];
        for (var i = 0; i < words.length; i++) {
            matrix[i] = [];
            for (var j = 0; j < words[i].length; j++) {
                matrix[i][j] =words[i].charAt(j);
            }
            for (var j = words[i].length; j < maxLength; j++) {
                matrix[i][j] =' ';
            }
        }
        switch (rotation) {
            case 0:
                for (var i = 0; i < matrix.length; i++) {
                    rotatedMatrix[i] = [];
                    for (var j = 0; j < maxLength; j++) {
                        rotatedMatrix[i][j] = matrix[i][j];
                    }
                }
                break;
            case 90:
                for (var i = 0; i < maxLength; i++) {
                    rotatedMatrix[i] = [];
                    for (var j = 0; j < matrix.length; j++) {
                        rotatedMatrix[i][matrix.length - j - 1] = matrix[j][i];
                    }
                }
                break;
            case 180:
                for (var i = 0; i < matrix.length; i++) {
                    rotatedMatrix[i] = [];
                    for (var j = 0; j < maxLength; j++) {
                        rotatedMatrix[i][j] = matrix[matrix.length - i - 1][maxLength - j - 1];
                    }
                }
                break;
            case 270:
                for (var i = 0; i < maxLength; i++) {
                    rotatedMatrix[i] = [];
                    for (var j = 0; j < matrix.length; j++) {
                        rotatedMatrix[i][j] = matrix[j][maxLength - i - 1];
                    }
                }
                break;
            default:
                break;
        }

        return rotatedMatrix;
    }

    rotate(degrees).forEach(function(el){
        console.log(el.join(''));
    });
}

function solve(arr) {
    var maxWordLen = 1,
        matrix = [],
        rotation = +(arr[0].match(/Rotate\((\d+)\)/)[1]) % 360;
    //find max length
    for (var i = 1; i < arr.length; i += 1) {
        if(arr[i].length > maxWordLen) {
            maxWordLen = arr[i].length;
        }
    }
    //fill the matrix
    for (var i = 1; i < arr.length; i += 1) {
        var word = arr[i];
        if(word.length < maxWordLen) {
            for (var j = word.length; j < maxWordLen; j += 1) {
                word = word + ' ';
            }
        }
       matrix.push(word);
    }

    switch (rotation) {
        case 0:
            for (var i = 1; i < arr.length; i += 1) {
                console.log(arr[i]);
            }
            break;
        case 90:
            for (var col = 0; col < maxWordLen; col += 1) {
                var str = '';
                for (var row = matrix.length - 1; row >= 0; row -= 1) {
                    str += matrix[row][col];
                }
                console.log(str);
            }
            break;
        case 180:
            for (var row = matrix.length - 1; row >= 0; row -= 1) {
                var str = '';
                for (var col = maxWordLen - 1; col >= 0; col -= 1) {
                    str += matrix[row][col];
                }
                console.log(str);
            }
            break;
        case 270:
            for (var col = maxWordLen - 1; col >= 0; col -= 1) {
                var str = '';
                for (var row = 0; row < matrix.length; row += 1) {
                    str += matrix[row][col];
                }
                console.log(str);
            }
            break;
    }
}

/*  hello**    esh     ***maxe    *i*
    softuni    xoe     inutfos    *n*
    exam***    afl     **olleh    ou*
               mtl                ltm
               *uo                lfa
               *n*                eox
               *i*                hse    */


solve([
    'Rotate(90)',
    'hello',
    'softuni',
    'exam'
]);
//solve([
//    'Rotate(180)',
//    'hello',
//    'softuni',
//    'exam'
//]);
solve([
    'Rotate(0)',
    'js',
    'exam'
]);
