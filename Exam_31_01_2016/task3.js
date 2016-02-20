function solve(arr) {
    var bannedUsers = arr[arr.length - 1].split(' ');
    var text = arr.slice(0, arr.length - 1).join('\n');
    var inCodeTags = [];
    var match,match1,match3,
        regex = /\b(#[A-z][-\w]+[A-z0-9])[!.:?,]?\b]/g,
        regex2 = /<code>([\w\W\n]*?)<\/code>/g;
    while(match1 = regex2.exec(text)) {
        inCodeTags.push (match1[1].trim());
    }
    //console.log(inCodeTags);

    while(match = regex.exec(text)) {
        console.log(match);
        bannedUsers.forEach(function(banned) {
            var regex1 = new RegExp(match[0],'g'),
                userName = match[0].substring(1);
            if(userName !== banned) {
                text = text.replace(regex1,'<a href="/users/profile/show/'+ userName +'">' + userName + '</a>')
            } else {
                text = text.replace(regex1, Array(banned.length + 1).join('*'));
            }
        });
    }
   //console.log(text);
    var counter = 0;
    while(match3 = regex2.exec(text)) {
        text = text.replace(match3[1].trim(), inCodeTags[counter]);
        counter++;
    }
    //console.log(text);
}

solve([
    '#RoYaL: I\'m not sure what you mean,',
    'but I am confident that I\'ve written',
    'everything correctly. Ask #iordan_93',
    'and #pesho if you don\'t believe me',
    '<code>',
    '#trying to print stuff',
    'print("yoo")',
    '</code>',
    'pesho gosho'
]);
