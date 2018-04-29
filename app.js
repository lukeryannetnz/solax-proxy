const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var server = http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    
    console.log(body);
  });
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
