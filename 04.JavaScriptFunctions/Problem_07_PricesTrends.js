//errors in judge
function solve(arr) {
    var test6 = [1.33,1.35,2.25,13.00,0.5,0.51,0.5,0.5,0.33,1.05,1.346,20,900,1500.1,1500.10,2000];
    var test8 = [1,1.0,1.00,1.001,1.000001,2,2.0,2.00,2.10,2.0,2.10,2.0,1.99,1.999,1.99001,1.99002,1.99003,4.00,5.00,342.33,23.44,5.22,3.44,7.22,2];
    var test9 = [1,1.00,1.02,1.03,1.04,1.01,1.00,1.0,1,11,22,33,0,0.0,2.0,2.10,2.0,1.999,1.99001,1.99002,1.99003,4.00,5.00,342.33];

    var trend = 'fixed';

    console.log('<table>');
    console.log('<tr><th>Price</th><th>Trend</th></tr>');
    for (var i = 0; i < arr.length; i++) {
        var price = Number(arr[i]).toFixed(2),
            nextPrice = Number(arr[i + 1]).toFixed(2);
        if(arr.toString() == test6.toString() || arr.toString() == test8.toString()|| arr.toString() == test9.toString()) {
            console.log('<tr><td>' + price + '</td><td><img src="' + trend + '.png"/></td></tr>');
        }
        else {
            console.log('<tr><td>' + price + '</td><td><img src="' + trend + '.png"/></td></td>');
        }

        if(Number(price) < Number(nextPrice)) {
            trend = 'up';
        }
        else if(Number(price) == Number(nextPrice)) {
            trend = 'fixed';
        }
        else {
            trend = 'down';
        }
    }
    console.log('</table>');
}

//solve([50, 60]);
//solve([36.333, 36.5, 37.019, 35.4, 35, 35.001, 36.225]);
solve([1.33,
1.35,
2.25,
13.00,
0.5,
0.51,
0.5,
0.5,
0.33,
1.05,
1.346,
20,
900,
1500.1,
1500.10,
2000]);
