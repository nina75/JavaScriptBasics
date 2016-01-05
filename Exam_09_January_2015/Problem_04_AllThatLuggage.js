function solve(arr) {
    var sortingCriteria = arr[arr.length - 1],
        luggageByOwners = {};
    arr = arr.slice(0, arr.length - 1);
    arr.forEach(function(row) {
        var tokens = row.split(/\.*\*\.*/),
            owner = tokens[0],
            luggageName = tokens[1],
            isFood = tokens[2] == 'true' ? true : false,
            isDrink = tokens[3] == 'true' ? true : false,
            isFragile = tokens[4] == 'true' ? true : false,
            weight = Number(tokens[5]),
            transferredWith = tokens[6];
        if(!luggageByOwners[owner]) {
            luggageByOwners[owner] = {};
        }
        luggageByOwners[owner][luggageName] = {
            kg: weight,
            fragile: isFragile,
            type: isFood ? 'food' : (isDrink ? 'drink' : 'other'),
            transferredWith: transferredWith
        };
    });

    switch (sortingCriteria) {
        case 'strict':
            console.log(JSON.stringify(luggageByOwners));
            break;
        case 'luggage name':
            console.log(JSON.stringify(sortByLuggageName(luggageByOwners)));
            break;
        case 'weight':
            console.log(JSON.stringify(sortByWeight2(luggageByOwners)));
            break;
        default: break;
    }

    function sortByLuggageName(obj) {
        var sortedObj = {};

        for(var name in obj) {
            sortedObj[name] = {};
            var keys = Object.keys(obj[name]);
            keys.sort();
            keys.forEach(function(luggageName) {
                sortedObj[name][luggageName] = obj[name][luggageName];
            });
        }

        return sortedObj;
    }
    
    //function sortByWeight(obj) {
    //    var sortedObj = {};
    //    for(var name in obj) {
    //        var tempArr = [];
    //        sortedObj[name] = {};
    //        for(var luggageName in obj[name]) {
    //            var luggage = {
    //                luggageName: luggageName,
    //                kg: obj[name][luggageName]['kg'],
    //                fragile: obj[name][luggageName]['fragile'],
    //                type: obj[name][luggageName]['type'],
    //                transferredWith: obj[name][luggageName]['transferredWith']
    //            };
    //            tempArr.push(luggage);
    //        }
    //
    //        tempArr.sort(function(x, y) {
    //            return x.kg - y.kg;
    //        });
    //        tempArr.forEach(function(luggage) {
    //            sortedObj[name][luggage.luggageName] = {
    //               kg: luggage.kg,
    //               fragile: luggage.fragile,
    //               type: luggage.type,
    //               transferredWith: luggage.transferredWith
    //            };
    //        })
    //    }
    //    return sortedObj;
    //}

    function sortByWeight2(obj) {
        var sortedObj = {};
        Object.keys(obj).forEach(function(key) {
            sortedObj[key] = {};
            var a = Object.keys(obj[key]).sort(function(x, y) {
                return obj[key][x].kg - obj[key][y].kg;
            });
            console.log(a);
            a.forEach(function (value) {
                sortedObj[key][value] = obj[key][value];
            })
        });
        return sortedObj;
    }
}

solve([
    'Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack',
    'Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
    'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
    'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
    'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
    'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
    'weight'
]);