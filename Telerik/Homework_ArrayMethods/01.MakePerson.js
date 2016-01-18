/* Write a function for creating persons.
   Each person must have firstname, lastname, age and gender (true is female, false is male)
   Generate an array with ten person with different names, ages and genders  */
(function() {
    var person = {},
        persons = [];
    function buildPerson(firstName, lastName, age, gender) {
        return {
            firstName: firstName,
            lastName: lastName,
            age: age,
            gender: gender
        }
    }

    for (var i = 0; i < 10; i++) {
        person = buildPerson('Minka' + i, 'Minkova' + i, (Math.random() * 100) | 0, i % 2 ? 'true' : 'false');
        persons.push(person);
    }

    console.log(persons);
})();