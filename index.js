const fs = require('fs');


// fs.writeFileSync('ds-b.txt', 'This is a sample text file for DS-B students.');
// const result = fs.readFileSync('./ds-b.txt', 'utf-8');
// console.log(result);

// fs.writeFile(
//   'ds-b-async.txt',
//   'This is an async sample text file for DS-B students.',
//   (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('File written successfully!');
//     }
//   }

// );

fs.readFile('./ds-b-async.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});