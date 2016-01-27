function solve(arr) {
    var figuresOccurrence = {"I":0,"L":0,"J":0,"O":0,"Z":0,"S":0,"T":0},
        matrix = [];

    for (var i = 0; i < arr.length; i++) {
        var row = arr[i].split('');
        matrix.push(row);
    }
    
    for (var row = 0; row < arr.length; row++) {
        for (var col = 0; col < arr[row].length; col++) {
            if(isI(row, col)) figuresOccurrence['I']++;
            if(isL(row, col)) figuresOccurrence['L']++;
            if(isJ(row, col)) figuresOccurrence['J']++;
            if(isO(row, col)) figuresOccurrence['O']++;
            if(isZ(row, col)) figuresOccurrence['Z']++;
            if(isS(row, col)) figuresOccurrence['S']++;
            if(isT(row, col)) figuresOccurrence['T']++;
        }
    }
    console.log(JSON.stringify(figuresOccurrence));
    
    function isI(row, col) {
        return arr[row + 3] != undefined && isThreeVertical(row, col) && arr[row + 3][col] == 'o';
    }

    function isL(row, col) {
        return arr[row + 2] != undefined && isThreeVertical(row, col) && arr[row + 2][col + 1] == 'o';
    }
    
    function isJ(row, col) {
        return arr[row] != undefined && isThreeVertical(row, col) && arr[row + 2][col - 1] == 'o';
    }
   
    function isO(row, col) {
        return arr[row + 1] != undefined && isTwoHorizontal(row, col) && isTwoHorizontal(row + 1, col);
    }
    
    function isZ(row, col) {
        return arr[row + 1] != undefined && isTwoHorizontal(row, col) && isTwoHorizontal(row + 1, col + 1);
    }
    
    function isS(row, col) {
        return arr[row + 1] != undefined && isTwoHorizontal(row, col) && isTwoHorizontal(row + 1, col - 1);
    }
    
    function isT(row, col) {
        return arr[row + 1] != undefined && isTwoHorizontal(row, col) && arr[row][col + 2] == 'o' && arr[row + 1][col + 1] == 'o';
    }

    function isTwoHorizontal(row, col) {
        return arr[row][col] == 'o' && arr[row][col + 1] == 'o';
    }

    function isThreeVertical (row, col) {
        return arr[row + 1] != undefined && arr[row + 2] != undefined &&
            arr[row][col] == 'o' && arr[row + 1][col] == 'o' && arr[row + 2][col] == 'o';
    }

}
function solve(arr) {
    var result = {"I":0,"L":0,"J":0,"O":0,"Z":0,"S":0,"T":0},
        len = arr.length,
        rowLen = arr[0].length;
    for (var i = 0; i < len - 1; i += 1) {
        for (var j = 0; j < rowLen; j += 1) {
                if(arr[i][j] === 'o') {
                    //is L
                    if(typeof arr[i + 2] != 'undefined' &&
                         arr[i][j] === arr[i + 1][j] &&
                         arr[i][j] === arr[i + 2][j] &&
                         arr[i][j] === arr[i + 2][j + 1]) {
                        result.L++;
                    }
                    //isJ
                    if(typeof arr[i + 2] != 'undefined' &&
                        arr[i][j] === arr[i + 1][j] &&
                        arr[i][j] === arr[i + 2][j] &&
                        arr[i][j] === arr[i + 2][j - 1]) {
                        result.J++;
                    }
                    //isO
                    if( arr[i][j] === arr[i][j + 1] &&
                        arr[i][j] === arr[i + 1][j] &&
                        arr[i][j] === arr[i + 1][j + 1]) {
                        result.O++;
                    }
                    //isI
                    if( typeof arr[i + 2] != 'undefined' &&
                        typeof arr[i + 3] != 'undefined' &&
                        arr[i][j] === arr[i + 1][j] &&
                        arr[i][j] === arr[i + 2][j] &&
                        arr[i][j] === arr[i + 3][j]) {
                        result.I++;
                    }
                    //isZ
                    if( arr[i][j] === arr[i][j + 1] &&
                        arr[i][j] === arr[i + 1][j + 1] &&
                        arr[i][j] === arr[i + 1][j + 2]) {
                        result.Z++;
                    }
                    //isS
                    if( arr[i][j] === arr[i][j - 1] &&
                        arr[i][j] === arr[i + 1][j - 1] &&
                        arr[i][j] === arr[i + 1][j - 2]) {
                        result.S++;
                    }
                    //isT
                    if( arr[i][j] === arr[i][j + 1] &&
                        arr[i][j] === arr[i][j - 1] &&
                        arr[i][j] === arr[i + 1][j]) {
                        result.T++;
                    }
                }
            }
    }
    console.log(JSON.stringify(result));
}
solve([
    '--o--o-',
    '--oo-oo',
    'ooo-oo-',
    '-ooooo-',
    '---oo--'
]);
solve([
    '-oo',
    'ooo',
    'ooo'
]);
