function solve(arr) {
    var firstRow = arr[0].split(/\s+/g),
        secondRow = arr[1].split(/\s+/g),
        thirdRow = arr[2].split(/\s+/g),
        fourthRow = arr[3].split(/\s+/g),
        system1Name = firstRow[0],
        system1Center = new Point(parseFloat(firstRow[1]), parseFloat(firstRow[2])),
        system2Name = secondRow[0],
        system2Center = new Point(parseFloat(secondRow[1]), parseFloat(secondRow[2])),
        system3Name = thirdRow[0],
        system3Center = new Point(parseFloat(thirdRow[1]), parseFloat(thirdRow[2])),
        shipCenter = new Point(parseFloat(fourthRow[0]), parseFloat(fourthRow[1])),
        moves = parseInt(arr[4]),
        counter = 0;

    while(counter <= moves) {
        if(isInStarSystem(shipCenter, system1Center)) {
            console.log(system1Name.toLowerCase());
        }
        else if(isInStarSystem(shipCenter, system2Center)) {
            console.log(system2Name.toLowerCase());
        }
        else if(isInStarSystem(shipCenter, system3Center)) {
            console.log(system3Name.toLowerCase());
        }
        else {
            console.log('space');
        }
        shipCenter.y++;
        counter++;
    }

    function Point(x, y) {
        return {
            x: x,
            y: y
        }
    }

    function isInStarSystem(point, systemCenter) {
        if(point.x >= systemCenter.x - 1 && point.x <= systemCenter.x + 1 &&
            point.y >= systemCenter.y - 1 && point.y <= systemCenter.y + 1) {
            return true;
        }
        return false;
    }
}
//taka se chupqt 2 testa za vreme
function solve(arr) {
    var starSystems = [];
    for (var i = 0; i < 3; i += 1) {
        var parts = arr[i].split(/\s+/);
        starSystems.push({name: parts[0].trim().toLowerCase(), X: +parts[1], Y: +parts[2]});
    }
    var shipX = +(arr[3].split(' ')[0]),
        shipY = +(arr[3].split(' ')[1]),
        movesCount = +arr[4];

    for (var i = 0; i <= movesCount; i += 1) {
        var place = 'space';
        for (var j = 0; j < starSystems.length; j += 1) {
            if(isShipInStarSystem(starSystems[j])) {
                place = starSystems[j].name;
                break;
            }
        }
        console.log(place);
        shipY += 1;
    }

    function isShipInStarSystem(system) {
        return  system.X - 1 <= shipX && shipX <= system.X + 1 &&
             system.Y - 1 <= shipY && shipY <= system.Y + 1;
    }
}

solve([
    'Sirius 3 7',
    'Alpha-Centauri 7 5',
    'Gamma-Cygni 10 10',
    '8 1',
    '6'
]);
//solve([
//    'Terra-Nova 16 2',
//    'Perseus 2.6 4.8',
//    'Virgo 1.6 7',
//    '2 5',
//    '4'
//
//]);