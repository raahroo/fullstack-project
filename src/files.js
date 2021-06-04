const fs = require('fs');

//reading files
fs.readFile('./src/docs/blog1.txt', (err, data) => { //async op
    if (err) {
        console.log(err);
    }
    console.log(data.toString()); // show a buffer - package of data
})
