/* Write a function that finds all the occurrences of word in a text.
   The search can be case sensitive or case insensitive.
   Use function overloading. */

function findWordOccurrences(str, word, isCaseInsensitive) {
    if(isCaseInsensitive) {
        return str.match(new RegExp('\\b' + word + '\\b', 'gi')).length;
    }
    return str.match(new RegExp('\\b' + word + '\\b', 'g')).length;
}

var text = 'Lorem gosho ipsum Gosho e pich!Gosho and pesho are two unlimited pigs.Pigs names are pesho and gosho.';
console.log(findWordOccurrences(text, 'gosho', true));
console.log(findWordOccurrences(text, 'gosho'));

