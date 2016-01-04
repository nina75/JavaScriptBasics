function solve(arr) {
    var colors = {},
        result = {};
    for (var i = 0; i < arr.length; i++) {
        var tokens = arr[i].split('|'),
            color = tokens[0];
        if(!colors[color]) {
            colors[color] = { age: '-', name: '-', opponents: [], rank: [1, 1] };
        }
        switch (tokens[1]) {
            case 'age':
                colors[color]['age'] = tokens[2];
                break;
            case 'name':
                colors[color]['name'] = tokens[2];
                break;
            case 'win':
                colors[color]['rank'][0]++;
                colors[color]['opponents'].push(tokens[2]);
                colors[color]['opponents'].sort();
                break;
            case 'loss':
                colors[color]['rank'][1]++;
                colors[color]['opponents'].push(tokens[2]);
                colors[color]['opponents'].sort();
                break;
            default:
                break;
        }
    }
    var keys = Object.keys(colors);
    keys.sort();
    keys.forEach(function(color) {
        if(colors[color]['age'] != '-' && colors[color]['name'] != '-') {
            result[color] = colors[color];
            result[color]['rank'] = (colors[color]['rank'][0] / colors[color]['rank'][1]).toFixed(2);
        }
    });
    console.log(JSON.stringify(result));
}

solve([
    'purple|age|99',
    'red|age|44',
    'blue|win|pesho',
    'blue|win|mariya',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Yana',
    'purple|loss|Yana',
    'purple|loss|Manov',
    'purple|loss|Manov',
    'red|name|gosho',
    'blue|win|Vladko',
    'purple|loss|Yana',
    'purple|name|VladoKaramfilov',
    'blue|age|21',
    'blue|loss|Pesho'
]);
