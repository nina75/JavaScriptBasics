function solve(arr) {
    var info = {};
    for(var index in arr) {
        var tokens = arr[index].split(/\s+/g),
            name = tokens[0],
            extension = tokens[1],
            size = Number(tokens[2].replace(/MB/g, ''));
        if(!info[extension]) {
            info[extension] = { 'files': [name],'sizes': size }
        }
        else {
            info[extension]['files'].push(name);
            info[extension]['sizes'] += size;
        }
    }

    var extensions = Object.keys(info),
        result = {};
    extensions.sort();
    extensions.forEach(function(ex){
        result[ex] = {};
        result[ex]['files'] = info[ex]['files'].sort();
        result[ex]['memory'] = info[ex]['sizes'].toFixed(2);
    });

    console.log(JSON.stringify(result));
}
function solve(arr) {
    var result = {},
        sortedResult = {};
    arr.forEach(function (el) {
        var parts = el.split(/\s+/),
            fileName = parts[0].trim(),
            extension = parts[1].trim(),
            size = +(parts[2].match(/[.\d]+/)[0]);
        if(!result[extension]) {
            result[extension] = {files: [fileName], memory:[size]};
        } else {
            result[extension].files.push(fileName);
            result[extension].memory.push(size);
        }
    });
    Object.keys(result).sort().forEach(function(extension){
        sortedResult[extension] = {
            files: result[extension].files.sort(),
            memory: (result[extension].memory.reduce(function(sum, el) {
                return sum + el
            }, 0)).toFixed(2)
        }
    });
    
    console.log(JSON.stringify(sortedResult));

}
//solve([
//    'sentinel .exe 15MB',
//    'zoomIt .msi 3MB',
//    'skype .exe 45MB',
//    'trojanStopper .bat 23MB',
//    'kindleInstaller .exe 120MB',
//    'setup .msi 33.4MB',
//    'winBlock .bat 1MB'
//]);

solve([
    'jquery .js 3.2MB',
    'diceGame .hs 2.1MB',
    'web .html 54.22MB',
    'funnyPic .psd 4MB',
    'examProblemOne .docx 5MB',
    'profile .aspx 6MB',
    'style .css 178.00MB',
    'horseScript .hs 22MB',
    'script .js 17MB',
    'psTest .psd 7MB',
    'exceptionsHW .docx 2MB',
    'index .aspx 13MB',
    'testHTML .html 2MB',
    'webfundHW .docx 4MB',
    'xml .xml 2MB',
    'spreadsheet .xml 4MB',
    'execute .hs 44.6MB',
    'shoopedIMG .psd 33MB'

]);