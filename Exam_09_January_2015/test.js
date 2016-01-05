var obj = {
    gogo: {
        gashti: {kg: 2, transport: 'кола'},
        potnici: {kg: 3,transport: 'влак'},
        chorapi: {kg: 1,transport: 'каруца'}
    },
    petruna: {
        gashti: {kg: 1, transport: 'кола'},
        potnici: {kg: 17,transport: 'влак'},
        rakia: {kg: 58,transport: 'traktor'},
        chorapi: {kg: 2,transport: 'каруца'}
    },
    ifak: {
        bikini: {kg: 1, transport: 'кола'},
        gashti: {kg: 4, transport: 'кола'},
        potnici: {kg: 3,transport: 'влак'}
    }
};

//sort by kg - гадното
var sortedObj = {};
Object.keys(obj).forEach(function(personName) {
    sortedObj[personName] = {};
    var takumi = Object.keys(obj[personName]); //[ 'gashti', 'potnici', 'chorapi' ] или такъмите на всеки пърсън.
    takumi.sort(function(x, y) {               //сравняваме гащи и потници по критерии кг, които взимаме от обекта(obj)
        return obj[personName][x].kg - obj[personName][y].kg;
    });
    takumi.forEach(function(takum) {
        sortedObj[personName][takum] = obj[personName][takum];
    });
});

//sort by такъм name
var sortedObject = {};
Object.keys(obj).forEach(function(name) {
    sortedObject[name] = {};
    var sortedTakamiByName = Object.keys(obj[name]).sort();
    sortedTakamiByName.forEach(function(takum) {
        sortedObject[name][takum] = obj[name][takum];
    });
});

console.log(sortedObj);
console.log(sortedObject);