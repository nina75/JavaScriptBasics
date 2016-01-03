(function() {
    function calcSupply(age, maxAge, food, foodPerDay) {
        var supply = (maxAge - age) * 365 * foodPerDay;
        return (supply + 'kg of ' + food + ' would be enough until I am ' + maxAge + ' years old.');
    }

    function printResult() {
        var age = document.getElementById('age').value,
            maxAge = document.getElementById('max-age').value,
            foodName = document.getElementById('food-name').value,
            foodPerDay = document.getElementById('food-per-day').value,
            resultElement = document.getElementById('result');

        if (isNaN(age) || isNaN(maxAge) || isNaN(foodPerDay) || age == '' || maxAge == '' || foodName == '' || foodPerDay == '') {
            resultElement.innerText = 'Incorrect data';
        }
        else {
            age = parseInt(age);
            maxAge = parseInt(maxAge);
            foodPerDay = parseFloat(foodPerDay);
            resultElement.innerText = calcSupply(age, maxAge, foodName, foodPerDay);
        }
    }

    document.getElementsByTagName('button')[0].addEventListener('click', printResult);

})();