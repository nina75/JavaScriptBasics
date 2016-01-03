function buildTable(arr) {
    var start = parseInt(arr[0]),
        end = parseInt(arr[1]);

    console.log('<table>');
    console.log('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
    for(var i = start; i <= end; i++) {
        console.log('<tr><td>' + i + '</td><td>' + i * i + '</td><td>' + (isFibonacciNumber(i) ? 'yes' : 'no') + '</td></tr>');
    }

    console.log('</table>');

    function isFibonacciNumber(number) {
        var case1 = Math.sqrt(5 * number * number + 4),
            case2 = Math.sqrt(5 * number * number - 4);
        if(Math.round(case1) === case1 || Math.round(case2) === case2) {
            return true;
        }
        return false;
    }
}

buildTable([55, 56]);