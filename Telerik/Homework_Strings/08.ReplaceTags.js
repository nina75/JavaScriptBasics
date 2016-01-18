/* Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="…">…</a>
   with corresponding tags [URL=…]…/URL].   */

function replaceAnchorTags(html) {
    var regex = /(<a href=").+?(">).+?(<\/a>)/g,
        match,
        result = html;
    while(match = regex.exec(html)) {
        result = result
            .replace(match[1], '[URL=')
            .replace(match[2], ']')
            .replace(match[3], '[/URL]');
    }

    return result;
}

var html = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';
console.log(replaceAnchorTags(html));

