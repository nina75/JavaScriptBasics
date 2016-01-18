/* Write a function that calculates the average age of all females, extracted from an array of persons
   Use Array#filter
   Use only array methods and no regular loops (for, while) */

function calcAverageAgeOfFemale(arr) {
    var arrFemales = arr.filter(function(el) {
        return el.gender;
    }),
        sum = arrFemales.reduce(function(s, el){
        return s + el.age;
    }, 0);

    return sum / arrFemales.length;
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

console.log(calcAverageAgeOfFemale(persons));