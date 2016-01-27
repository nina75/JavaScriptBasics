function solve(arr) {
    var html = arr.join('\n'),
        regex = /<tr><td>.*?<\/td><td>(.*?)<\/td><td>(.*?)<\/td><td>(.*?)<\/td><\/tr>/g,
        match,
        maxSum = - Number.MAX_VALUE,
        currentSum,
        values = [];
    while(match = regex.exec(html)) {
        var value1 = match[1],
            value2 = match[2],
            value3 = match[3];
        currentSum = 0;

        addToCurrentSum(value1);
        addToCurrentSum(value2);
        addToCurrentSum(value3);

        if(currentSum > maxSum) {
            maxSum = currentSum;
            values = [];
            pushToValues(value1);
            pushToValues(value2);
            pushToValues(value3);
        }
    }

    if(values.length == 0) {
        console.log('no data');
    }
    else {
        console.log(maxSum + ' = ' + values.join(' + '));
    }

    function addToCurrentSum(num) {
        if(!isNaN(num)) {
            currentSum += Number(num);
        }
    }

    function pushToValues(num) {
        if(!isNaN(num)) {
            values.push(num);
        }
    }
}
function solve(arr) {
    var regex = /<tr><td>.*?<\/td><td>(.+?)<\/td><td>(.+?)<\/td><td>(.+?)<\/td><\/tr>/,
        maxSum = -Infinity,
        maxPrices = [],
        hasData = false;
    arr.slice(2, arr.length - 1).forEach(function(tr) {
        var matches = tr.match(regex),
            price1 = +matches[1],
            price2 = +matches[2],
            price3 = +matches[3],
            sum = 0;
        if(!isNaN(price1) ) {
            sum += price1;
            hasData = true;
        }
        if(!isNaN(price2) ) {
            sum += price2;
            hasData = true;
        }
        if(!isNaN(price3) ) {
            sum += price3;
            hasData = true;
        }
        if(sum > maxSum) {
            maxSum = sum;
            maxPrices.length = 0;
            if(!isNaN(price1)) maxPrices.push(matches[1]);
            if(!isNaN(price2)) maxPrices.push(matches[2]);
            if(!isNaN(price3)) maxPrices.push(matches[3]);
        }
    });
    
    if(!hasData) {
        console.log('no data');
    } else {
        console.log(maxSum + ' = ' + maxPrices.join(' + '));
    }
}
//solve([
//    '<table>',
//    '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
//    '<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>',
//    '<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>',
//    '<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>',
//    '<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>',
//    '</table>'
//]);
//
//solve([
//    '<table>',
//    '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
//    '<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>',
//    '</table>'
//]);
//
//solve([
//    '<table>',
//    '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
//    '<tr><td>Sofia</td><td>12850</td><td>-560</td><td>20833</td></tr>',
//    '<tr><td>Rousse</td><td>-</td><td>50000.0</td><td>-</td></tr>',
//    '<tr><td>Bourgas</td><td>25000</td><td>25000</td><td>-</td></tr>',
//    '</table>'
//]);

solve([
    '<table>',
    '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
    '<tr><td>Pleven</td><td>-100</td><td>-200</td><td>-</td></tr>',
    '<tr><td>Varna</td><td>-100</td><td>-</td><td>-300</td></tr>',
    '<tr><td>Rousse</td><td>-</td><td>-200</td><td>-100</td></tr>',
    '</table>'
]);

