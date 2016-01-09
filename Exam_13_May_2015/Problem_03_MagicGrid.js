function solve(arr) {
    var text = arr[0],
        sum = Number(arr[1]),
        matrix = [],
        magicNumber,
        filteredArr = arr.slice(2, arr.length);
    filteredArr.forEach(function(el) {
        matrix.push(el.trim().split(/\s+/).map(Number));
    });

    //find magic number
    var firstNumberPositionX,
        firstNumberPositionY,
        secondNumberPositionX,
        secondNumberPositionY;

    loop1:
    for (var i = 0, len = matrix.length; i < len; i += 1) {
        loop2:
        for (var j = 0 ; j < len; j += 1) {
            var firstNumber = matrix[i][j];
            firstNumberPositionX = i;
            firstNumberPositionY = j;
            loop3:
            for (var k = 0; k < len; k++) {
                loop4:
                for (var l = j + 1; l < len; l++) {
                    if(firstNumber + matrix[k][l] == sum) {
                        secondNumberPositionX = k;
                        secondNumberPositionY = l;
                        break loop1;
                    }
                }
            }
        }
    }
    magicNumber = firstNumberPositionX + firstNumberPositionY + secondNumberPositionX + secondNumberPositionY;
    //console.log(firstNumberPositionX + ' ' + firstNumberPositionY);
    //console.log(secondNumberPositionX + ' ' + secondNumberPositionY);

    //decode string
    var decodedText = '';
    for (var m = 0; m < text.length; m++) {
        if(m % 2) {
            decodedText += String.fromCharCode(text.charCodeAt(m) - magicNumber);
        } else {
            decodedText += String.fromCharCode(text.charCodeAt(m) + magicNumber);
        }
    }

    console.log(decodedText);
    
}

//solve([
//    '>scsimh$deo$]$^mnxdh]}',
//    '400',
//    '200 100 120',
//    '120 102 300',
//    '150 290 370'
//]);

solve([
    'EfqfNhmnkynn%`fn~',
    '100',
    '200 100 120 300',
    '100 90 300 100',
    '150 290 370 100',
    '10 11 100 100'
]);