function sortLetters(string, boolean) {
    var stringToArr = string.split('');
    stringToArr.sort(function(x, y){
        return boolean ? x.toLowerCase() > y.toLowerCase() : x.toLowerCase() < y.toLowerCase();
    });
    console.log(stringToArr.join(''));
}

sortLetters('HelloWorld', true);
sortLetters('HelloWorld', false);