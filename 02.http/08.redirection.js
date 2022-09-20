const http = require("http");

const server = http.createServer((req,res)=>{
   res.writeHead(302, //redirection
      {"Location":"http://www.hanbit.co.kr"});
      //실행하면 한빗사이트로이동
   res.end();
});   

server.listen(3000, ()=>{
   console.log("server running at http://localhost:3000");
});
