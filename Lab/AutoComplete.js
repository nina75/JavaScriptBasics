function solve(arr) {
    var text = arr[0];
    for (var j = 1, len = arr.length; j < len; j+=1) {
        console.log(matchWord(arr[j]));
    }

    function matchWord(word) {
        var words = [];
        var regex = new RegExp('\\b(' + word + '.*?)([\\s]|$)','gi'),
            match;
        while(match = regex.exec(text)) {
            words.push(match[1]);
        }
        if(words.length == 0) {
            return '-';
        }
        words.sort(function(x, y) {
            if(x.length == y.length) {
                return x > y;
            }

            return x.length - y.length;
        });

        return words[0];
    }
}

//solve([
//    'word screammm screech speech wolf',
//    'bas',
//    'wo',
//    'scr',
//    's'
//]);

solve([
    'GET POST if getMemory reset rebuild recap resit',
    'r',
    'goat'
]);