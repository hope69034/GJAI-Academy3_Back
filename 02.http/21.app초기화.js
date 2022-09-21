const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require("querystring");
const view = require("./view/index");
//view폴더에 있는 index.js를 연결

http.createServer((req,res)=>{
   
   let pathname = url.parse(req.url).pathname;
   switch(pathname){

   case"/":
      const html = view.index();
      res.end(html);
      break;
   default:
      res.writeHead(202, {'Content-Type': 'text/html'});
      res.end(html);
   }

}).listen(3000, ()=>{
   console.log("server running at http://localhost:3000");
});


