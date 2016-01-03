/* Write a JavaScript function groupBy('criteria') that groups an array of people by age, first or last name.
   Create a Person constructor to add every person in the person array. The groupBy('criteria') function must return an object,
   with keys – the groups (age, firstName and lastName) and values – arrays with people in this group.
   Print on the console every entry of the returned object. Use function overloading (i.e. just one function).
   You may need to find how to use constructors. */

(function() {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    Person.prototype.toString = function() {
        return (this.firstName + ' ' + this.lastName + ' (age ' + this.age + ')');
    }

    function groupBy(arr, criteria) {
        var result = {},
            key;
        arr.forEach(function(person) {
            switch (criteria) {
                case 'firstName':
                    key = 'Group ' + person.firstName;
                    break;
                case 'lastName':
                    key = 'Group ' + person.lastName;
                    break;
                case 'age':
                    key = 'Group ' + person.age;
                    break;
                default:
                    break;
            }
            if(result[key]) {
                result[key].push(person.toString());
            }
            else {
                result[key] = [person.toString()];
            }
        });

        return sortObjByKey(result);

    }

    function sortObjByKey(obj) {
        var keys = Object.keys(obj),
            sortedObj = {};
        keys.sort();
        keys.forEach(function(key) {
            sortedObj[key] = obj[key];
        });

        return sortedObj;
    }

    function print(obj) {
        for(var key in obj) {
           console.log(key + ' : ' + '[' + obj[key].join(', ')+ ']');
        }
    }

    var people = [
        new Person("Scott", "Guthrie", 38),
        new Person("Scott", "Johns", 36),
        new Person("Scott", "Hanselman", 39),
        new Person("Jesse", "Liberty", 57),
        new Person("Jon", "Skeet", 38)
    ];
    
    console.log('By first name:');
    print(groupBy(people, 'firstName'));
    console.log();
    console.log('By age:');
    print(groupBy(people, 'age'));
    console.log();
    console.log('By last name:');
    print(groupBy(people, 'lastName'));

})();