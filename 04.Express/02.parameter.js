const express = require("express"); //express 프레임워크 선언 익스프레스속에 모듈 많음
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>");
});

// http://localhost:3000/query?id=123
app.get("/query", (req,res)=>{  //, (req,res) 이자린항상콜백함수가온다
    const id = req.query.id;  // ?id=123  필드명은 id 값은 123
    res.send(`<h1>/query: id - ${id}</h1>`);
}); 

// 쿼리랑 파람은 리퀘스트의 객체
// 아이디를 받아올 땐 쿼리.아이디가 필수
// 아래서 값을 받아올 땐 파람스.아이디가 필수

// http://localhost:3000/params/id/123 로들어가면 >/params: id - ${id} 출력
app.get("/params/id/:id", (req,res)=>{  //, (req,res) 이자린항상콜백함수가온다
    const id = req.params.id;   
    res.send(`<h1>/params: id - ${id}</h1>`);
});




//아래두개 appget applisten 필수
app.get("*", (req,res)=>{  //*는 위에서 지정한경로가 아닌 모든 경로 즉 맨뒤에리슨바로위에붙는코드
   res.status(404).send("path not found"); //위랑같은코드 메소드체이닝  페스낫파운드는 인터넷창에출력 -인터넷주소뒤에 / 이상한데 쳣을때상황
});

app.listen(3000, (req,res)=>{  //3000은포트 //리슨 기다리고 잇다가 오면 연결
   console.log("server is running at http://127.0.0.1:3000");
});