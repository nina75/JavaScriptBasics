function findYoungestPerson(array) {
    var personWithSmartphone = array.filter(function(el) {
        return el.hasSmartphone == true;
    });

    personWithSmartphone.sort(function(x, y) {
        return (x.age| 0) - (y.age | 0) ;
    });
    console.log('The youngest person is ' + personWithSmartphone[0].firstname + ' ' + personWithSmartphone[0].lastname);
}

var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }]

findYoungestPerson(people);