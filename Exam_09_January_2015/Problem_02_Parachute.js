function solve(arr) {
    var coordinates = [0, 0];
    //find starting parachute's coordinates
    for (var i = 0; i < arr.length; i++) {
        var currentRow = arr[i];
        if(currentRow.indexOf('o') !== -1) {
            coordinates[1] = currentRow.indexOf('o');
            break;
        } else {
            coordinates[0]++;
        }
    }

    //falling
    var row = coordinates[0],
        msg = '';
    while(true) {
        row++;
        //the wind moves parachute left or right
        var countRightWind = findOccurrence(arr[row], '>');
        var countLeftWind = findOccurrence(arr[row], '<');
        coordinates[1] += countRightWind;
        coordinates[1] -= countLeftWind;

        //check if on the ground, water or crash
        var yPos = arr[row].charAt(coordinates[1]);
        if(yPos == '_') {
            msg = 'Landed on the ground like a boss!';
            break;
        } else if(yPos == '~') {
            msg = 'Drowned in the water like a cat!';
            break;
        } else if(yPos == '/' || yPos == '\\' || yPos == '|') {
            msg = 'Got smacked on the rock like a dog!';
            break;
        }
    }

    console.log(msg);
    console.log(row + ' ' + coordinates[1]);

    function findOccurrence(str, char) {
        var regex = new RegExp(char,'g');
        return (str.match(regex) || []).length;
    }
}

function solve(arr) {
    Array.prototype.countElement = function(element) {
        return this.reduce(function(count, el) {
            return count += (el === element ? 1 : 0);
        }, 0);
    };

    var matrix = [], xCoord, yCoord, rowsCount, colCount, position, wind, msg;

    //fill the matrix
    arr.forEach(function(el) {
       matrix.push(el.split(''));
    });
    rowsCount = matrix.length;
    colCount = matrix[0].length;
    
    //find starting parachute position

    outerLoop:
    for (var i = 0; i < rowsCount; i += 1) {
        for (var j = 0; j < colCount; j += 1) {
            if(matrix[i][j] === 'o') {
                xCoord = i;
                yCoord = j;
                break outerLoop;
            }
        }
    }
    //falling
    while(true) {
        xCoord += 1;
        wind = matrix[xCoord].countElement('>') - matrix[xCoord].countElement('<');
        yCoord += wind;
        position = matrix[xCoord][yCoord];
        if(position === '_') {
            msg = 'Landed on the ground like a boss!';
            break;
        }
        if(position === '~') {
            msg = 'Drowned in the water like a cat!';
            break;
        }
        if(position === '/' || position === '\\' || position === '|') {
            msg = 'Got smacked on the rock like a dog!';
            break;
        }
    }
    console.log(msg);
    console.log(xCoord + ' ' + yCoord);
}
//solve([
//    '--o----------------------',
//    '>------------------------',
//    '>------------------------',
//    '>-----------------/\\-----',
//    '-----------------/--\\----',
//    '>---------/\\----/----\\---',
//    '---------/--\\--/------\\--',
//    '<-------/----\\/--------\\-',
//    '\\------/----------------\\',
//    '-\\____/------------------'
//]);

solve([
    '-------------o-<<--------',
    '-------->>>>>------------',
    '---------------->-<---<--',
    '------<<<<<-------/\\--<--',
    '--------------<--/-<\\----',
    '>>--------/\\----/<-<-\\---',
    '---------/<-\\--/------\\--',
    '<-------/----\\/--------\\-',
    '\\------/--------------<-\\',
    '-\\___~/------<-----------'
]);