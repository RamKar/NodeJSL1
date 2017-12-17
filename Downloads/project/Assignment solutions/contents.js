
const testFolder = './';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
	console.log('Contents of the current directory:');
  files.forEach(file => {
    console.log(file);
  });
});// Objective d
