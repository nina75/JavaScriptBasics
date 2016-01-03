function solve(arr) {
    var bill = Number(arr[0]),
        mood = arr[1],
        tip;
    switch (mood) {
        case 'happy':
            tip = bill * 0.1;
            break;
        case 'married':
            tip = (bill * 0.05) / 100;
            break;
        case 'drunk':
            var percent = (bill * 15) / 100,
                firstDigit = parseInt(percent.toString()[0]);
            tip = Math.pow((bill * 15 / 100), firstDigit);
            break;
        default:
            tip = bill * 0.05;
            break;
    }
    console.log(tip.toFixed(2));
}

solve([120.44, 'happy']);
solve([1230.83, 'drunk']);
solve([716.00, 'bored']);