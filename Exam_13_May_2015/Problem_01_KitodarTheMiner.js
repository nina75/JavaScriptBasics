function solve(arr) {
    var regex = /mine\s+.*?\s*-\s+(.+?)\s*:\s*(\d+)/,
        matches,
        ore,
        quantity,
        gold = 0,
        silver = 0,
        diamonds = 0;
    arr.forEach(function(el) {
        matches = el.match(regex);
        if(matches != null) {
            ore = matches[1];
            quantity = matches[2] | 0;
            if(ore == 'gold') gold += quantity;
            if(ore == 'silver') silver += quantity;
            if(ore == 'diamonds') diamonds += quantity;
        }
    });
    console.log('*Silver: ' + silver);
    console.log('*Gold: ' + gold);
    console.log('*Diamonds: ' + diamonds);
}

//solve([
//    'mine bobovdol - gold: 10',
//    'mine - diamonds: 5',
//    'mine colas - wood: 10',
//    'mine myMine - silver:  14',
//    'mine silver:14 - silver: 14'
//
//]);

solve([
    'mine bobovDol - gold: 10"',
    'mine medenRudnik - silver: 22"',
    'mine chernoMore - shrimps : 24"',
    'gold: 50'
]);