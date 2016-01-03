//(function() {
    function convertKmHToKnots() {
        var kmH = document.getElementById('km-h').value.trim(),
            resultElement = document.getElementById('result');
        if(isNaN(kmH) || kmH == '' || kmH.length === 0) {
            resultElement.innerText = 'Incorrect data';
        }
        else {
            kmH = Number(kmH);
            resultElement.innerText = (kmH / 1.852).toFixed(2);
        }
    }

    document.getElementById('calc-btn').addEventListener('click', convertKmHToKnots);
//})();
