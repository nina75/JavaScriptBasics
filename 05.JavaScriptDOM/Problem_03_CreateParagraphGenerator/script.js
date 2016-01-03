(function() {
    function createParagraph(id, text) {
        var paragraph =  document.createElement('p');
        paragraph.innerText = text;
        document.getElementById(id).appendChild(paragraph);
    }

    function onBtnClick() {
        var text = document.getElementsByTagName('input')[0].value.trim();
        if(text != '' ) createParagraph('wrapper', text);
    }

    document.getElementsByTagName('button')[0].addEventListener('click', onBtnClick);
})()