function solve(arr) {
    var directions = arr[0].split(/, /),
        matrix = [],
        countOfLettuce = 0,
        countOfCabbage = 0,
        countOfTurnip = 0,
        countOfCarrots = 0,
        countOfWallHits = 0,
        currentRow = 0,
        currentCol = 0,
        pasted = [],
        output = [],
        matrixRowLength = arr[1].split(/, /).length;

    for (var i = 1; i < arr.length; i++) {
        matrix[i - 1] = arr[i].split(/, /);
    }

    for (var i = 0; i < directions.length; i++) {
        move(directions[i]);
    }

    function move(direction) {
        var hasMoving = false;
        switch (direction) {
            case 'up':
                if(currentRow - 1 >= 0) {
                    currentRow--;
                    hasMoving = true;
                }
                break;
            case 'left':
                if(currentCol - 1 >= 0) {
                    currentCol--;
                    hasMoving = true;
                }
                break;
            case 'right':
                if(currentCol + 1 <= matrixRowLength - 1) {
                    currentCol++;
                    hasMoving = true;
                }
                break;
            case 'down':
                if(currentRow + 1 <= matrix.length - 1) {
                    currentRow++;
                    hasMoving = true;
                }
                break;
            default: break;
        }
        if(hasMoving) {
            pasted.push(matrix[currentRow][currentCol]);
        } else {
            countOfWallHits++;
        }
    }

    if(pasted.length === 0) {
        output = ['no'];
    } else {
        pasted.forEach(function(el) {
            var turnip = el.match(/{#}/g);
            if(turnip !== null) {
                countOfTurnip += turnip.length;
            }
            var carrot = el.match(/{!}/g);
            if(carrot !== null) {
                countOfCarrots += carrot.length;
            }
            var cabbage = el.match(/{\*}/g);
            if(cabbage != null) {
                countOfCabbage += cabbage.length;
            }
            var lettuce = el.match(/{&}/g)
            if(lettuce !== null) {
                countOfLettuce += lettuce.length;
            }
            var food = el.replace(/{\*}/g, '@').replace(/{#}/g, '@').replace(/{!}/g, '@').replace(/{&}/g, '@');
            output.push(food);
        })
    }

    console.log('{"&":' + countOfLettuce + ',"*":' + countOfCabbage+ ',"#":' + countOfTurnip + ',"!":'  +countOfCarrots + ',"wall hits":'+ countOfWallHits +'}');
    console.log(output.join('|'));
}

solve([
    'right, up, up, down',
    'asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj',
    'tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip',
    'poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne'
]);

solve([
    'up, right, left, down',
    'as{!}xnk'
]);