function solve(arr) {
    var regex = /(\d+)/g,
        match,
        numbers = [];
    while(match = regex.exec(arr[0])) {
        var numberToHex = parseInt(match[1]).toString(16).toUpperCase(),
            len = numberToHex.length;
        if(len < 4) {
            for (var i = len; i < 4; i++) {
                numberToHex = '0' + numberToHex;
            }
        }
        numberToHex = '0x' + numberToHex;
        numbers.push(numberToHex);
    }
    console.log(numbers.join('-'));
}

solve(['5tffwj(//*7837xzc2---34rlxXP%$�.']);
solve(['482vMWo(*&^%$213;k!@41341((()&^>><///]42344p;e312']);
solve(['20']);