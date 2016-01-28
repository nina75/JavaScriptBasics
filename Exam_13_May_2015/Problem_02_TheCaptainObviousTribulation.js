function solve(arr) {
    //find all words and then fill an object with word's occurrences
    var allWords = arr[0]
        .match(/\b[A-z]+\b/g)
        .reduce(function(obj, word) {
            if(!obj[word.toLowerCase()]) obj[word.toLowerCase()] = 1;
            else obj[word.toLowerCase()]++;
            return obj;
        }, {});

    //find words repeated at least three times
    var repeatedWords = [];
    for(var word in allWords) {
        if(allWords[word] > 2) {
            repeatedWords.push(word);
        }
    }
    if(repeatedWords.length === 0) {
        console.log('No words');
        return;
    }

    //find all sentences
    var sentences= [],
        regex =  /\s*(.+?[.?!])/g,
        match;
    while(match = regex.exec(arr[1])) {
        sentences.push(match[1]);
    }

    //find and print all sentences containing at least two words from repeatedWords
    var hasSentence = false;
    sentences.forEach(function(sentence){
        var count = 0;
        repeatedWords.forEach(function(word) {
            if(sentence.match(new RegExp('\\b' + word + '\\b', 'i'))){
                count++;
            }
        });
        if(count > 1) {
            console.log(sentence);
            hasSentence = true;
        }
    });

    //if no sentences
    if(!hasSentence) {
        console.log('No sentences');
    }
}

solve(["Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!",
        "The captain was walking and he was obvious. He did not know what was going to happen to you in the future. Was he curious? We do not know."]
);