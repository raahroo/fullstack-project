const fs = require('fs');

//reading files
/* fs.readFile('./src/docs/blog1.txt', (err, data) => { //async op
    if (err) {
        console.log(err);
    }
    console.log(data.toString()); // show a buffer - package of data
}) */

// writing files
/* fs.writeFile('./src/docs/blog1.txt', 'Hello Node', () => {
    console.log('File was written');
}); */

/* fs.writeFile('./src/docs/blog2.txt', 'Hello Node 2', () => {
    console.log('File was written');
}) */

//directories
/* if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted');
    }) 
}*/

//deleting files
if (fs.existsSync('./src/docs/deleteme.txt')) {
    fs.unlink('./src/docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File deleted');
    })
}
