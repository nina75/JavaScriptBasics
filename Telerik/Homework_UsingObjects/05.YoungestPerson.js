//Write a function that finds the youngest person in a given array of people and prints his/hers full name
//Each person has properties firstname, lastname and age.

function findYoungestPerson(arr) {
    var youngestPerson =  arr.sort(function(first, second) {
        return first.age - second.age;
    }).find(function(el) {
        return el.firstname;
    });

    return youngestPerson.firstname + ' ' + youngestPerson.lastname;
}

var people = [
    { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Minka', lastname: 'Lilianova', age: 16},
    { firstname : 'Kroki', lastname: 'Todorov', age: 19}
];

console.log(findYoungestPerson(people));