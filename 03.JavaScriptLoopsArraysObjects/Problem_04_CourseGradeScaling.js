/* You are given a JSON string containing an array of Students (Objects).
   Your task is to scale their scores upwards by increasing them with 10%.
   After that you should add a field that shows whether the student has passed or failed the exam (passed exam means 100 or more points at the exam).
   Finally you should filter out only the students that have passed the exam and print them out sorted alphabetically. */

function solve(arr) {
    arr.forEach(function(el) {
        el.score = +(el.score * 1.1).toFixed(2);
        el.hasPassed = el.score >= 100 ? true : false;
    });
    arr = arr.filter(function(el) {
        return el.hasPassed == true;
    });
    arr.sort(function(x, y) {
        return x.name > y.name;
    });
    console.log(arr);
}

solve([
       {
          'name' : 'Пешо',
          'score' : 91
       },
       {
          'name' : 'Лилия',
          'score' : 290
       },
       {
          'name' : 'Алекс',
          'score' : 343
       },
       {
          'name' : 'Габриела',
          'score' : 400
       },
       {
          'name' : 'Жичка',
          'score' : 70
       }
]);