import fs from 'fs';
import fsPromises from 'fs/promises';

// readfile() - callback
fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`callback ${data}`);
});

// readFileSync() - Synchronous version
const data = fs.readFileSync('./test.txt', 'utf8');
console.log(`sincrono ${data}`);

// readFile() - Promise .then()
fsPromises.readFile('./test.txt', 'utf8')
    .then((data) => console.log(`promise then ${data}`))
    .catch((err) => console.log(err));

// readFile() - Promise async/await
const readFile = async () => {
    try {
        const data = await fsPromises.readFile('./test.txt', 'utf8');
        console.log(`promise async/await ${data}`);
    } catch (err) {
        console.log(err)
    }
};


// writeFile()
const writeFile = async () => {
    try {
        await fsPromises.writeFile('./test.txt', 'Hello, I am writing to this file');
        console.log('File written to...')
    } catch (err) {
        console.log(err);
    }
}

// appendFile()
const appendFile = async () => {
    try {
        await fsPromises.appendFile('./test.txt', '\nThis is appended text');
        console.log('File appended to...')
    } catch (err) {
        console.log(err);
    }
}

writeFile();
appendFile();
readFile();