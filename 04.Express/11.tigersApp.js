//타이거스템플릿활용 그리고 25.app최종을 바꾼것

//cmd 실행
const express = require("express"); //express 프레임워크 선언 익스프레스속에 모듈 많음
const bodyParser = require("body-parser");
const dm = require("./db/tigers-module");
const template = require("./views/tigers-template");

const app = express();
 
app.use(express.static(__dirname + "/public"));   // _dirname + "/public"퍼블릭디렉토리  경로   여기를  스택틱으로 쓴다
//기본경로 스택틱을 퍼블릭으로 해줬기 때문에 에이치티엠엘에 그대로/고양이 jpg로 시작해도된다
//퍼블릭부터출발하는디렉토리
app.use(bodyParser.urlencoded({extended: false})); // 바디파서를 사용하겟다는 의미  urlencoded마임형식
 





app.get("/",(req,res)=>{
   dm.getList(rows => {
      const trs = template.trsGen(rows);
      const html = template.home(trs);
      res.send(html);
   });
});
 


app.get("/create", (req,res)=>{
   const html = template.createForm();
   res.send(html);
});


app.post("/create" , (req,res)=>{
   const player = req.body.player;
   const backNo = parseInt(req.body.backNo);
   const position = req.body.position;
   dm.insertPlayer([player,backNo,position],()=>{
      res.redirect("/");      //res semd아니면 res redirect로 끝난다
   });  //dm은디비모듈 변수
});




app.get("/update",(req,res)=>{  //http://localhost:3000/update?id=123 
   const id = parseInt(req.query.id);  // 아이디는 쿼리로 받는다
   dm.getPlayer(id,rows=>{ //rows는 데이터가1개라도 배열로 만들어진다
      const player=rows[0].player; //[0]첫행
      const backNo=parseInt(rows[0].backNo); //[0]첫행
      const position=rows[0].position; //[0]첫행
      const html = template.updateForm(id,player,backNo,position);
      res.send(html);  //업데이트에서업데이트폼을줫다
   });

});


app.post("/update", (req,res)=>{
   const id =  parseInt(req.body.id);  // 바로위 updateform.에서 오니까
        //쿼리.id로 오는게 아니라 body로 온다
   const player = req.body.player;
   const backNo = parseInt(req.body.backNo);
   const position = req.body.position;
   dm.updatePlayer([player,backNo,position,id],()=>{
      res.redirect("/");       //끝나고 홈으로가기
   });  

});

 



app.get("/delete", (req,res)=>{  //http://localhost:3000/delete?id=123   //식으로오는거라 ?이거  쿼리 아이디로 받는다
   const id = parseInt(req.query.id)
   const html = template.deleteForm(id);
   res.send(html);
});

app.get("/deleteConfirm", (req,res)=>{
   const id = parseInt(req.query.id);
   dm.deletePlayer(id, ()=>{      //parseInt(req.query.id)
      res.redirect("/");
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