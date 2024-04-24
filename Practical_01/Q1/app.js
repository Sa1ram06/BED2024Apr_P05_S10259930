 const fs = require('node:fs');
    fs.readFile('./Q1/files/text1', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });

// Codes for writing File
    const ds = require('node:fs');
    const content = 'Hi i am Sairam';

    ds.writeFile('./Q1/files/text2', content, err => {
        if (err) {
            console.error(err);
        }
        else {
            console.log('File written successfully');
        }
    });

// Codes for outputting colored text
    const chalk = require('chalk');
    console.log(chalk.blue('Hello world!'));

