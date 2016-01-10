function solve(arr) {
    var words = arr[0].match(/[A-Za-z]+/g),
        len,
        cognateWords = [],
        hasCognateWords = false;
    if(words == null) {
        console.log('No');
        return;
    }
    len = words.length;
       
    for (var i = 0; i < len; i++) {
        for (var j = 0; j <len; j++) {
            for (var k = 0; k < len; k++) {
                if(i !== j && i !== k && j !== k) {
                    if(words[i] == words[j] + words[k]) {
                        hasCognateWords = true;
                        if(cognateWords.indexOf(words[j] + '|' + words[k] + '=' + words[i]) === -1) {
                            cognateWords.push(words[j] + '|' + words[k] + '=' + words[i]);
                        }
                    }
                }
            }
        }
    }
    if(hasCognateWords) {
        console.log(cognateWords.join('\n'));
    } else {
        console.log('No');
    }
    
}

solve([
    'a a aa a'
]);

