var words = ['fine', 'script', 'bear','list', 'progress', 'fall', 'bread', 'alien', 'bottle', 'cat','cucumber', 'daisy', 'elf','google',
    'head', 'illegal', 'jump', 'kate', 'light', 'mother', 'nose', 'unbelievable', 'perth', 'rose', 'quite', 'slave', 'table', 'vibe', 'watch',
    'xerox', 'external', 'yes', 'zebra', 'wolf', 'word', 'world'];
var suggestion = document.getElementById('suggestions'),
    input = document.getElementById('text');


function matchWord(word, arr) {
    var words = [];
    arr.forEach(function(w){
        if(w.toLowerCase().indexOf(word.toLowerCase()) == 0) {
            words.push(w);
        }
    });

    if(words.length == 0) {
        return '';
    }
    words.sort(function(x, y) {
        if(x.length == y.length) {
            return x > y;
        }

        return x.length - y.length;
    });

    return words[0];
}

function suggest() {
    var text = input.value;
    suggestion.innerText = matchWord(text, words);
}

function complete(e) {
    if(e.keyCode == 13) {
        input.value = suggestion.innerText;
        var li = document.createElement('li');
        li.innerText = input.value;
        document.getElementsByTagName('ul')[0].appendChild(li);
    }
}

document.getElementById('text').addEventListener('keyup', suggest);
document.getElementById('text').addEventListener('keypress', complete);