//라우터 쪼개기

const shoppingRouter = require("./routes/07.shoppingRouter");

const express = require("express"); //express 프레임워크 선언 익스프레스속에 모듈 많음
const app = express();
app.use(express.static(__dirname + "/public"));   // _dirname + "/public"퍼블릭디렉토리  경로   여기를  스택틱으로 쓴다

const bbsRouter = express.Router();
const userRouter = express.Router();

app.use("/bbs", bbsRouter)  // "/bbs" 는 localhost3000/bbs 를 말함  이것은 > bbsRouter 를 사용한다는 말
app.use("/user", userRouter) 

app.use("/shopping", shoppingRouter)   // 07 쇼핑라우터(라우츠폴더속)  파일에서 로드해서 쓰는


app.get("/",(req,res)=>{
   res.send(`<h1>router</h1>`);
});

bbsRouter.get("/list", (req,res)=>{
   res.send(`<h1>http://localhost:3000/bbs/list</h1>`);
});
bbsRouter.get("/write", (req,res)=>{
   res.send(`<h1>http://localhost:3000/bbs/write</h1>`);
});
bbsRouter.get("/update", (req,res)=>{
   res.send(`<h1>http://localhost:3000/bbs/update</h1>`);
});

userRouter.get("/register", (req,res)=>{
   res.send(`<h1>http://localhost:3000/user/register</h1>`);
});

 


///////////////////////////////////////////////////

// 아래 두개는 필수 코드


app.get("*", (req,res)=>{  //*는 위에서 지정한경로가 아닌 모든 경로 즉 맨뒤에리슨바로위에붙는코드
   res.status(404).send("path not found"); //위랑같은코드 메소드체이닝  페스낫파운드는 인터넷창에출력 -인터넷주소뒤에 / 이상한데 쳣을때상황
});

app.listen(3000, (req,res)=>{  //3000은포트 //리슨 기다리고 잇다가 오면 연결
   console.log("server is running at http://127.0.0.1:3000");
});