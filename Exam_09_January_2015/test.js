var obj = {
    gogo: {
        gashti: {kg: 2, transport: '����'},
        potnici: {kg: 3,transport: '����'},
        chorapi: {kg: 1,transport: '������'}
    },
    petruna: {
        gashti: {kg: 1, transport: '����'},
        potnici: {kg: 17,transport: '����'},
        rakia: {kg: 58,transport: 'traktor'},
        chorapi: {kg: 2,transport: '������'}
    },
    ifak: {
        bikini: {kg: 1, transport: '����'},
        gashti: {kg: 4, transport: '����'},
        potnici: {kg: 3,transport: '����'}
    }
};

//sort by kg - �������
var sortedObj = {};
Object.keys(obj).forEach(function(personName) {
    sortedObj[personName] = {};
    var takumi = Object.keys(obj[personName]); //[ 'gashti', 'potnici', 'chorapi' ] ��� �������� �� ����� ������.
    takumi.sort(function(x, y) {               //���������� ���� � ������� �� �������� ��, ����� ������� �� ������(obj)
        return obj[personName][x].kg - obj[personName][y].kg;
    });
    takumi.forEach(function(takum) {
        sortedObj[personName][takum] = obj[personName][takum];
    });
});

//sort by ����� name
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