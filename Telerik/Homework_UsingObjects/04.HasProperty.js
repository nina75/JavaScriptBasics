//Write a function that makes a deep copy of an object.
//The function should work for both primitive and reference types.

function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
    //return !!obj[prop];
}

var obj  = {name: 'Pesho', age: 28};
var hasProp = hasProperty(obj, 'length');
console.log(hasProp);