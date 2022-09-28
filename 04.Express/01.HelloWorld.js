//익스프레스모듈
const express = require("express"); //express 프레임워크 선언 익스프레스속에 모듈 많음
const app = express();

// use-익스프레스가뭔가를사용하겟다 middleware 사용할떄많이사용
// http method - get, post, put, delete, all
// listen - 대기타는것  서버읽기

app.get("/",(req,res)=>{
   res.send("<h1>Hello World</h1>");
});

// routing path 별 처리해주는 함수




//아래두개 appget applisten 필수
// status code 404 를 보내는 코드 404라는에러를찍어주는역할 f12 네트워크 스테이터스에 404
app.get("*", (req,res)=>{  //*는 위에서 지정한경로가 아닌 모든 경로 즉 맨뒤에리슨바로위에붙는코드
  /*  res.status(404);
   res.send("path not found"); */
   res.status(404).send("path not found"); //위랑같은코드 메소드체이닝  페스낫파운드는 인터넷창에출력 -인터넷주소뒤에 / 이상한데 쳣을때상황
});

app.listen(3000, (req,res)=>{  //3000은포트 //리슨 기다리고 잇다가 오면 연결
   console.log("server is running at http://127.0.0.1:3000");
});