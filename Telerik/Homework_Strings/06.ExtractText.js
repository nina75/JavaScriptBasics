//Write a function that extracts the content of a html page given as text.
//The function should return anything that is in a tag, without the tags.

function extractContent(text) {
    var regex = /(<\/?[a-z]+>)/g;
    return text.replace(regex, '');
}

var html = 
    '<html>' +
    '<head>' +
        '<title>Sample site</title>' +
    '</head>' +
    '<body>' +
        '<div>text' +
            '<div>more text</div>' +
            'and more...' +
        '</div>' +
        'in body' +
    '</body>' +
    '</html>';
console.log(extractContent(html));