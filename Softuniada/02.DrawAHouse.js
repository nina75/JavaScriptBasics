function solve(arr) {
    var n = arr[0] | 0;
    console.log(drawSymbol('.', n - 1) + '*' + drawSymbol('.', n - 1));

    for (var i = 1; i < n - 1; i++) {
        var row = '';
            row += drawSymbol('.', n - i - 1);
            row += '*';
            row += drawSymbol(' ', 2 * i - 1);
            row += '*';
            row += drawSymbol('.', n - i - 1);
        console.log(row);
    }

    console.log(new Array(n + 1).join('* '));
    console.log('+' + drawSymbol('-', 2 * n - 3) + '+');
    for (var j = 0; j < n - 2; j++) {
        console.log('|' + drawSymbol(' ', 2 * n - 3) + '|');
    }
    
    console.log('+' + drawSymbol('-', 2 * n - 3) + '+');
    function drawSymbol(symbol, count) {
        return new Array(count + 1).join(symbol);
    }
    
}

solve([
    '6'
]);