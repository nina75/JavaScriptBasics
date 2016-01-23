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

function solve(arr) {
    var players  = [],
        regex = /(.+?)\s*vs.\s*(.+?)\s*:\s*([\d\s]+)/;
    arr.forEach(function(el) {
        var matches = el.match(regex);
        var player1Name = matches[1].replace(/\s+/, ' '),
            player2Name = matches[2].replace(/\s+/, ' '),
            matchInfo = getMatchInfo(matches[3]);

        var pl1 = players.filter(function(player) { return player.name == player1Name; })[0];
        if(!pl1) {
            var player1 = {
                "name": player1Name,
                "matchesWon": matchInfo.isPlayer1Winner ? 1 : 0,
                "matchesLost": matchInfo.isPlayer1Winner ? 0 : 1,
                "setsWon": matchInfo.setsPlayer1Won,
                "setsLost": matchInfo.setsPlayer2Won,
                "gamesWon": matchInfo.gamesPlayer1Won,
                "gamesLost": matchInfo.gamesPlayer2Won
            };
            players.push(player1);
        } else {
            pl1.matchesWon += matchInfo.isPlayer1Winner ? 1 : 0;
            pl1.matchesLost += matchInfo.isPlayer1Winner ? 0 : 1;
            pl1.setsWon += matchInfo.setsPlayer1Won;
            pl1.setsLost += matchInfo.setsPlayer2Won;
            pl1.gamesWon += matchInfo.gamesPlayer1Won;
            pl1.gamesLost += matchInfo.gamesPlayer2Won;
        }
        
        var pl2 = players.filter(function(player) { return player.name == player2Name; })[0];
        if(!pl2) {
            var player2 = {
                "name": player2Name,
                "matchesWon": matchInfo.isPlayer1Winner ? 0 : 1,
                "matchesLost": matchInfo.isPlayer1Winner ? 1 : 0,
                "setsWon": matchInfo.setsPlayer2Won,
                "setsLost": matchInfo.setsPlayer1Won,
                "gamesWon": matchInfo.gamesPlayer2Won,
                "gamesLost": matchInfo.gamesPlayer1Won
            };
            players.push(player2);
        } else {
            pl2.matchesWon += matchInfo.isPlayer1Winner ? 0 : 1;
            pl2.matchesLost += matchInfo.isPlayer1Winner ? 1 : 0;
            pl2.setsWon += matchInfo.setsPlayer2Won;
            pl2.setsLost += matchInfo.setsPlayer1Won;
            pl2.gamesWon += matchInfo.gamesPlayer2Won;
            pl2.gamesLost += matchInfo.gamesPlayer1Won;
        }
    });

    players.sort(function (x, y) {
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
    function getMatchInfo(match) {
        var info = {
            gamesPlayer1Won: 0,
            setsPlayer1Won: 0,
            gamesPlayer2Won: 0,
            setsPlayer2Won: 0,
            isPlayer1Winner: true
        }
        var sets = match.split(/\s+/);
        sets.forEach(function(set) {
            var games = set.split('-');
            info.gamesPlayer1Won += +games[0];
            info.gamesPlayer2Won += +games[1];
            if(+games[0] > +games[1]) {
                info.setsPlayer1Won++;
            } else {
                info.setsPlayer2Won++;
            }
        });
        if(info.setsPlayer1Won < info.setsPlayer2Won) {
            info.isPlayer1Winner = false;
        }
        return info;
    }

}

solve([
    'HuanMartin  delPotro			vs.Wrist Injuries:		6-3		1-6 2-6',
    'HuanMartin  delPotro			vs.Wrist Injuries:		6-3		1-6 2-6',
    'HuanMartin  delPotro			vs.Wrist Injuries:		6-3		1-6 2-6',

    'HuanMartin  delPotrn			vs.Wrist Injuries:		6-3		1-6 2-6',
    'HuanMartin  delPotrn	        vs.Wrist Injuries:		6-3		1-6 2-6',
    'HuanMartin  	delPotrn		vs.Wrist Injuries:		6-3     1-6 2-6'
]);