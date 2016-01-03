var firstPlayerSymbol = 'X',
    secondPlayerSymbol = 'O',
    isFirstPlayerTurn = true,
    isGameOver = false,
    positions = [];

function play() {
    var symbol = isFirstPlayerTurn ? firstPlayerSymbol : secondPlayerSymbol,
        element = event.target;

    if (element.innerText == '' && isGameOver === false) {
        element.innerText = symbol;
        positions[element.id] = symbol;
        checkForWinningCombinations();
        if(isGameOver === true || Object.keys(positions).length == 9) {
            if(isGameOver === true) {
                document.getElementById('result').innerText = 'Player ' + symbol + ' win!';
            }
            document.getElementsByTagName('button')[0].style.display = 'block';
        }
    }
    isFirstPlayerTurn = !isFirstPlayerTurn;
}

function checkForWinningCombinations() {
    if (check('a1', 'a2', 'a3') || check('b1', 'b2', 'b3') || check('c1', 'c2', 'c3') ||
        check('a1', 'b1', 'c1') || check('a2', 'b2', 'c2') || check('a3', 'b3', 'c3') ||
        check('a1', 'b2', 'c3') || check('a3', 'b2', 'c1')) {
        isGameOver = true;
    }
}

function check(x, y, z) {
    if(positions[x] == positions[y] && positions[y] == positions[z] && positions[x] != undefined) {
        document.getElementById(x).style.backgroundColor = 'lightgreen';
        document.getElementById(y).style.backgroundColor = 'lightgreen';
        document.getElementById(z).style.backgroundColor = 'lightgreen';
        return true;
    }
    return false;
}