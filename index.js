const http = require('http');
const port = process.env.PORT || 8080;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({
    service: 'mon-premier-service',
    status: 'ok',
    platform: 'DxP'
  }));
}).listen(port, () => {
  console.log(`mon-premier-service running on port ${port}`);
});
