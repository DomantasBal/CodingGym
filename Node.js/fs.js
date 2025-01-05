const fs = require('fs');
// const fs = require('fs/promises');

// Write to a file

// Callback version
// fs.writeFile('file1.txt', 'Heleuuu', (err) => {
//   if (err) throw err;

//   console.log('file created');
// });

// Promise version
// fs.writeFile('file2.txt', 'Sup')
//   .then(() => console.log('file done'))
//   .catch((err) => console.log(err));

// Sync version
fs.writeFileSync('file3.txt', 'Helllllllooooo ');
console.log('file created');
