const fs = require('fs');

const readStream = fs.createReadStream('./src/docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./src/docs/blog4.txt');

readStream.on('data', (chunk) => {
    console.log('----- NEW CHUNCK ------')
    console.log(chunk);
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
})