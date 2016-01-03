function solve(arr) {
    var wordsInText = arr[0].split(/\s+/);
    for (var j = 1, len = arr.length; j < len; j+=1) {
        console.log(matchWord(arr[j]));
    }

    function matchWord(word) {
        var words = [];
        wordsInText.forEach(function(w){
            if(w.toLowerCase().indexOf(word.toLowerCase()) == 0) {
                words.push(w);
            }
        });

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
    're',
    'res',
    'getMEM',
    'get',
    'GeT',
    'GETTER',
    'go',
    'IF',
    'getmem',
    'r',
    'rec'
]);