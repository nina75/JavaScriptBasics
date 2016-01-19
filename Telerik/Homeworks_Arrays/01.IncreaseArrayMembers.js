//Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.
//Print the obtained array on the console.
function createArr() {
    var arr = [];
    for (var i = 0; i < 20; i++) {
        arr.push(i * 5);
    }
    return arr;
}

console.log(createArr());

