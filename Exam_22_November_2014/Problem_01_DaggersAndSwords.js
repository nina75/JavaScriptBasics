function solve(arr) {
    var input = arr.map(function(el) {
            return Math.floor(el);
        }).filter(function(el){
            return el > 10;
        }),
        type,
        application;
    console.log('<table border="1">');
    console.log('<thead>');
    console.log('<tr><th colspan="3">Blades</th></tr>');
    console.log('<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>');
    console.log('</thead>');
    console.log('<tbody>');

    input.forEach(function(n) {
        if(n % 5 == 1) application = 'blade';
        else if(n % 5 == 2) application = 'quite a blade';
        else if(n % 5 == 3) application = 'pants-scraper';
        else if(n % 5 == 4) application = 'frog-butcher';
        else if(n % 5 == 0) application = '*rap-poker';
        if(n > 40)type = 'sword';
        else type = 'dagger';
        console.log('<tr><td>' + n + '</td><td>' + type + '</td><td>' + application + '</td></tr>');
    });

    console.log('</tbody>');
    console.log('</table>');
}

solve([
    '17.8',
    '19.4',
    '13',
    '55.8',
    '126.96541651',
    '3'
]);