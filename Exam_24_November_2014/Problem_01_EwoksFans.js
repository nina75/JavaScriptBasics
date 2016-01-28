function solve(arr) {
    var fans = [],
        haters = [],
        middleBound = new Date(1973,4, 25),
        topBound = new Date(2015, 0, 1),
        bottomBound = new Date(1900, 0, 1);
    arr.forEach(function(el) {
        var day = el.substr(0,2),
            month = el.substr(3, 2),
            year = el.substr(6, 4),
            date = new Date(year, month - 1, day);
        if(date >= middleBound && date < topBound) {
            fans.push(date);
        }
        else if(date < middleBound && date > bottomBound){
            haters.push(date);
        }
    });
    fans.sort(function(x, y) {
        return x < y ? (x == y ? 0 : 1) : -1;
    });

    haters.sort(function(x, y) {
        return x > y ? (x == y ? 0 : 1) : -1;
    });
    if(fans.length > 0) {
        console.log('The biggest fan of ewoks was born on '+ fans[0].toDateString());
    }
    if(haters.length > 0) {
        console.log('The biggest hater of ewoks was born on ' + haters[0].toDateString());
    }
    if(fans.length == 0 && haters.length == 0) {
        console.log('No result');
    }
    //haters.forEach(function(el) {
    //    console.log(el.toDateString());
    //});
}
function solve(arr) {
    var fans = [],
        haters = [],
        hasData = false;
    arr.forEach(function(el){
        var date = parseDateStr(el);
        if(date > parseDateStr('01.01.1900') && date < parseDateStr('01.01.2015')) {
            if(date < parseDateStr('25.05.1973')) {
                haters.push(date);
            } else {
                fans.push(date);
            }
        }
    });
    if(fans.length > 0) {
        fans.sort(function(x, y){
            return y - x;
        });
        hasData = true;
        console.log('The biggest fan of ewoks was born on ' + fans[0].toDateString());
    }
    if(haters.length > 0) {
        haters.sort(function(x, y){
            return x - y;
        });
        hasData = true;
        console.log('The biggest hater of ewoks was born on ' + haters[0].toDateString());
    }
    if(!hasData) {
        console.log('No result');
    }
    function parseDateStr(dateStr) {
        var parts = dateStr .split('.'),
            day = +parts[0],
            month = +parts[1],
            year = +parts[2];

        return new Date(year, month - 1, day);
    }
}
//solve([
//    '22.03.2014',
//    '17.05.1933',
//    '10.10.1954'
//]);

solve([
    '27.06.1926',
    '01.08.1985',
    '20.10.1949',
    '16.05.2004',
    '10.12.2022',
    '27.12.1974',
    '20.09.1896',
    '06.09.1949',
    '20.07.1933',
    '23.05.2014',
    '27.10.1926',
    '15.12.2027',
    '26.01.1947',
    '03.09.1869',
    '05.05.1983',
    '15.09.1970',
    '03.02.1852',
    '08.09.1974',
    '14.02.1942',
    '21.02.1917',
    '02.11.2010',
    '01.06.2042',
    '04.02.1946',
    '17.01.2044',
    '02.07.1897',
    '25.01.1983',
    '21.07.1925',
    '28.02.1997',
    '25.05.1990',
    '09.07.1875',
    '23.09.1861',
    '09.04.1978',
    '23.02.1937',
    '22.03.1869',
    '22.01.1883',
    '07.06.1874',
    '18.03.1856',
    '28.05.2047',
    '05.12.2015',
    '14.03.1995',
    '07.02.1954',
    '27.07.1911',
    '22.07.1874',
    '03.05.2036',
    '15.01.1918',
    '06.08.1904',
    '26.02.1947',
    '10.04.1984',
    '11.01.1922',
    '15.02.1935',
    '15.11.1884',
    '13.01.2003',
    '11.09.1914'
]);
