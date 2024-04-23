const path = require('node:path');

const notes = './files/hello.txt';

path.dirname(notes); // /users/joe
path.basename(notes); // notes.txt
path.extname(notes); // .txt

//const fs = require('node:fs');

/*fs.readFile('./files/notes.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
*/


const ds = require('node:fs');

ds.readFile('./files/intro.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

const fs = require('node:fs');
const content = 'hello world';
fs.writeFile('./files/hello.txt', content, err => {
  if (err) {
    console.error(err);
    return;
  }
  else {
    console.log('File written successfully');
  }
});



const chalk = require('chalk')
console.log(chalk.blue('Hello world!'));
