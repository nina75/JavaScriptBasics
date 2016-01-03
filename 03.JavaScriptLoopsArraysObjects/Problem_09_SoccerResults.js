function solve(arr) {
    var info = arr.join('\n'),
        regex = /(.*?)\s*\/\s*(.*?)\s*:\s*(\d+)\s*-\s*(\d+)/g,
        match,
        teams = {};
    while(match = regex.exec(info)) {
        var team1 = match[1],
            team2 = match[2],
            team1goals = parseInt(match[3]),
            team2goals = parseInt(match[4]);
        if(!teams[team1]) {
            teams[team1] = {
                goalsScored: team1goals,
                goalsConceded: team2goals,
                matchesPlayedWith: [team2]
            };
        }
        else {
            teams[team1].goalsScored += team1goals;
            teams[team1].goalsConceded += team2goals;
            if(teams[team1].matchesPlayedWith.indexOf(team2) == -1) {
                teams[team1].matchesPlayedWith.push(team2);
            }
            teams[team1].matchesPlayedWith.sort();
        }
        if(!teams[team2]) {
            teams[team2] = {
                goalsScored: team2goals,
                goalsConceded: team1goals,
                matchesPlayedWith: [team1]
            };
        }
        else {
            teams[team2].goalsScored += team2goals;
            teams[team2].goalsConceded += team1goals;
            if(teams[team2].matchesPlayedWith.indexOf(team1) == -1) {
                teams[team2].matchesPlayedWith.push(team1);
            }
            teams[team2].matchesPlayedWith.sort();
        }
    }
    var teamsKeys = Object.keys(teams),
        sortedTeams = {};
    teamsKeys.sort();
    teamsKeys.forEach(function(team) {
        sortedTeams[team] = teams[team];
    });
    console.log(JSON.stringify(sortedTeams));
}

//solve([
//    'Germany / Argentina: 1-0',
//    'Brazil / Netherlands: 0-3',
//    'Netherlands / Argentina: 0-0',
//    'Brazil / Germany: 1-7',
//    'Argentina / Belgium: 1-0',
//    'Netherlands / Costa Rica: 0-0',
//    'France / Germany: 0-1',
//    'Brazil / Colombia: 2-1'
//]);
solve([
    'Levski / CSKA: 0-2',
    'Pavlikeni / Loko Gorna: 4-2',
    'Loko Gorna / Levski: 1-4',
    'Litex / Loko Gorna: 0-0',
    'Beroe / Botev Plovdiv: 2-1',
    'Loko Gorna / Beroe: 3-1',
    'Pavlikeni / Ludogorets: 0-2',
    'Loko Sofia / Litex: 0-2',
    'Pavlikeni / Marek: 1-1',
    'Litex / Levski: 0-0',
    'Beroe / Litex: 3-2',
    'Litex / Beroe: 1-0',
    'Ludogorets / Litex: 3-0',
    'Litex / Ludogorets: 1-0',
    'CSKA / Beroe: 1-0',
    'Botev Plovdiv / CSKA: 1-1',
    'Ludogorets / Loko Sofia: 1-0',
    'Litex / CSKA: 0-1',
    'Marek / Haskovo: 0-1',
    'Levski / Loko Gorna: 1-1'
]);