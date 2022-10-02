//cmd 실행
// views폴더속 08파일.html이랑연결

//익스프레스
const express = require("express"); //express 프레임워크 선언 익스프레스속에 모듈 많음
const app = express();

//파일시스템
const fs = require("fs");

//스택틱
app.use(express.static(__dirname + "/public"));  

//바디
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false})); // 바디파서를 사용하겟다는 의미  urlencoded마임형식

//멀터
const multer = require("multer"); //미들웨어 //멀터선언
//multer setting, 파일가져와서 저장위치에 저장
const upload = multer({
   storage: multer.diskStorage({
      destination: __dirname + "/public/upload/",   //저장위치설정
      filename: (req,file, next) => { // 넥스트콜백함수  
         next(null,file.originalname);
      } 
   })   
});

//홈
app.get("/",(req,res)=>{
   res.send(`<h1>file upload</h1>`);
});

//
app.get("/file", (req,res)=>{
   fs.readFile("views/08.file.html", "utf8" ,(err,html)=>{  //이건캐릭터니까 유티에프팔로읽기       
      //    "public/고양이.jpg"  이랑 "./public/고양이.jpg" 은 가능 
      //    "/public/고양이.jpg"  은 에러  
      res.send(html);
   });
});

// upload.single("image")  위에서 지정한 업로드 폴더로 유저가 업로드한 파일이 다운된다
//여기서 "image" 바꾸면에러
app.post("/file", upload.single("image"), (req,res)=>{  //업로드디렉토리에파일을올려줌
   const comment = req.body.comment; //코멘트추가받기
   res.send(`<h1>comment: ${comment}</h1>
   <h1>filename: ${req.file.filename}</h1> 
      `); //코멘트랑 유저가 업로드한 파일이름 보여주기
});

///////////////////////////////////////////////////

// 아래 두개는 필수 코드

app.get("*", (req,res)=>{  //*는 위에서 지정한경로가 아닌 모든 경로 즉 맨뒤에리슨바로위에붙는코드
   res.status(404).send("path not found"); //위랑같은코드 메소드체이닝  페스낫파운드는 인터넷창에출력 -인터넷주소뒤에 / 이상한데 쳣을때상황
});

app.listen(3000, (req,res)=>{  //3000은포트 //리슨 기다리고 잇다가 오면 연결
   console.log("server is running at http://127.0.0.1:3000");
});