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