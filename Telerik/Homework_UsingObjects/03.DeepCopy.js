//Write a function that makes a deep copy of an object.
//The function should work for both primitive and reference types.
function clone(obj) {
    if(obj === null || typeof obj !== 'object') {
        return obj;
    }
    var copyAsObj = {};
    for(var prop in obj) {
        copyAsObj[prop] = clone(obj[prop]);
    }
    return copyAsObj;
}

var gosho = {name: 'Gosho', age: 6, marks:[4, 5, 6], cars: [{model:'mazda', age: 10}, {model:'peso', age:22}]};
var pesho =clone(gosho);
//pesho.cars[0].model = 'Zaporojec';
//console.log(gosho);
console.log(pesho);

//var a = [{model:'mazda', age: 10}, {model:'peso', age:22}];
//var b = a.slice();
//var c = [1,2,3];
//var d = c.slice();
//d[0] = 99;
//console.log(c);