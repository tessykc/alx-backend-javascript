// 5-http.js
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];

    countStudents(databasePath)
      .then(() => {
        res.end();
      })
      .catch(error => {
        res.end(error.message);
      });
  } else {
    res.end('Not found');
  }
});

module.exports = app;
