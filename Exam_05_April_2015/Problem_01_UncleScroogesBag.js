function solve(arr) {
    var totalCoins = 0, gold, silver, bronze;
    arr.forEach(function(el) {
        var tokens = el.split(' '),
            type = tokens[0],
            value = tokens[1];
        if(type.toLowerCase() === 'coin' && +value === parseInt(value) && Number(value) > 0) {
            totalCoins += +value;
        }
    });
    gold = (totalCoins / 100) | 0;
    silver = ((totalCoins % 100) / 10) | 0;
    bronze = totalCoins % 10;
    console.log('gold : ' + gold);
    console.log('silver : ' + silver);
    console.log('bronze : ' + bronze);
}

//solve(['coin 1','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1']);
//solve(['coin 1', 'coin two', 'coin 5', 'coin 10.50', 'coin 20', 'coin 50', 'coin hundred', 'cigars 1']);
//solve(['coin one', 'coin two', 'coin five', 'coin ten', 'coin twenty', 'coin fifty', 'coin hundred', 'cigars 1']);
solve([
    'cOin 1',
    'Coin 2',
    'coiN 45',
    'coin 100',
    'coIn 29',
    'coin 545',
    'coin hundred',
    'cigars 1'
]);
function isInt(n) {  return  n % 1 === 0;  }