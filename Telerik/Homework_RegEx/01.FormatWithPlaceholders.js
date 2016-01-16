String.prototype.format = function(options) {
    var result = String(this),
        regex;
    for(var prop in options) {
        regex = new RegExp('#{' + prop + '}', 'g');
        if(options.hasOwnProperty(prop)) {
            result = result.replace(regex, options[prop]);
        }
    }
    return result;
};

//var options = {name: 'John'};
//console.log('Hello, there! Are you #{name}?'.format(options));

var options = {name: 'John', age: 13};
console.log('My name is #{name} and I am #{age}-years-old'.format(options));