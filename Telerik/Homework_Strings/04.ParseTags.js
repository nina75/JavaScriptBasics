/*You are given a text. Write a function that changes the text in all regions:
    <upcase>text</upcase> to uppercase.
    <lowcase>text</lowcase> to lowercase
    <mixcase>text</mixcase> to mix casing(random)
*/
String.prototype.toMixCase = function() {
    var result = '',
        random, i, len;
    for (i = 0, len = this.length; i < len; i++) {
        random = Math.random() * 10 | 0;
        if(random % 2) {
            result += this[i].toUpperCase();
        } else {
            result += this[i].toLowerCase();
        }
    }

    return result;
};

function parseTags(text) {
    var regex1 = /<mixcase>(.+?)<\/mixcase>/gi,
        regex2 = /<upcase>(.+?)<\/upcase>/gi,
        regex3 = /<lowcase>(.+?)<\/lowcase>/gi,
        result = text,
        match;
    while(match = regex1.exec(result)) {
        result = result.replace(match[1], match[1].toMixCase());

    }
    while(match = regex2.exec(result)) {
        result = result.replace(match[1], match[1].toUpperCase());

    }
    while(match = regex3.exec(result)) {
        result = result.replace(match[1], match[1].toLowerCase());

    }
    result = result
        .replace(/<mixcase>/gi, '')
        .replace(/<\/mixcase>/gi, '')
        .replace(/<upcase>/gi, '')
        .replace(/<\/upcase>/gi, '')
        .replace(/<lowcase>/gi, '')
        .replace(/<\/lowcase>/gi, '');
    console.log(result);
}

parseTags('We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>aNYthing</lowcase> else.');
parseTags('We are <mixcase>living <upcase>wewe</upcase></mixcase> in a <upcase>yellow submarine</upcase>.');