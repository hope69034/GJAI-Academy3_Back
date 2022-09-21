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
      fs.readdir("data",(err,files)=>{
         let list="";
         //files는어레이
         for (let file of files){
            const title = file.substring(0,file.length-4); //파일이름에서 .txt를 제외한 나머지  0부터 -4인덱미만까지 섭스트링=슬라이스
            list += `<li><h3><a href="/?id=${title}">${title}</a></h3></li>`;
         }
         const html = view.index(list);
         res.end(html);
      });
      break;
   default:
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end();
   }

}).listen(3000, ()=>{
   console.log("server running at http://localhost:3000");
});


//  홈주소/?id=html  화면 하단에 html.txt 보여주기
// <li><h3><a href=""/?id=html">html</a><<h3>/li>