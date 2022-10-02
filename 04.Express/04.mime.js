// mime 은 데이터의 타입을 이야기한다 고 알면 된다 multipurpose internet mail extensions
const express = require("express"); //express 프레임워크 선언 익스프레스속에 모듈 많음
const app = express();

const fs = require("fs"); //파일시스템

app.get("/",(req,res)=>{ //홈  http://127.0.0.1:3000 
   res.send(`mime`); //글자mime출력
});

 app.get("/image", (req,res)=>{  //http://127.0.0.1:3000/image/ 주소로연결되는것
   fs.readFile("public/고양이.jpg" ,(err,image)=>{    //퍼블릭폴더에서고양이를 읽기    
      //    "public/고양이.jpg"  이랑 "./public/고양이.jpg" 은 가능 
      //    "/public/고양이.jpg"  은 에러  
      res.type("image/jpg");      // image/jpg 이게 마임타입 mime type
      res.send(image);
   });
});  

  app.get("/audio", (req,res)=>{
   fs.readFile("public/mp3_sample.mp3" ,(err,audio)=>{
      res.type("audio/mp3");    // image/jpg 이게 마임타입 mime type
      res.send(audio); //에러
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