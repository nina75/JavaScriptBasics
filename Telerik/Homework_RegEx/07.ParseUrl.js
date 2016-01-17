/* Write a script that parses an URL address given in the format: 
   [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
   Return the elements in a JSON object.
*/

function parseUrl(url) {
    var regex = /([a-z]+):\/\/(\w+\.\w+)(\/[A-z/0-9]+)/,
        matches = url.match(regex);
    return {
        protocol: matches[1],
        server: matches[2],
        recourse: matches[3]
    };
}

var url = 'http://telerikacademy.com/Courses/Courses/Details/239';
console.log(parseUrl(url));