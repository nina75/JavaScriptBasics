function solve(arr) {
    var numberOfJumpsAllowed = arr[0] | 0,
        trackLength = arr[1] | 0,
        gameField = [],
        fleasArr = arr.slice(2, arr.length),
        players = [],
        winner = '';

    //draw game field
    gameField.push(drawRowAsArray('#'));
    gameField.push(drawRowAsArray('#'));
    for (var i = 0; i < fleasArr.length; i++) {
        gameField.push(drawRowAsArray('.'));
    }
    gameField.push(drawRowAsArray('#'));
    gameField.push(drawRowAsArray('#'));

    //get flea's data and fill the players arr
    fleasArr.forEach(function(el) {
        var fleaData = el.split(/, /),
            fleaName = fleaData[0],
            jumpDistance = fleaData[1] | 0;
        players.push([fleaName, jumpDistance, 0]); //0 is current flea's position
    });
    
    //put each flea at the beginning
    for (var i = 2; i < gameField.length - 2; i++) {
        gameField[i][0] = players[i - 2][0].substring(0, 1).toUpperCase();
    }

    //start game
    var gameOver = false;
    while(numberOfJumpsAllowed > 0 && !gameOver) {
        for (var i = 0; i < players.length; i++) {
            var jumpDistance = players[i][1];
            gameField[i + 2][players[i][2]] = '.';
            players[i][2] += jumpDistance;
            gameField[i + 2][players[i][2]] = players[i][0].substring(0, 1).toUpperCase();
            if(players[i][2] >= trackLength - 1) {
                gameField[i + 2] = gameField[i + 2].slice(0, trackLength);
                gameField[i + 2][trackLength - 1] = players[i][0].substring(0, 1).toUpperCase();
                winner = players[i][0];
                gameOver = true;
                break;
            }
        }

        numberOfJumpsAllowed--;
    }
    if(winner === '') {
        var maxPos = players[0][2];
        winner = players[0][0];
        players.forEach(function(player) {
            if(player[2] >= maxPos) {
                maxPos = player[2];
                winner = player[0];
            }
        });
    }

    //print output
    gameField.forEach(function(el) {
        console.log(el.join(''));
    });
    console.log('Winner: ' + winner);

    function drawRowAsArray(symbol) {
        var row =  [];
        for (var i = 0; i < trackLength; i++) {
            row[i] = symbol;
        }

        return row;
    }
}

function solve(arr) {
    var jumps = +arr[0],
        trackLen = +arr[1],
        players = [],
        tokens,
        gameField = [], 
        winner,
        hasRealWinner = false,
        i, j, len, player;
    if(!Array.prototype.fill) {
        Array.prototype.fill = function(value, from ,to){
            var from = from || 0,
                to = to || this.length - 1,
                i;
            for (i = from; i <= to; i++) {
                this[i] = value;
            }
            return this;
        };
    }

    arr.slice(2).forEach(function(el){
        tokens = el.split(', ');
        players.push({name: tokens[0], distance: +tokens[1], position: 0});
    });
    players.forEach(function (player) {
        gameField.push((new Array(trackLen)).fill('.'));
    });

    //play game
    game:
    while(jumps > 0) {
        for (i = 0, len = players.length; i < len; i += 1) {
            player = players[i];
            player.position += player.distance;
            if(player.position >= trackLen - 1) {
                player.position = trackLen - 1;
                winner = player;
                hasRealWinner = true;
                break game;
            }
        }
        jumps--;
    }
    if(!hasRealWinner) {
        winner = players[0];
    }

    for (j = 0, len = players.length; j < len; j += 1) {
        gameField[j][players[j].position] = players[j].name[0].toUpperCase();
        if(!hasRealWinner&&players[j].position >= winner.position) {
            winner = players[j];
        }
    }

    console.log(new Array(trackLen + 1).join('#'));
    console.log(new Array(trackLen + 1).join('#'));
    gameField.forEach(function(el){
        console.log(el.join(''));
    });
    console.log(new Array(trackLen + 1).join('#'));
    console.log(new Array(trackLen + 1).join('#'));
    console.log('Winner: ' + winner.name);
}

//solve([
//    '10',
//    '19',
//    'angel, 9',
//    'Boris, 10',
//    'Georgi, 3',
//    'Dimitar, 7'
//]);

//solve([
//    '3',
//    '5',
//    'cura, 1',
//    'Pepi, 1',
//    'UlTraFlea, 1',
//    'BOIKO, 1'
//]);
//
//solve([
//    '3',
//    '40',
//    'S, 5',
//    'L, 1',
//    'O, 7',
//    'C, 3',
//    'H, 10',
//    'A, 12',
//    'I, 5',
//    'N, 8',
//    'O, 0',
//    'S, 6'
//]);

solve([
    '3',
    '10',
    'Suzi, 5'
]);

var arr = new Array(6).join('#');
console.log(arr);