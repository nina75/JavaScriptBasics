function solve(arr) {
    function extractObjects(arr){
        var filteredArr = [];
        for (var i = 0; i < arr.length; i++) {
            if((typeof arr[i]) == 'object' && !Array.isArray(arr[i]) && arr[i] != null) {
                filteredArr.push(arr[i]);
            }
        }

        return filteredArr;
    }
    console.log(extractObjects(arr));

}

solve([
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}

]);