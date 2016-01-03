(function() {
    var div = document.querySelectorAll('div')[0];

    function checkEmail() {
        var text = document.getElementsByTagName('input')[0].value;
        div.innerText = text;
        if(text.match(/[A-z][\w]+@[a-z]+.[a-z]+/)) {
            div.style.backgroundColor = 'lightgreen';
        }
        else {
            div.style.backgroundColor = '#FF544A';
        }
    }

    document.getElementsByTagName('button')[0].addEventListener('click', checkEmail)
})()