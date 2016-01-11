function solve(arr) {
    var a = arr[0] | 0,
        b = arr[1] | 0,
        c = arr[2] | 0,
        d = arr[3] | 0,
        existsEqualSum = false,
        sum;
    if(a == b + c + d) {sum = a; existsEqualSum = true;}
    if(b == a + c + d) {sum = b; existsEqualSum = true;}
    if(c == b + a + d) {sum = c; existsEqualSum = true;}
    if(d == b + c + a) {sum = d; existsEqualSum = true;}
    if(a + b == c + d) {sum = a + b; existsEqualSum = true;}
    if(a + c == b + d) {sum = a + c; existsEqualSum = true;}
    if(a + d == b + c) {sum = a + d; existsEqualSum = true;}
    if(existsEqualSum) {
        console.log('Yes');
        console.log(sum);
    } else {
        console.log('No');
    }
}

solve([
    '1', '2', '1', '1'
]);
