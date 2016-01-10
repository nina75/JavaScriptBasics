function solve(arr) {
    var players = [],
        player;
    for(var i = 0; i < arr.length; i++) {
        var regex = /(.+?)\s*vs.\s*(.*?)\s*:\s*([\d-\s]+)/,
            matches = arr[i].match(regex),
            player1Name = matches[1].replace(/\s+/g, ' '),
            player2Name = matches[2].replace(/\s+/g, ' '),
            sets = matches[3].split(/\s+/);

        var matchInfo = findSetsGamesMatchesWonLoose(sets);
        var player1 = {
            name: player1Name,
            matchesWon: matchInfo.isFirstPlayerWon ? 1 : 0,
            matchesLost: matchInfo.isFirstPlayerWon ? 0 : 1,
            setsWon: matchInfo.setsFirstPlayerWon,
            setsLost: matchInfo.setsSecondPlayerWon,
            gamesWon: matchInfo.gamesFirstPlayerWon,
            gamesLost: matchInfo.gamesSecondPlayerWon
        };
        var player2 = {
            name: player2Name,
            matchesWon: matchInfo.isFirstPlayerWon ? 0 : 1,
            matchesLost: matchInfo.isFirstPlayerWon ? 1 : 0,
            setsWon: matchInfo.setsSecondPlayerWon,
            setsLost: matchInfo.setsFirstPlayerWon,
            gamesWon: matchInfo.gamesSecondPlayerWon,
            gamesLost: matchInfo.gamesFirstPlayerWon
        };

        if(player = players.filter(function(pl) { return pl.name == player1Name; })[0]) {
            //player = players.filter(function(pl) { return pl.name == player1Name; })[0];
            player.matchesWon += (matchInfo.isFirstPlayerWon ? 1 : 0);
            player.matchesLost += (matchInfo.isFirstPlayerWon ? 0 : 1);
            player.setsWon += matchInfo.setsFirstPlayerWon;
            player.setsLost += matchInfo.setsSecondPlayerWon;
            player.gamesWon += matchInfo.gamesFirstPlayerWon;
            player.gamesLost += matchInfo.gamesSecondPlayerWon;

        } else {
            players.push(player1);
        }

        if(player = players.filter(function(pl) { return pl.name == player2Name; })[0]) {
            //player = players.filter(function(pl) { return pl.name == player2Name; })[0];
            player.matchesWon += (matchInfo.isFirstPlayerWon ? 0 : 1);
            player.matchesLost += (matchInfo.isFirstPlayerWon ? 1 : 0);
            player.setsWon += matchInfo.setsSecondPlayerWon;
            player.setsLost += matchInfo.setsFirstPlayerWon;
            player.gamesWon += matchInfo.gamesSecondPlayerWon;
            player.gamesLost += matchInfo.gamesFirstPlayerWon;
        } else {
            players.push(player2);
        }


}
    function findSetsGamesMatchesWonLoose(scoreArray) {
        var matchInfo = {
            setsFirstPlayerWon: 0,
            setsSecondPlayerWon: 0,
            gamesFirstPlayerWon: 0,
            gamesSecondPlayerWon: 0,
            isFirstPlayerWon: true
        };
        scoreArray.forEach(function(set) {
            var setResultStr = set.split('-'),
                gameWonFirstPlayer = setResultStr[0] | 0,
                gameWonSecondPlayer = setResultStr[1] | 0,
                setResult = gameWonFirstPlayer - gameWonSecondPlayer;
            matchInfo.gamesFirstPlayerWon += gameWonFirstPlayer;
            matchInfo.gamesSecondPlayerWon += gameWonSecondPlayer;
            if(setResult > 0) {
                matchInfo.setsFirstPlayerWon++;
            } else {
                matchInfo.setsSecondPlayerWon++;
            }
        });
        if(matchInfo.setsFirstPlayerWon < matchInfo.setsSecondPlayerWon) {
            matchInfo.isFirstPlayerWon = false;
        }

        return matchInfo;
    }
    players.sort(function(x, y) {
        if(x.matchesWon == y.matchesWon) {
            if(x.setsWon == y.setsWon) {
                if(x.gamesWon == y.gamesWon) {
                    return x.name.localeCompare(y.name);
                }
                return y.gamesWon - x.gamesWon;
            }
            return y.setsWon - x.setsWon;
        }

        return y.matchesWon - x.matchesWon;
    });

    console.log(JSON.stringify(players));
}

solve([
    'HuanMartin  delPotro			vs.Wrist Injuries:		6-3		1-6 2-6',
    'HuanMartin  delPotro			vs.Wrist Injuries:		6-3		1-6 2-6',
    'HuanMartin  delPotro			vs.Wrist Injuries:		6-3		1-6 2-6',

    'HuanMartin  delPotrn			vs.Wrist Injuries:		6-3		1-6 2-6',
    'HuanMartin  delPotrn	        vs.Wrist Injuries:		6-3		1-6 2-6',
    'HuanMartin  	delPotrn		vs.Wrist Injuries:		6-3     1-6 2-6'
]);