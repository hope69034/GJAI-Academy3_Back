const express = require("express"); //express 프레임워크 선언 익스프레스속에 모듈 많음
const app = express();

//request 헤더 값읽기
app.get("/",(req,res)=>{
   const agent2 = res.header("user-Agent")
   const host2= res.header("host")
   res.send(`user-agent2값: ${agent2}  <br> 호스트 ${host2}`); 
});

//response header의 값을 설정
// http://localhost:3000/set/key/value 로 진입
app.get("/set/:key/:value", (req,res)=>{
   const key = req.params.key;
   const value = req.params.value;
   res.set(key,value); //셋에의해 key:value묶임 f12 네트워크 헤더에
   res.send(`<h3>key=${key} value=${value}</h3>`)
})

// http://localhost:3000/query?id=123
app.get("/query", (req,res)=>{  //, (req,res) 이자린항상콜백함수가온다
   const id = req.query.id;  // ?id=123  필드명은 id 값은 123
   res.send(`<h1>/query: id - ${id}</h1>`);
}) 

app.get("/params/id/:id", (req,res)=>{  //, (req,res) 이자린항상콜백함수가온다
   const id = req.params.id;  // ?id=123  필드명은 id 값은 123
   res.send(`<h1>/params: id - ${id}</h1>`);
}) 

//////
app.get("*", (req,res)=>{  //*는 위에서 지정한경로가 아닌 모든 경로 즉 맨뒤에리슨바로위에붙는코드
   res.status(404).send("path not found"); //위랑같은코드 메소드체이닝  페스낫파운드는 인터넷창에출력 -인터넷주소뒤에 / 이상한데 쳣을때상황
});

app.listen(3000, (req,res)=>{  //3000은포트 //리슨 기다리고 잇다가 오면 연결
   console.log("server is running at http://127.0.0.1:3000");
});

