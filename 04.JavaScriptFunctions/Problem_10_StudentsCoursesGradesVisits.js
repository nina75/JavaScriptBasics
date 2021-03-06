function solve(arr) {
    var studentsInfo = {};
    arr.forEach(function(row) {
        var tokens = row.split('|'),
            student = tokens[0].trim(),
            course = tokens[1].trim(),
            grade = tokens[2].trim(),
            visits = tokens[3].trim();
        if(!studentsInfo[course]) {
            studentsInfo[course] = {
                grades:[grade],
                visits:[visits],
                students:[student]
            }
        }
        else {
            studentsInfo[course]['grades'].push(grade);
            studentsInfo[course]['visits'].push(visits);
            if(studentsInfo[course]['students'].indexOf(student) == -1) {
                studentsInfo[course]['students'].push(student);
            }
        }
    });
    var courses = Object.keys(studentsInfo),
        result = {};
    courses.sort();
    courses.forEach(function(course){
        result[course] = {
            avgGrade: avg(studentsInfo[course]['grades']),
            avgVisits: avg(studentsInfo[course]['visits']),
            students: studentsInfo[course]['students'].sort()
        };
    });
    console.log(JSON.stringify(result));

    function avg(arr) {
        var sum = 0;
        arr.forEach(function(el) {
            sum += Number(el);
        });
        return +(sum / arr.length).toFixed(2);
    }
}

function solve(arr) {
    var students = {},
        result = {};
    arr.forEach(function(el) {
        var parts = el.split('|'),
            name = parts[0].trim(),
            course = parts[1].trim(),
            grade = +parts[2].trim(),
            visits = +parts[3].trim();
        if(!students[course]) {
            students[course] = {grades: [grade], visits: [visits], students:[name]};
        } else {
            students[course].grades.push(grade);
            students[course].visits.push(visits);
            if(students[course].students.indexOf(name) === -1) {
                students[course].students.push(name);
            }
        }
    });
    Object.keys(students).sort().forEach(function(course) {
       result[course] = {
           avgGrade: +(((students[course].grades.reduce(function(sum, el) {
               return sum + el;
           }, 0)) / students[course].grades.length).toFixed(2)),
           avgVisits: +(((students[course].visits.reduce(function(sum, el) {
               return sum + el;
           }, 0)) / students[course].visits.length).toFixed(2)),
           students: students[course].students.sort()
       };
    });
    console.log(JSON.stringify(result));
}

solve([
    'Peter Nikolov | PHP  | 5.50 | 8',
    'Maria Ivanova | Java | 5.83 | 7',
    'Ivan Petrov   | PHP  | 3.00 | 2',
    'Ivan Petrov   | C#   | 3.00 | 2',
    'Peter Nikolov | C#   | 5.50 | 8',
    'Maria Ivanova | C#   | 5.83 | 7',
    'Ivan Petrov   | C#   | 4.12 | 5',
    'Ivan Petrov   | PHP  | 3.10 | 2',
    'Peter Nikolov | Java | 6.00 | 9'
]);