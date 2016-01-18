/* Write a function that removes all elements with a given value.
   Attach it to the array type. */

Array.prototype.remove = function (value) {
    return this.filter(function(el) {
        return el !== value;
    });
};

var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
console.log(arr.remove(1)); //arr = [2,4,3,4,111,3,2,'1'];