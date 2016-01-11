function solve(arr) {
    String.prototype.insertAt=function(index, string) {
        return this.substr(0, index) + string + this.substr(index);
    }
    String.prototype.replaceAt=function(index, character) {
        return this.substr(0, index) + character + this.substr(index+character.length);
    }
    var words = arr[0].split(/\s+/),
        sequence = '',
        len = findLongestWordLength(words),
        letters = ['pesho','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o' , 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (var k = 1; k <= len; k++) {
        for (var i = 0; i < words.length; i++) {
            var lastLetter = words[i][words[i].length - k];
            if(lastLetter != undefined) {
                sequence += lastLetter;
            }
        }
    }
    var seqLen = sequence.length;

    for (var j = 0; j < seqLen; j++) {
        var currentLetter = sequence[j],
            numberMoves = letters.indexOf(currentLetter.toLowerCase()),
            newPosition = numberMoves % seqLen + j + 1;
        if(newPosition > seqLen) {
            newPosition = newPosition % seqLen - 1;
        }

        sequence = sequence.insertAt(newPosition, currentLetter);
        if(newPosition >= j) {
            sequence = sequence.replaceAt(j, '*');
        } else {
            sequence = sequence.replaceAt(j + 1, '*');
        }
        sequence = sequence.replace('*', '');
    }

    function findLongestWordLength(arr) {
        var sortedArr = arr.slice().sort(function(x, y) {//това е бавно, ама като за изпит става
           return y.length - x.length;
        });
        return sortedArr[0].length;
    }
    console.log(sequence);
}

//solve([
//    'Fun exam right'
//]);
solve([
    'Hi exam'
]);