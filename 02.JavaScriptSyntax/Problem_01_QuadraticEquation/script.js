(function() {
    function printResult() {
        var a = document.getElementById('a').value,
            b = document.getElementById('b').value,
            c = document.getElementById('c').value,
            resultElement = document.getElementById('result');

        if(isNaN(a) || isNaN(b) || isNaN(c) || a == '' || b == '' || c == '') {
            resultElement.innerText = 'Incorrect data';
        }
        else {
            a = Number(a);
            b = Number(b);
            c = Number(c);
            resultElement.innerHTML = calculateRoots(a, b, c);
        }
    }
    function calculateRoots(a, b, c) {
        if(a == 0 &&  b == 0 && c == 0) {
            return 'Each x is root';
        }

        var d = b * b - 4 * a * c,
            x1,
            x2;
        if(d > 0) {
            x1 = (- b + Math.sqrt(d)) / (2 * a);
            x2 = (- b - Math.sqrt(d)) / (2 * a);
            return ('x1 = ' + x1 + ', x2 = ' + x2);
        }
        if(d == 0) {
            x1 = - b / (2 * a);
            return ('x = ' + x1);
        }

        return 'No real roots.';
    }

    var calculateBtn = document.getElementById('calc-btn');
    calculateBtn.addEventListener('click', printResult);
})();