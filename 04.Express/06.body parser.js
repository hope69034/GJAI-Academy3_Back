//cmd 실행
const express = require("express"); //express 프레임워크 선언 익스프레스속에 모듈 많음
const app = express(); // app.

const fs = require("fs"); //파일시스템 파일읽고쓰기등
const path = require("path");  
//스택틱설정
app.use(express.static(__dirname + "/public")); 

const bodyParser = require("body-parser");  //바디파서선언
app.use(bodyParser.urlencoded({extended: false}));  
// 바디파서를 사용하겟다는 의미(req.body.uid)  url encoded 마임형식

app.get("/",(req,res)=>{ //홈
   res.send(`<h1>body-parser middleware</h1>`);
});

app.get("/login", (req,res)=>{
   fs.readFile("views/06.login.html", "utf8" ,(err,html)=>{  //이건캐릭터니까 유티에프팔로읽기       
      res.send(html);
   });
});

app.post("/login", (req,res)=>{
   const uid =req.body.uid; //위에서 겟으로 넘긴 정보를 req.바디로 받는다
   const pwd = req.body.pwd;
   res.send(`<h1>사용자id: ${uid} 패스워드: ${pwd}</h1>`); 
});  //로긴화면에서 유저가입력하면 그걸띄운다
   //   path?uid =        req.query.uid
     //  path/:uid         req.params.uid
      // form Date(uid)    req.body.uid 로 읽는다
       //app.use(bodyParser.urlencoded({extended: false})); 으로 가능한 일 이게 미들웨어
 
///////////////////////////////////////////////////

// 아래 두개는 필수 코드


app.get("*", (req,res)=>{  //*는 위에서 지정한경로가 아닌 모든 경로 즉 맨뒤에리슨바로위에붙는코드
   res.status(404).send("path not found"); //위랑같은코드 메소드체이닝  페스낫파운드는 인터넷창에출력 -인터넷주소뒤에 / 이상한데 쳣을때상황
});

app.listen(3000, (req,res)=>{  //3000은포트 //리슨 기다리고 잇다가 오면 연결
   console.log("server is running at http://127.0.0.1:3000");
});