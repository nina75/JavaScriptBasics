function solve(arr) {
    var matrixRowsCols = arr[0].split(' '),
        r = matrixRowsCols[0] | 0,
        c = matrixRowsCols[1] | 0,
        directions = [],
        sums = [],
        i, j, start, row = 0, col = 0, sum = 0;

    //fill a matrix with directions
    arr.slice(1).forEach(function(el) {
        directions.push(el.split(' '));
    });

    //fill a matrix with sums
    for (i = 0;  i < r ; i += 1) {
        start = findPow(i);
        sums[i] = [start];
        for (j = 1; j < c; j += 1) {
            sums[i].push(++start);
        }
    }
    
    //find sum
    while(true) {
        sum += sums[row][col];
        sums[row][col] = 'visited';
        move(directions[row][col]);
        if(row < 0 || row > r - 1 || col < 0 || col > c - 1) {
            console.log('successed with ' + sum);
            break;
        }
        if(sums[row][col] == 'visited') {
            console.log('failed at (' + row + ', ' + col + ')');
            break;
        }
    }

    function move(direction) {
        switch (direction) {
            case 'dr':
                row++;
                col++;
                break;
            case 'ur':
                row--;
                col++;
                break;
            case 'ul':
                row--;
                col--;
                break;
            case 'dl':
                row++;
                col--;
                break;
        }
    }

    function findPow(pow) {
        var result = 1,
            i;
        for (i = 0; i < pow; i += 1) {
            result = result << 1;
        }
        return result;
    }
}

solve([
        '3 5',
        'dr dl dr ur ul',
        'dr dr ul ur ur',
        'dl dr ur dl ur'
]);