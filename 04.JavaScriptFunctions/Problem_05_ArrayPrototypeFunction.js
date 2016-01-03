Array.prototype.removeItem = function(value) {
    return this.filter(function(el) {
        return el !== value;
    });
}

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log(arr.removeItem(1));

var arr1 = ['hi', 'bye', 'hello' ];
console.log(arr1.removeItem('bye'));
