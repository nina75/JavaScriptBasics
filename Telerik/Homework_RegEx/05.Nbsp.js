//Write a function that replaces non breaking white-spaces in a text with &nbsp;

function replaceWhiteSpaces(str) {
    return str.replace(/\s/g, '&nbsp;')
}

var text = '<div>Lorem ipsum edno drugo.  </div>';
console.log(replaceWhiteSpaces(text));