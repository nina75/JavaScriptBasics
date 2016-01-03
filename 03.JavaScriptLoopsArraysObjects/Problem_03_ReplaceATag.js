/* Write a JavaScript function replaceATag(str) that replaces in a HTML document given as string all the tags <a href="…">…</a>
with corresponding tags [URL=…]…/URL].
Write JS program aTagReplacer.js that invokes your function with the sample input data below and prints the output at the console. */

function aTagReplacer(html) {
    var regex = /(<a)\s+.*href\s*=.*?(<\/a>)/g,
        match,
        replacedHtml;
    
    while(match = regex.exec(html)) {
        var openingTag = match[1],
            closingTag = match[2];
        html = html.replace(openingTag,'[URL]');
        html = html.replace(closingTag, '[\\URL]')
    }
    console.log(html);
}

aTagReplacer(
    '<ul>' + '\n' +
    ' <li>' +  '\n' +
    '  <a href=http://softuni.bg>SoftUni</a>' +  '\n' +
    '  <a href=http://softuni.bg>SoftUni</a>' +  '\n' +
    '  <a href=http://softuni.bg>SoftUni</a>' +  '\n' +
    ' </li>' + '\n' +
    '</ul>'
);