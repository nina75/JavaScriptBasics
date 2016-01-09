function solve(arr) {
    var regex = /(.+?)\s*-\s*(.+?)\s*:\s*(\d+)/,
        results = {},
        output = {};
    arr.forEach(function(el) {
        var tokens = el.match(regex),
            studentName = tokens[1],
            course = tokens[2],
            examResult = tokens[3] | 0;
        if(examResult >= 0 && examResult <= 400) {
            var newStudent = {name: studentName, result:examResult, makeUpExams: 0};
            if(!results[course]) {
                results[course] = [newStudent];
            } else {
                var student = results[course].filter(function(el) {return el.name == studentName})[0];
                if (student) {
                    student.makeUpExams++;
                    if(examResult > student.result) {
                        student.result = examResult;
                    }
                } else {
                    results[course].push(newStudent);
                }
            }
        }
    });

    Object.keys(results).forEach(function(course) {
        output[course] = results[course].sort(function(x, y) {
            if(x.result == y.result) {
                if(x.makeUpExams == y.makeUpExams) {
                    return x.name.localeCompare(y.name);
                }
                return x.makeUpExams - y.makeUpExams;
            }
            return y.result - x.result;

        });
    });
    console.log(JSON.stringify(output));
}

solve([
    'Mila Kunis - C# : 200',
    'Mila Kunis - Java : 100',
    'Mila Kunis                          -PHP : 350',
    'Mila Kunis-HTML & CSS:400',
    'Jessica Clement - C# : 200',
    'Jessica Clement - Java : 100',
    'Jessica Clement - Java : 100',
    'Jessica Clement-PHP:300'
]);