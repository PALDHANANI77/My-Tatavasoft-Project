const http = require('http');
 const fs = require('fs');
const { kStringMaxLength } = require('buffer');

 const index = fs.readFileSync('../src/App.js','utf-8')
const server  =   http.createServer((req,res)=>{
    console.log("server started");
    res.setHeader('Content-Type', 'html')
    res.end(index);
});
server.listen(8080);


