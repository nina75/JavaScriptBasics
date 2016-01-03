(function() {
    var HTMLGen =  {
        createParagraph: function(id, text) {
            var p = document.createElement('p');
            p.innerText = text;
            document.getElementById(id).appendChild(p);
        },
        createDiv: function(id, classs) {
            var div = document.createElement('div');
            div.setAttribute('class', classs);
            document.getElementById(id).appendChild(div);
        },
        createLink: function(id, text, url) {
            var link = document.createElement('a');
            link.setAttribute('href', url);
            link.innerHTML = text;
            document.getElementById(id).appendChild(link);
        }
    };

    function testHtmlGen() {
        HTMLGen.createParagraph('wrapper', 'Soft Uni');
        HTMLGen.createDiv('wrapper', 'section');
        HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');
    }

    document.getElementsByTagName('button')[0].addEventListener('click', testHtmlGen);
})()