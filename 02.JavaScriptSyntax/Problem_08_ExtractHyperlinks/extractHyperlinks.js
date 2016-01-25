function extractHyperlinks(arr) {
    var html = arr.join('\n');
    var regex = /<a\s+([^>]+\s+)?href\s*=\s*('([^']*)'|"([^"]*)|([^\s>]+))[^>]*/g;
    var match;
    while(match = regex.exec(html)) {
        var href = match[3];
        if(href == undefined) {
            href = match[4];
        }
        if(href == undefined) {
            href = match[5];
        }
        console.log(href);
    }
}
function solve(arr) {
    var html = arr.join('\n');
    var regex = /<a[^>]*href\s*=\s*([^>]+?)>(.|\n)*?<\/a>/g,
        match,
        hrefs = [];
    while(match = regex.exec(html)){
        hrefs.push(match[1]);
    }
    
    hrefs.forEach(function(el) {
        var regex1 = /^(["'])(.+?)\1/;
        if(regex1.test(el)) {
            console.log(el.match(regex1)[2]);
        } else {
            console.log(el.match(/(^[^'"].+?)\s/)[1]);
        }
    })
}

extractHyperlinks([
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '<title>Hyperlinks</title>',
    '<link href="theme.css" rel="stylesheet" />',
    '</head>',
    '<body>',
    '<ul><li><a   href="/"  id="home">Home</a></li><li><a',
    'class="selected" href=/courses>Courses</a>',
    '</li><li><a href =',
    '    \'/forum\' >Forum</a></li><li><a class="href"',
    'onclick="go()" href= "#">Forum</a></li>',
    '<li><a id="js" href =',
    '    "javascript:alert(\'hi yo\')" class="new">click</a></li>',
    '<li><a id=\'nakov\' href =',
    '    http://www.nakov.com class=\'new\'>nak</a></li></ul>',
    '<a href="#empty"></a>',
    '<a id="href">href=\'fake\'<img src=\'http://abv.bg/i.gif',
    'alt=\'abv\'/></a><a href="#">&lt;a href=\'hello\'&gt;</a>',
    '<!-- This code is commented:',
    '    <a href="#commented">commentex hyperlink</a> -->',
    '</body>'
]);