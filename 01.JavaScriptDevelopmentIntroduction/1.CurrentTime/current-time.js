/* Write a JavaScript program current-time.js that prints on the console the current time in UTC format.
   Execute your file through Node.js. A sample output is given below:
    Input	      Output
    -------------------------------------------
    (no input)	  Mon, 09 Mar 2015 12:25:12 GMT
*/

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov', 'Dec'],
    days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var now = new Date();
var weekday = days[now.getDay()],
    day = now.getDate(),
    month = months[now.getMonth()],
    year = now.getFullYear(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds();

var output = weekday + ', ' +
    addZero(day) + ' ' +
    month + ' ' +
    year + ' ' +
    addZero(hours) + ':' +
    addZero(minutes) + ':' +
    addZero(seconds) + ' GMT';
console.log(output);

function addZero(number) {
    return number < 10 ? '0' + number : number;
}

