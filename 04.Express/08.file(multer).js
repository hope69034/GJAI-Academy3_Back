//cmd 실행
// views폴더속 08파일.html이랑연결

const express = require("express"); //express 프레임워크 선언 익스프레스속에 모듈 많음
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer"); //미들웨어

 
 
app.use(express.static(__dirname + "/public"));  
app.use(bodyParser.urlencoded({extended: false})); // 바디파서를 사용하겟다는 의미  urlencoded마임형식

//multer setting 파일가져오기위한
const upload = multer({
   storage: multer.diskStorage({
      destination: __dirname + "/public/upload/",   //저장위치설정
      filename: (req,file, next) => { // 넥스트콜백함수  
         next(null,file.originalname);
      } 
   })   
});




  
 
app.get("/",(req,res)=>{
   res.send(`<h1>file upload</h1>`);
});

app.get("/file", (req,res)=>{
   fs.readFile("views/08.file.html", "utf8" ,(err,html)=>{  //이건캐릭터니까 유티에프팔로읽기       
      //    "public/고양이.jpg"  이랑 "./public/고양이.jpg" 은 가능 
      //    "/public/고양이.jpg"  은 에러  
      res.send(html);
   });
});

 
app.post("/file", upload.single("image"), (req,res)=>{  //업로드디렉토리에파일을올려줌
/*    const comment = req.body.comment;
   res.send(`<h1>comment: ${comment}</h1>`); */

   const comment = req.body.comment;
   console.log(req.file);
   res.send(`<h1>comment: ${comment}</h1>
   <h1>filename: ${req.file.filename}</h1> 
      `);
   )

});


 
///////////////////////////////////////////////////

// 아래 두개는 필수 코드


app.get("*", (req,res)=>{  //*는 위에서 지정한경로가 아닌 모든 경로 즉 맨뒤에리슨바로위에붙는코드
   res.status(404).send("path not found"); //위랑같은코드 메소드체이닝  페스낫파운드는 인터넷창에출력 -인터넷주소뒤에 / 이상한데 쳣을때상황
});

app.listen(3000, (req,res)=>{  //3000은포트 //리슨 기다리고 잇다가 오면 연결
   console.log("server is running at http://127.0.0.1:3000");
});


 







