/* Write a function that prints all underaged persons of an array of person
   Use Array#filter and Array#forEach
   Use only array methods and no regular loops (for, while) */

function printPersonUnderAge(arr, age) {
    var newArr = arr.filter(function(person) {
        return person.age <= age;
    });
    newArr.forEach(function(p) {
        console.log(p);
    })
}

var arr = [{name:'Gosho', age: 18}, {name: 'Evlogi', age: 23}, {name: 'Petra', age: 45}, {name: 'Misho', age: 27}, {name: 'Pesho', age: 48}];
printPersonUnderAge(arr, 27);