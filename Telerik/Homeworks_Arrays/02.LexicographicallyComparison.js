//Write a script that compares two char arrays lexicographically (letter by letter).

function compare(arr1, arr2) { //returns -1 (if first array is before second), 0 or 1
    var i,
        len1 = arr1.length,
        len2 = arr2.length,
        compareResult;
    for (i = 0; i < len1; i++) {
        compareResult = arr1[i].localeCompare(arr2[i]);
        if(compareResult) {
            return compareResult;
        }
    }

    return len1 < len2 ? -1 : 0;
}

var charArray1 = 'talasama'.split(''),
    charArray2 = 'talasamche'.split('');
    //charArray3 = 'Aodata e studena'.split(''),
    //charArray4 = 'talasam'.split('');
console.log(compare(charArray1, charArray2));