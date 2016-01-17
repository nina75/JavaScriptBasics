String.prototype.insert = function (index, string) {
    if (index > 0)
        return this.substring(0, index) + string + this.substring(index, this.length);
    else
        return string + this;
};

String.prototype.bind = function(data) {
    var result = String(this),
        regex = /\bdata-bind-([a-z]+)="([a-z]+)"/g,
        match,
        attrPlace,
        contentPlace = this.indexOf('>') + 1;
    while(match = regex.exec(this)) {
        if(match[1] === 'content') {
            result = result.insert(contentPlace, data[match[2]]);
        } else {
            attrPlace = result.indexOf('>');
            result = result.insert(attrPlace, ' ' + match[1] + '="' + data[match[2]] + '"');
        }
    }

    return result;
};

var str = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>';
console.log(str.bind({name: 'Elena', link: 'http://telerikacademy.com'}));

//var str = '<div data-bind-content="name"></div>';
//console.log(str.bind({name: 'Steven'}));