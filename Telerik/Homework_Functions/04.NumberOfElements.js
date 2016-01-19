//Write a function to count the number of div elements on the web page
function countDivs(html) {
    return html.match(/<div.*?>/g).length;
}

//test in browser console
var html = document.getElementsByTagName('body')[0].innerHTML;
console.log(countDivs(html));