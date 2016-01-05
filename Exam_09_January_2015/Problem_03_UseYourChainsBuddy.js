function solve(arr) {
    var text = '',
        regex = /<p>(.*?)<\/p>/g,
        match,
        output = '';
    while(match = regex.exec(arr[0])) {
        text += match[1];
    }
    text = text.replace(/[^a-z\d]+/g, ' ');
    for(var index in text) {
        output += convert(text[index]);
    }
    console.log(output);
    
    function convert(symbol) {
        var code = symbol.charCodeAt(0);
        if(symbol * 1 == symbol) return symbol;
        else if(code >= 97 && code <= 109 ) code += 13;
        else code -= 13;
        return String.fromCharCode(code);
    }
}

solve([
    '<html><head><title></title></head><body><h1>Intro</h1><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj  qpunvaf ner nofbyhgryl rffragvny sbe fnsr unaqyvat nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre fnvq guna qbar ohg vs lbh chg ba lbhe gverf</p></body>'
]);

solve([
    '<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&****</p><div><button>dsad</button></div><p>grkg^^^^%%%)))([]12</p></body></html>'
]);
