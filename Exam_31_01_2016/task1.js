function solve(arr) {
    var courseName = arr[arr.length - 1].trim(),
        points,
        grade,
        courseNamePoints = [];
    for (var i = 0; i <arr .length - 1; i += 1) {
        var parts = arr[i].trim().split(/\s+/),
            student = parts[0],
            course = parts[1],
            examPoints = +parts[2],
            bonuses = +parts[3];
        if(course === courseName) {
            courseNamePoints.push(examPoints);
        }
        if(examPoints < 100) {
            console.log(student + ' failed at "' + course + '"');
        } else {
            points = examPoints / 5 + bonuses;
            grade =((points / 80) * 4) + 2;
            if(grade > 6) {
                grade = 6;
            }
            if(grade >= 3) {
                console.log(student + ': Exam - ' + '"' + course + '"; Points - '+ +(points.toFixed(2)) + '; Grade - ' + grade.toFixed(2));

            }
        }
    }

    console.log('"' + courseName + '" average points -> ' + +(((courseNamePoints.reduce(function(sum, el){return sum + el}, 0)) / courseNamePoints.length).toFixed(2)));

}

solve([
    'Pesho   C#-Advanced 100 3',
    'Gosho Java-Basics 157 3',
    'Tosho HTML&CSS 317 12',
    'Minka C#-Advanced 57 15',
    'Stanka C#-Advanced 157 15',
    'Kircho C#-Advanced 300 0',
    'Niki C#-Advanced 400 10',
    'C#-Advanced'
]);