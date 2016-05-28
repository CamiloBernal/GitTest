const http = require("http");
const hostName = "localhost";
const port = 8080;
 
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<!doctype html><html><head><title>My First Node Server 3</title></head><body><h1>Hello world 3 from nodejs</h1></body></html>');
}).listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});
 