//Write a JavaScript function to check if in a given expression the brackets are put correctly.
function checkAreBracketsCorrect(expression) {
    var brackets = [],
        i, len, count  = 0;
    for (i = 0, len = expression.length; i < len; i += 1) {
        if(expression[i] === '(') {
            brackets.push(expression[i]);
            count++;
        } else if(expression[i] === ')'){
            brackets.pop();
            count--;
        }
    }
    return count === 0 && brackets.length === 0;
}

console.log(checkAreBracketsCorrect('((a+b)/5-d)'));
console.log(checkAreBracketsCorrect(')(a+b))'));