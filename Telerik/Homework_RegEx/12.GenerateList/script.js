function generateList(data, template) {
    var regex,
        match,
        tag,
        html = '',
        tags = {};
    if(!Array.isArray(data)) {
        data = [data];
    }
    regex = /<([a-z]+)>-\{(\w+)\}-<\/\1>/g;

    while(match = regex.exec(template)) {
        tags[match[1]] = match[2];
    }

    html += '<ul>';
    data.forEach(function(obj) {
        html += '<li>';
        for(tag in tags) {
            html += '<' + tag + '>' + obj[tags[tag]] + '</' + tag + '>';
        }
        html += '</li>';
    });
    html += '</ul>';

    return html;
}

function renderList() {
    var people = [{name: 'Peter', age: 14}, {name: 'Gosho', age: 22}, {name: 'Minka', age: 28}, {name: 'Gergana', age: 48}];
    var template = document.getElementById('list-item').innerHTML;
    var peopleList = generateList(people, template);
    document.getElementById('list').innerHTML =peopleList;
}