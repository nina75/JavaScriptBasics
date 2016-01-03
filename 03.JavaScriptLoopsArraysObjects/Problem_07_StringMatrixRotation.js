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
