import { createServer } from 'node:http';
const hostname='127.0.0.1';
const port=3000;
const server=createServer((req,res) => {
    console.log('Received request...', req.url, req.method);
    if(req.url=='/') {
        if(req.method =='GET') {
            res.statusCode=200;
            res.setHeader('Content-Type','text/plain');
            res.setHeader('Access-control-Aloow-Origin', "*");
        }
        res.end("Mithilesh");
        //console.log(res)
    }
    if(req.method=='options'){
        res.statusCode=200;
        res.setHeader('content-Type','application/json');
        res.setHeader('Access-control-Allow-Origin', 'http://127.0.0.1:5500');
        res.setHeader('Access-Control-Allow-Methods', "Post,GET,OPTIONS");
        res.setHeader('Access-Control-Allow-Headers','*');
        res.end('OK');
    }
    if(req.method=='POST'){
        //console.log(req.body());
        console.log('post method...')
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.setHeader('Access-Control-Allow-Origin', "*");

        res.end(JSON.stringify({surname:"KUMAR"}));
        //console.log(res)
    }
});
server.listen(port,hostname,() =>{
    console.log('Server running at http://$(hostname:${port}/');
})