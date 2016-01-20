//Sort 3 real values in descending order.
//Use nested if statements.

function sortNumbers(a, b, c) {
    var min, middle, max;
    if(a > b) {
       if(a > c) {
           max = a;
           if(b > c) {
               middle = b;
               min = c;
           } else {
               middle = c;
               min = b;
           }
       } else {
           max = c;
           middle = a;
           min = b;
       }
    } else {
        if(b < c) {
            max = c;
            middle = b;
            min = a;
        } else {
            max = b;
            if(a > c) {
                middle = a;
                min = c;
            } else {
                middle = c;
                min = a;
            }
        }
    }


    return max + ' ' + middle + ' ' + min;
}

console.log(sortNumbers(5, 1, 2));
console.log(sortNumbers(-2, -2, 1));
console.log(sortNumbers(-2, 4, 3));
console.log(sortNumbers(0, -2.5, 5));
console.log(sortNumbers(-1.1, -0.5, -0.1));
console.log(sortNumbers(10, 20, 30));
console.log(sortNumbers(1, 1, 1));