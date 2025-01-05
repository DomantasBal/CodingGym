// const fs = require('fs');
const fs = require('fs/promises');

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
// fs.writeFileSync('file3.txt', 'Helllllllooooo ');
// console.log('file created');

// Async / Await
// async function createFile(filename, content) {
//   try {
//     await fs.writeFile(filename, content);
//     console.log('file created');
//   } catch (err) {
//     console.log(err);
//   }
// }
// createFile('text1.txt', 'test test 123');

// Read from file
// async function readFile(filename) {
//   try {
//     const data = await fs.readFile(filename, 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// readFile('file1.txt');

// Delete file
// async function deleteFile(filename) {
//   try {
//     await fs.unlink(filename);
//     console.log(`${filename} is deleted`);
//   } catch (err) {
//     console.log(err);
//   }
// }

// deleteFile('file2.txt');

// Rename file
// async function renameFile(oldName, newName) {
//   try {
//     await fs.rename(oldName, newName);
//     console.log(`file with old name: ${oldName} renamed to ${newName}`);
//   } catch (err) {
//     console.log(err);
//   }
// }

// renameFile('file3.txt', 'renamed.txt');

// Create Folder
// async function createFolder(folderName) {
//   try {
//     await fs.mkdir(folderName);
//     console.log(`Folder ${folderName} created`);
//   } catch (err) {
//     console.log(err);
//   }
// }

// createFolder('folder1');
