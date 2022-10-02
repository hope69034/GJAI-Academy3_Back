//
const express = require("express"); //express 프레임워크 선언 익스프레스속에 모듈 많음
const app = express();

const fs = require("fs");

const ejs=require("ejs"); //익스텐디드자바스크립트(템플릿엔진)

app.use(express.static(__dirname + "/public"));   // _dirname + "/public"퍼블릭디렉토리  경로   여기를  스택틱으로 쓴다
//기본경로 스택틱을 퍼블릭으로 해줬기 때문에 에이치티엠엘에 그대로/고양이 jpg로 시작해도된다
//퍼블릭부터출발하는디렉토리

//app.set("view engine","ejs"); //뷰엔진에서 ejs를 쓰겟다  이 코드에서는 빼도 무방
//app.set("view" , __dirname + "/views");  //뷰엔진에서 ejs를 쓰겟다  이 코드에서는 빼도 무방

app.get("/",(req,res)=>{ //3000 홈
   res.send(`<h1>static</h1>`);
});

app.get("/static", (req,res)=>{
   fs.readFile("views/05.static.html", "utf8" ,(err,html)=>{  //이건캐릭터니까 유티에프팔로읽기       
      res.send(html);
   });
});

//ejs에 있는 <%- data %> 변수의 값 넣어주기
app.get("/ejs",(req,res)=>{     // 05.static.ejs 에서 <%= data %> 로  "ejs에서 보내는 데이터" 문구를 받았다
   ejs.renderFile("./views/05.static.ejs", {data:"EJS에서 보내는 데이터"}, (err,html)=>{
      res.send(html);
   });
});

///////////////////////////////////////////////////

// 아래 두개는 필수 코드


app.get("*", (req,res)=>{  //*는 위에서 지정한경로가 아닌 모든 경로 즉 맨뒤에리슨바로위에붙는코드
   res.status(404).send("path not found"); //위랑같은코드 메소드체이닝  페스낫파운드는 인터넷창에출력 -인터넷주소뒤에 / 이상한데 쳣을때상황
});

app.listen(3000, (req,res)=>{  //3000은포트 //리슨 기다리고 잇다가 오면 연결
   console.log("server is running at http://127.0.0.1:3000");
});