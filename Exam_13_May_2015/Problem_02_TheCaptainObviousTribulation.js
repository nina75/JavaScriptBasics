function solve(arr) {
    var regex = /\b([A-Za-z]+)[\s!?.,]+/g,
        firstText = arr[0],
        secondText = arr[1],
        match,
        counter = 0,
        allWords = [],
        hasSentences = false;
    while(match = regex.exec(firstText)) {
        allWords.push(match[1]);
    }
    
    var occurrences = findWordsOccurrence(allWords);
    var repeatedWords = findWordsWithAtLeast3Repeated(occurrences);
    //console.log(repeatedWords);
    if(repeatedWords.length == 0) {
        console.log('No words');
        return;
    }

    var sentences = secondText.match(/.+?[.?!]/g);
    sentences.forEach(function(s) {
        var wordsInS = s
            .split(/[\s.?!]/)
            .filter(function(el){ return el != '';})
            .map(function(el) {return el.toLowerCase();});
        counter = 0;
        repeatedWords.forEach(function(w){
            if(wordsInS.indexOf(w) !== -1) {
                counter++;
            }
        });
        if(counter > 1) {
            console.log(s.trim());
            hasSentences = true;
        }
    });
    
    if(!hasSentences) {
        console.log('No sentences');
    }
    function findWordsOccurrence(wordArr) {
        var result = [],
            wordArrToLowerCase = wordArr.map(function(el) {
                return el.toLowerCase();
            });
        wordArrToLowerCase.forEach(function(word) {
            if(!result[word]) {
                result[word] = 1;
            } else {
                result[word]++;
            }
        });

        return result;
    }
    
    function findWordsWithAtLeast3Repeated(obj) {
        var result = [];
        for(var word in obj) {
            if (obj[word] > 2) {
                result.push(word);
            }
        }
        
        return result;
    }
}

//solve([
//    "Why, why is he so crazy, so so crazy? Why?",
//    "There are no words that you should be matching. You should be careful."
//]);
//
//solve([
//    "Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!",
//    "The captain was walking and he was obvious. He did not know what was going to happen to you in the future. Was he curious? We do not know."
//]);

//solve([
//    'Lorem ipsum dolor sit amet, sale errem nam no, dictas scaevola posidonium id per. Cibo rebum eloquentiam in per, est vide suavitate et? Duo eu nostro dolorum eloquentiam, at mei libris prompta expetendis, ius hinc vero fabulas ad. Duo natum putant voluptatum ei. Vix option offendit erroribus no, his no meis menandri, ne sea cibo choro dicam. Mei agam consul electram at, vel te iisque regione! Brute adversarium consequuntur in ius, ius ex essent meliore. Sea no modus omnesque expetenda, vix ludus ceteros id, per ancillae voluptatum definitionem ea? Id vis tota dicam exerci, mea mollis expetenda ei? Vel no tation partiendo, eu nam dolore pertinax adversarium, ea sea ludus atomorum! Vix option suscipiantur concludaturque id. His elit vitae explicari ne. Duo ut nonumy iisque pertinax, ut meis zril mel?',
//    'Lorem ipsum dolor sit amet, ut accumsan adipisci nam! Has oratio docendi vulputate ei, ut vis vidit ceteros. Vel eu dolor oblique, ea quot unum vel. Sint convenire at his, tempor constituam est ex. Cibo epicuri ne est, per no convenire erroribus patrioque, has te utamur oblique scaevola! No euismod senserit concludaturque has? Ei legere commodo appellantur duo, assum ponderum eu sea, nulla graece no duo? Et erant eirmod propriae his, qui invenire scripserit efficiantur ut. Integre referrentur mea at. At amet ocurreret qui, cum libris possim praesent ea, velit legere viderer an his? Vim quis solet eirmod cu. Saperet perfecto cum eu, dicant ornatus vix ne. Discere euismod detraxit has ex, sea cibo legere adolescens cu, pro eu alii elit. Ex probatus signiferumque vel? Id vix audiam delectus necessitatibus, quod ocurreret disputationi eos cu. Mea eu animal fabellas sensibus, ut sit paulo torquatos! Oratio forensibus ut ius, sed scaevola torquatos definitionem an. Everti option atomorum cu quo, vix tempor postea tincidunt ea, eu viderer aliquid democritum mel. Sed dicta abhorreant contentiones ne, sed laoreet invenire democritum cu! Per laudem sententiae ea! Nam numquam commune vulputate ex. Ridens verear disputando qui eu, per in debitis accusamus consetetur, et nec hinc nostrum evertitur? Id est iuvaret mediocrem, fastidii pertinax consectetuer sit ei, has quaeque eruditi an? Liber abhorreant argumentum nam te, eos in inimicus mnesarchum.'
//
//]);

solve([
    'Using motion triggered cameras located in the Yanachaga National Park in Peru, scientists found significant changes in animal behavior more than three weeks before a magnitude 7 earthquake struck the region in 2011. On a typical day the cameras recorded 5 to 15 animal sightings, but within the 23 day period in the run up to the earthquake, they recorded five or fewer sightings. For the five to seven days immediately before the earthquake, no animal movements were recorded at all an unusual phenomenon in a mountainous rainforest region normally teeming with wildlife.',
    'While science stops short of calling it a sixth sense, wild animals are generally more sensitive than people when it comes to responding to their environment. Humans are generalists, we are not specialized ecologically, she said. We don\'t live in contact with the soil or the ground. We\'ve insulated ourselves into concrete buildings in cities. While there have been reports of people displaying medical symptoms ahead of earthquakes, I think the effect would be negligible. However, I\'m prepared to keep an open mind on that subject.'
]);