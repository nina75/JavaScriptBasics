/* Write a function that groups an array of people by age, first or last name.
   The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
   Use function overloading (i.e. just one function) */

function group(arr, criteria) {
   return arr.reduce(function(obj, el) {
        if(!obj[el[criteria]]) {
            obj[el[criteria]] = [el];
        } else {
            obj[el[criteria]].push(el);
        }
        return obj;
    }, {});
}

var people = [
    { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname : 'Bay', lastname: 'Georgi', age: 75},
    { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Minka', lastname: 'Lilianova', age: 16},
    { firstname : 'Kroki', lastname: 'Ivan', age: 32}
];
var groupedByFirstName = group(people, 'firstname');
var groupedByAge= group(people, 'age');
var groupedByLastName= group(people, 'lastname');
console.log(groupedByFirstName);