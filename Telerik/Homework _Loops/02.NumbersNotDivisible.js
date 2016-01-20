//Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time
function printNumbersNotDivisibleBy3And7(from, to) {
    for (var i = from; i <= to; i++) {
        if(i % 3 || i % 7) {
            console.log(i);
        }
    }
}

printNumbersNotDivisibleBy3And7(1, 43);

