function concerts(arr) {
    var result = {};
    for(var line in arr) {
       var tokens = arr[line].split('|'),
           group = tokens[0].trim(),
           city = tokens[1].trim(),
           stadium = tokens[3].trim();
        if(!(city in result)) {
            var groups = [group];
            result[city] = {};
            result[city][stadium] = groups;
        }
        else {
            if(!(stadium in result[city])) {
                var groups = [group];
                result[city][stadium] = groups;
            }
            else {
                if(!(result[city][stadium].indexOf(group) > -1)) {
                    result[city][stadium].push(group);
                    result[city][stadium].sort();
                }
            }
        }
    }
    var sortedResult = {};
    var citiesKeys = Object.keys(result);
    citiesKeys.sort();
    citiesKeys.forEach(function(city) {
        var stadiumKeys = Object.keys(result[city]);
        stadiumKeys.sort();
        stadiumKeys.forEach(function(stadium){
           if(sortedResult[city] == undefined) {
               sortedResult[city] = {};
           }
           sortedResult[city][stadium] = result[city][stadium];
        });
    });

    console.log(JSON.stringify(sortedResult));
    
}

concerts([
    'ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
    'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
    'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
    'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
    'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
    'Helloween | London | 28-Jul-2014 | Wembley Stadium',
    'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
    'Metallica | London | 03-Oct-2014 | Olympic Stadium',
    'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
    'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'
]);