function solve(arr) {
    var queries = arr.map(function(q) {
        return q.replace(/%20|\+/g,' ').replace(/\s+/g,' ')
    });

    queries.forEach(function(q) {
        var params = q.split(/[&\?]/),
            result = {},
            output = '';
        params.forEach(function(p) {
            if(p.indexOf('=') != -1) {
                var tokens = p.split('='),
                    index = tokens[0].trim(),
                    value = tokens[1].trim();
                if(result[index]) {
                    result[index].push(value);
                }
                else {
                    result[index] = [value];
                }
            }
        });
        for(var index in result) {
            output += (index + '=[' + result[index].join(', ') + ']');
        }
        console.log(output);
    });
}

solve([
    'foo=%20foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
]);