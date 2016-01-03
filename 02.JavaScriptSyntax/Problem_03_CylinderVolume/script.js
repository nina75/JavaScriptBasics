function printVolume() {
    var radius = document.getElementById('radius').value.trim(),
        height = document.getElementById('height').value.trim();
        resultElement = document.getElementById('result');
    if(isNaN(radius) || radius == '' || isNaN(height) || height == '') {
        resultElement.innerText = 'Incorrect data';
    }
    else
    {
        var cylinderData = [Number(radius), Number(height)]
        resultElement.innerText = 'Volume = ' + calculateVolume(cylinderData);
    }
}
function calculateVolume(arr) {
    return (arr[0] * arr[0] * arr[1] * Math.PI).toFixed(3);
}

document.getElementById('calc-btn').addEventListener('click', printVolume);