(function() {
    function evalExpression() {
        var expr = document.getElementById('expr').value,
            resultDiv = document.getElementById('result');

        expr = expr.replace(/[^0-9()+\-*/.]/g, '');
        try {
            var result = eval(expr);
            if(result != undefined) {
                resultDiv.innerText = eval(expr);
            }
        }
        catch(err) {
            resultDiv.innerText = 'Incorrect expression';
        }
    }

    document.getElementsByTagName('button')[0].addEventListener('click', evalExpression);
})();