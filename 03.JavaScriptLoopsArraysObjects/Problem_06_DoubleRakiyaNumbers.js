function solve(arr) {
    var start = parseInt(arr[0]),
        end = parseInt(arr[1]);

    function isRakiyaNum(number) {
        if(number < 10) {
            return false;
        }
        var numberAsStr = number.toString();
        for (var i = 0; i < numberAsStr.length - 2; i++) {
            for (var j = i + 2; j < numberAsStr.length - 1; j++) {
                if(numberAsStr[i] == numberAsStr[j] && numberAsStr[i + 1] == numberAsStr[j + 1]) {
                    return true;
                }
            }
        }
        return false;
    }

    console.log('<ul>');
    for (var i = start; i <= end; i++) {
        if(isRakiyaNum(i)) {
            console.log('<li><span class=\'rakiya\'>' + i + '</span><a href="view.php?id=' + i + '>View</a></li>');
        }
        else {
            console.log('<li><span class=\'num\'>' + i + '</span></li>');
        }
    }
    console.log('</ul>');
}
solve([5, 8]);
solve([11210, 11215]);
solve([55555, 55560]);

/*01234567
  12584127
  12 58 84 41 12 27

    s[0]s[1]    s[1]s[2]   s[2]s[3]  s[3]s[4]  s[4]s[5]

    s[2]s[3]    s[3]s[4]   s[4]s[5]  s[5]s[6]  s[6]s[7]
    s[3]s[4]	s[4]s[5]   s[5]s[6]  s[6]s[7]
    s[4]s[5]    s[5]s[6]   s[6]s[7]
    s[5]s[6]	s[6]s[7]
    s[6]s[7]

for(i=0 < len - 2)
    for (j = i+2 <len-1)
        if(s[i]s[i+1] == s[j]s[j+1]) return true */
