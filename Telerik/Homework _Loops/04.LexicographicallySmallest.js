//Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.
function findLexSmallestProperty(obj) {
    var smallestProp = 'z';
    for(var prop in obj) {
        if(compareStr(prop, smallestProp) === -1) {
            smallestProp = prop;
        }
    }

    return smallestProp;
}
function compareStr(str1, str2) {
    return str1.localeCompare(str2);
}

console.log(findLexSmallestProperty(document)); //activeElement
console.log(findLexSmallestProperty(window)); //addEventListener
console.log(findLexSmallestProperty(navigator)); //appCodeName