const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set response header
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;

  // Send a response
  res.end('welcome to Node.Js!\n');
});

// Specify the file name and content
const fileName = 'message.txt';
const content = 'HELLO NODE, GOOD TO SEE YA!';

// Use fs.writeFile to create the file
fs.writeFile(fileName, content, (err) => {
  if (err) {
    console.error(`Failed to create file: ${err}`);
  } else {
    console.log(`File "${fileName}" created successfully.`);
  }
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});