var fs = require('fs');
var readline = require('readline');

var path = `./data/trends/`;
const fileList = fs.readdirSync(path);
console.log(fileList);

for(const file of fileList) {
    let numLinesToRemove = 2;
    let reader = fs.createReadStream(`${path}/${file}`);
    let writer = fs.createWriteStream(`${path}/e${file}`);
    
    let lineReader = readline.createInterface({
        input: reader,
        output: writer,
        terminal: false
    });
    
    let lineCount = 0;
    
    lineReader.on('line', function (line) {
        lineCount++;
        if (lineCount > numLinesToRemove) {
            writer.write(line + '\n');
        }
    });
    
    lineReader.on('close', function () {
        writer.end();
    });
}