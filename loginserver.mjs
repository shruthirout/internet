import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer( async (req, res) => {
  console.log('Received request...', req.url, req.method);
  
  if(req.url == '/') {
    if(req.method == 'GET') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Access-Control-Allow-Origin', "*");
      res.end("Shruthi");
    }
    if(req.method == 'OPTIONS') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');      res.setHeader('Access-Control-Allow-Headers', '*');
      res.end('OK');
    }
    if(req.method == 'POST') {
      let data = '';
      req.on('data', chunk => {
        data += chunk;
      });
      req.on('end', async () => {
        try {
          const userData = JSON.parse(data);
          const {username, password} = userData;
          console.log('Username...', username);
          console.log('Password...', password);
          await writeToFile(username);
          await writeToFile(password);
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Access-Control-Allow-Origin', "*");
        } catch (e) {
          console.error('Error parsing JSON: ', e.message);
          res.writeHead(400, { 'Content-Type': 'text/plain'});
          res.end('Invalid JSON data');
        }
      })
    }
  }
  
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});