function solve(arr) {
    var s = arr[0],
        count = 0,
        x, y, z;
    for (y = 0; y < 51; y += 1) {
        for (z = 0; z < 21; z += 1) {
            x = (s - 4 * y - 10 * z) / 3;
            if(x >= 0 && x === (x | 0)) {
                count++;
            }
        }
    }
    console.log(count);
}
solve([7]);
solve([10]);
solve([40]);