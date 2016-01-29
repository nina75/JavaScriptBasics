function solve(arr) {
    var text = arr[0],
        sum = Number(arr[1]),
        matrix = [];

    //fill the matrix
    arr.slice(2, arr.length).forEach(function(el) {
        matrix.push(el.trim().split(/\s+/).map(Number));
    });

    //find magic number
    var firstNumberPositionX,
        firstNumberPositionY,
        secondNumberPositionX,
        secondNumberPositionY;

    loop1:
        for (var i = 0, len = matrix.length; i < len; i += 1) {
            for (var j = 0 ; j < len; j += 1) {
                var firstNumber = matrix[i][j];
                firstNumberPositionX = i;
                firstNumberPositionY = j;
                for (var k = 0; k < len; k += 1) {
                    for (var l = j + 1; l < len; l += 1) {
                        if(firstNumber + matrix[k][l] == sum) {
                            secondNumberPositionX = k;
                            secondNumberPositionY = l;
                            break loop1;
                        }
                    }
                }
            }
        }
    var magicNumber = firstNumberPositionX + firstNumberPositionY + secondNumberPositionX + secondNumberPositionY;

    //decode string
    var decodedText = '';
    for (var i = 0; i < text.length; i += 1) {
        if(i % 2) {
            decodedText += String.fromCharCode(text.charCodeAt(i) - magicNumber);
        } else {
            decodedText += String.fromCharCode(text.charCodeAt(i) + magicNumber);
        }
    }
    console.log(decodedText);
}

solve([
    '>scsimh$deo$]$^mnxdh]}',
    '400',
    '200 100 120',
    '120 102 300',
    '150 290 370'
]);

solve([
    'EfqfNhmnkynn%`fn~',
    '100',
    '200 100 120 300',
    '100 90 300 100',
    '150 290 370 100',
    '10 11 100 100'
]);