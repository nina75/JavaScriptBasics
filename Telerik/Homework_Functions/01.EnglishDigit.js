//Write a function that returns the last digit of given integer as an English word.
function getLastDigitAsWord(number) {
    var digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    if(!isNaN(number)) {
        return digits[number % 10];
    }
    return 'Incorrect number';
}

console.log(getLastDigitAsWord('512'));
console.log(getLastDigitAsWord(1024));
console.log(getLastDigitAsWord(12039));