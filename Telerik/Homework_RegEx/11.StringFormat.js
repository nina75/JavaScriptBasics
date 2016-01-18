//Write a function that formats a string using placeholders.
//The function should work with up to 30 placeholders and all types.
function stringFormat(str) {
    var argsLen = arguments.length,
        result = str;
    for (var i = 1; i < argsLen; i++) {
        var regex = new RegExp('\\{' + (i - 1) + '\\}', 'g');
        result = result.replace(regex, arguments[i]);
    }

    return result;
}

var str = stringFormat('Hello {0}!', 'Peter');
console.log(str);

//var frmt = '{0}, {1}, {0} text {2}';
//var str = stringFormat(frmt, 1, 'Pesho', 'Gosho');
//console.log(str);
