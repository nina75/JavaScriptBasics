function clone(obj) {
    if (obj == null || typeof obj != "object") {
        return obj;
    }
    var copy = {};
    for (var attr in obj) {
        if(typeof (obj[attr]) == 'object') {
            copy[attr] = clone(obj[attr]);
        }
        else {
            copy[attr] = obj[attr];
        }
    }

    return copy;
}

function compareObjects(obj, objCopy) {
    return obj == objCopy;
}

var a = {name: 'Pesho', age: 21, marks: [2, 2, 4, 6], dogs:[{name:'Dudu',age:3}, {name:'Penka', age:5}]}
var b = clone(a); // a deep copy
console.log('a == b --> ' + compareObjects(a, b));

var a1 = {name: 'Pesho', age: 21} ;
var b1 = a1; // not a deep copy
console.log('a1 == b1 --> ' + compareObjects(a1, b1));

b.marks[0] = 3;
console.log(a.marks);

b.dogs[0].name = 'Petrunka';
console.log(a.dogs[0].name);
console.log(b.dogs[0].name);




