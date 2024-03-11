const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3003;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write('<h1>Hello work</h1>');
  res.write(` <h1>HTML5 - Nôi dung 1</h1>
  <h2>HTML5 _ Nôi dung 2</h2>`)
  res.end('<p>Hello World\n</p>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});