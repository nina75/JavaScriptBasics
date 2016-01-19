/* Sorting an array means to arrange its elements in increasing order.
   Write a script to sort an array.
   Use the selection sort algorithm: Find the smallest element, move it at the first position,
   find the smallest from the rest, move it at the second position, etc. */

Array.prototype.selectionSort = function() {
    var i, j, temp, len = this.length;
    for (i = 0; i < len; i += 1) {
        for (j = i + 1; j < len; j += 1) {
            if(this[i] > this[j]) {
                temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }

    return this;
};

var arr = [5, 6, 4, 3, 2, 1];
arr.selectionSort();
console.log(arr);

