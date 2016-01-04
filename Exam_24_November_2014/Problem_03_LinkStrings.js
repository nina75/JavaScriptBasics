function solve(arr) {
    for (var i = 0; i < arr.length; i++) {
        var output = '';
        var row = arr[i].replace(/%20/g, ' ').replace(/\+/g, ' ').replace(/\s+/g, ' '),
            tokens = row.split(/[&\?]/),
            result = {};
            tokens.forEach(function(el) {
                if(el.indexOf('=') != -1) {
                   var params = el.split('='),
                       key = params[0].trim(),
                       value = params[1].trim();
                    if(!result[key]) {
                        result[key] = [value];
                    }
                    else {
                        result[key].push(value);
                    }
                }
            });
         for(var key in result) {
             output += (key + '=[' + result[key].join(', ') + ']');
         }
        console.log(output);
    }
}

solve([
    'foo=%20foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
]);