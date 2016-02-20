function solve(arr) {
    var tasks = [],
        result = [],
        sortedResult = {};
    arr.forEach(function(el) {
        var parts = el.split('&'),
            name = parts[0].trim(),
            type = parts[1].trim(),
            taskNumber = parts[2].trim(),
            score = +parts[3],
            linesOfCode = +parts[4];
            //key = 'Task ' + taskNumber;
        var task = tasks.filter(function(el) {return el.taskNumber === taskNumber})[0];
        if(!task) {
            tasks.push ({
                taskNumber: taskNumber,
                tasks: [{name: name, type: type}],
                scores: [score],
                lines: linesOfCode
            });
        } else {
            task.tasks.push({name: name, type: type}) ;
            task.scores.push(score);
            task.lines += linesOfCode;
        }
    });

    for(var task in tasks) {
        result.push({
            taskNumber: tasks[task].taskNumber,
            tasks: tasks[task].tasks,
            average: +(((tasks[task].scores.reduce(function(sum, el) {return sum + el}, 0)) / tasks[task].scores.length).toFixed(2)),
            lines: tasks[task].lines
        });
    }
    result.sort(function(x, y){
        if(x.average === y.average) {
            return x.lines - y.lines;
        }
        return y.average - x.average;
    });

    result.forEach(function(task) {
        var key = 'Task ' + task.taskNumber;
        sortedResult[key] = {
          tasks: task.tasks.sort(function(x, y){
              return x.name.localeCompare(y.name);
          }),
          average: task.average,
          lines: task.lines
        };
    });

    console.log(JSON.stringify(sortedResult));

}

solve([
    'Array Matcher & strings & 4 & 100 & 38',
    'Magic Wand & draw & 3 & 100 & 15',
    'Dream Item & loops & 2 & 88 & 80',
    'Knight Path & bits & 5 & 100 & 65',
    'Basket Battle & conditionals & 2 & 100 & 120',
    'Torrent Pirate & calculations & 1 & 100 & 20',
    'Encrypted Matrix & nested loops & 4 & 90 & 52',
    'Game of bits & bits & 5 &  100 & 18',
    'Fit box in box & conditionals & 1 & 100 & 95',
    'Disk & draw & 3 & 90 & 15',
    'Poker Straight & nested loops & 4 & 40 & 57',
    'Friend Bits & bits & 5 & 100 & 81'
]);
