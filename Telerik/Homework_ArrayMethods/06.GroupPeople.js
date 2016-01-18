/* Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
   Use Array#reduce
   Use only array methods and no regular loops (for, while) */

function groupPeopleByFirstLetterOfName(arr) {
    return arr.reduce(function(obj, item) {
        var letter = item.firstName[0].toLowerCase();
        if(!obj[letter]) {
            obj[letter] = [item];
        } else {
            obj[letter].push(item);
        }
        return obj;
    }, {});
}

var persons = [
    { firstName: 'Minka', lastName: 'Minkova', age: 82, gender: true },
    { firstName: 'pesho', lastName: 'Dobrev', age: 57, gender: false },
    { firstName: 'Penka', lastName: 'Samuilova', age: 22, gender: true },
    { firstName: 'Gosho', lastName: 'Minkov', age: 18, gender: false },
    { firstName: 'Gicka', lastName: 'Peicheva', age: 54, gender: true },
    { firstName: 'Todor', lastName: 'Naserov', age: 41, gender: false },
    { firstName: 'Nasko', lastName: 'Todorov', age: 26, gender: false },
    { firstName: 'Petra', lastName: 'Vaklinova', age: 36, gender: true },
    { firstName: 'Aleks', lastName: 'Kehaiov', age: 17, gender: false },
    { firstName: 'Dupina', lastName: 'Maleeva', age: 19, gender: true }
];

console.log(groupPeopleByFirstLetterOfName(persons));