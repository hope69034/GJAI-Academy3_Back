//html파일을 모듈이 아닌 파일에서 읽어서 가지고 오기

const http=require("http");
const fs=require("fs");

const server = http.createServer((req,res)=>{
   fs.readFile("view/03.helloWorld.html","utf-8", (err,html)=>{
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(html);
   })
})
server.listen(3000)


/* const server = http.createServer((req,res)=>{
   const html = view.helloWorld();
   res.writeHead(200,{"Content-Type":"text/html"});
   res.end(html);
});
server.listen(3000) */