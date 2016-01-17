//Write a JavaScript function that reverses a string and returns it.
function reverse(str) {
    return str.split('').reverse().join('');

}

console.log(reverse('sample'));