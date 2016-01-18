// Write a function that finds the youngest male person in a given array of people and prints his full name
// Use only array methods and no regular loops (for, while)
// Use Array#find
if (!Array.prototype.find) {
    Array.prototype.find = function (callback) {
        var i, len;
        for (i = 0, len = this.length; i < len; i += 1) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
        return undefined;
    }
}

function findYoungestPerson(arr) {
    return arr
        .filter(function(el) { return !el.gender; })
        .sort(function(x, y){ return x.age - y.age; })
        .find(function(el){ return el; });
}

var persons = [
    { firstName: 'Minka', lastName: 'Minkova', age: 82, gender: true },
    { firstName: 'Pesho', lastName: 'Dobrev', age: 57, gender: false },
    { firstName: 'Penka', lastName: 'Samuilova', age: 22, gender: true },
    { firstName: 'Gosho', lastName: 'Minkov', age: 18, gender: false },
    { firstName: 'Gicka', lastName: 'Peicheva', age: 54, gender: true },
    { firstName: 'Todor', lastName: 'Naserov', age: 41, gender: false },
    { firstName: 'Nasko', lastName: 'Todorov', age: 26, gender: false },
    { firstName: 'Petra', lastName: 'Vaklinova', age: 36, gender: true },
    { firstName: 'Aleks', lastName: 'Kehaiov', age: 17, gender: false },
    { firstName: 'Dupina', lastName: 'Maleeva', age: 19, gender: true }
];

console.log(findYoungestPerson(persons));
