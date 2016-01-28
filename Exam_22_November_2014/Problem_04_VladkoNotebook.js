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
function solve(arr) {
    var colors = {},
        result = {};
    arr.forEach(function(el) {
        var parts = el.split('|'),
            color = parts[0],
            type = parts[1],
            value = parts[2];
        if(!colors[color]) {
            colors[color] = {
                age: type == 'age' ? value : '-1',
                name: type == 'name' ? value : '-1',
                opponents: (type == 'win' || type == 'loss') ? [value] : [],
                wins: type == 'win' ? 1 : 0,
                loss: type == 'loss' ? 1 : 0
            };
        } else {
            if(type == 'win') {
                colors[color].wins++;
                colors[color].opponents.push(value);
            } else if(type == 'loss') {
                colors[color].loss++;
                colors[color].opponents.push(value);
            } else if(type == 'name') {
                colors[color].name = value;
            } else {
                colors[color].age = value;
            }

        }
    });
    Object.keys(colors).sort().forEach(function(color) {
        if(colors[color].age !== '-1' && colors[color].name !== '-1') {
            result[color] = {
                age: colors[color].age,
                name: colors[color].name,
                opponents: colors[color].opponents.sort(),
                rank: ((colors[color].wins + 1) / (colors[color].loss + 1)).toFixed(2)
            }
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
