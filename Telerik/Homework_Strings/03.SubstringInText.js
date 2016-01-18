//Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
function countSubstringWithRegEx(substr, text) {
    return text.match(new RegExp(substr,'gi')).length;
}

function countSubstring(substr, text) {
    var count = 0;
    for (var i = 0; i < text.length; i++) {
        if(text.substr(i, substr.length).toLowerCase() === substr.toLowerCase()) {
            count++;
        }
    }
    return count;
}

console.log(countSubstringWithRegEx('in', 'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'));
console.log(countSubstring('in', 'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'));
