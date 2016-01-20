//Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation
function convertNumberToWord(number) {
    var zeroToTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'],
        twentyToNinety = [0, 0, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if(number >=0 && number < 100) {
        return capitalizeFirstLetter(convertNumbersFrom0to99(number));
    }

    if(!(number % 100)) {
        return capitalizeFirstLetter(zeroToTwenty[number / 100] + ' hundred');
    } else {
        return capitalizeFirstLetter(zeroToTwenty[(number / 100) | 0] + ' hundred and ' + convertNumbersFrom0to99(number % 100));
    }

    function convertNumbersFrom0to99(number) {
        if(number >=0 && number <= 20 ) {
            return zeroToTwenty[number];
        }
        if(number > 20 && number < 100) {
            if(!(number % 10)) {
                return twentyToNinety[number / 10];
            } else {
                return twentyToNinety[(number / 10) | 0] + ' ' + zeroToTwenty[number % 10];
            }
        }
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(convertNumberToWord(0));
console.log(convertNumberToWord(9));
console.log(convertNumberToWord(10));
console.log(convertNumberToWord(12));
console.log(convertNumberToWord(19));
console.log(convertNumberToWord(30));
console.log(convertNumberToWord(25));
console.log(convertNumberToWord(98));
console.log(convertNumberToWord(273));
console.log(convertNumberToWord(400));
console.log(convertNumberToWord(501));
console.log(convertNumberToWord(617));
console.log(convertNumberToWord(711));
console.log(convertNumberToWord(999));