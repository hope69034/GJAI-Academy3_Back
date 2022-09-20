const http = require("http");

const server = http.createServer((req,res)=>{
   const cookie = req.headers.cookie;
   console.log(cookie);
   res.writeHead(200,{
      "Content-Type":"text/html",
      "Set-Cookie": ["breakfast=toast","dinner=bibimbab"]
   });
   res.end(`<h1>${cookie}</h1>`);  //쿠키가어덯게생겻나보겟다
});

server.listen(3000, ()=>{
   console.log("server running at http://localhost:3000");
});

//첫번쨰에는 언디파인 > 새로고침 블랙퍼스트토스트 디너비빔밥