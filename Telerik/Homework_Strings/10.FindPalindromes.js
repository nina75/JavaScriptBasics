//Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".
function extractPalindromes(text) {
    var regex = new RegExp(buildRegex(22), 'g');
    //var regex = /\b(\w)?(\w)?(\w)\w?\3\2\1\b/g;
    console.log(regex);
    return text.match(regex);
}

function buildRegex(wordLen) {
    var regex = '',
        groupsCount,
        i;
    wordLen = wordLen || 21;
    if(!(wordLen % 2)) {
        wordLen++;
        console.log(wordLen);
    }
    groupsCount = Math.round(wordLen / 2) - 1;
    regex += '\\b';
    for (i = 0; i < groupsCount - 1; i++) {
        regex += '(\\w)\?';
    }
    regex += '(\\w)\\w\?';
    for (i = groupsCount; i > 0; i--) {
        regex += ('\\' + i);
    }
    regex += '\\b';
    return regex;
}

var text = 'Write a program that akapaka abcdeftruiypyiurtfedcba   from aa given text all palindromes, e.g. "ABBA", "lamal", "exe".';
console.log(extractPalindromes(text));