
//cmd실행
const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require("querystring");

//유저가입력한데이터가 멤버스에잇으면 사용자이름-님 환영합니다 출력
//없으면 다시임력하세요 출력
const members = [{uid: "james", pwd: "1111",name:"james"}, 
                  {uid:"maria",pwd:"2222",name:"maria"}]

const server = http.createServer((req, res) => {
   let pathname = url.parse(req.url).pathname;
   let method= req.method;
   
   switch(pathname){
   case "/input": 
      if (method==="GET"){ //입력양식화면을사용자에게보여줌
         fs.readFile('view/12.form.html', 'utf8', (err, html) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
         });   
      }
      else {
         let body="";
         req.on("data",data=>{
            body+=data;
         }); //리퀘스트로데이터를보내겟다 데이터를 바디에누적
         req.on("end",()=>{
            const param=qs.parse(body);
            //입력데이터로필요한작업을수행 ex)로그인
            // 다음작업을위한화면을보내줌 
            //console.log(param);
            //console.log(param.uid, param.pwd);
            const uid = param.uid
            const pwd = param.pwd
            let flag = true;
            for (let member of members){
               if (member.uid==uid && member.pwd==pwd) {
                  res.end(`<h1>${member.name} welcome<h1>`);
                  flag=false;
               }
            }
            //res.end(`<h1>UID: ${param.uid}, PWD: ${param.pwd}</h1>`);
            if (flag)
               res.end(`<h1>re-enter the form</h1>`);
         })
      } // GET,POST,PUT,DELETE
      break;
   default:
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end();

}});


   

server.listen(3000, () => {
   console.log('Server running at http://localhost:3000');
});


   
   //엘스와 같은코드
   //else if (method==="POST"){
   //} // GET,POST,PUT,DELETE
 