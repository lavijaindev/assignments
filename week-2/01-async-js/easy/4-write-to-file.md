## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

let data = 'This text should be appended into the contents ';
fs.writeFile('dummyfile.txt', data, 'utf-8', (err) => {
    if(err) { throw err; }

});

/**fs.appendFile('dummyfile.txt', data, 'utf-8', (err) => {
    if(err) { throw err; }

});
*/

fs.readFile('dummyfile.txt', 'utf-8', (err, indata) => {
    console.log(indata);
});
