//Write an expression that checks if given positive integer number n (n ? 100) is prime.
function isPrime(number) {
    if(number < 2) {
        return false;
    }
    for (var i = 2; i <= (Math.sqrt(number) | 0); i++) {
        if(!(number % i)) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(9));
console.log(isPrime(37));
console.log(isPrime(97));
console.log(isPrime(51));
console.log(isPrime(-3));
console.log(isPrime(0));