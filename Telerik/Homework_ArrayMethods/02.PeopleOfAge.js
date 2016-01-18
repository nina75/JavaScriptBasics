//Write a function that checks if an array of person contains only people of age (with age 18 or greater)
//Use only array methods and no regular loops (for, while)

function check(arr) {
    return arr.every(function(el) {
        return el.age >= 18;
    })
}

var arr = [{name:'Gosho', age: 18}, {name: 'Evlogi', age: 23}, {name: 'Petra', age: 45}, {name: 'Misho', age: 27}];
console.log(check(arr));