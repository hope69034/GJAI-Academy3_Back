//html파일을 모듈이 아닌 파일에서 읽어서 가지고 오기

const http=require("http");
const fs=require("fs");

//이미지
const server = http.createServer((req,res)=>{
   fs.readFile("media/samplejpeg.jpeg", (err,image)=>{
      res.writeHead(200,{"Content-Type":"image/jpeg"});
      res.end(image);
   })
})

//오디오
/* const server = http.createServer((req,res)=>{
   fs.readFile("media/samplemp3.mp3", (err,audio)=>{
      res.writeHead(200,{"Content-Type":"audio/mp3"});
      res.end(audio);
   })
}) */

//비디오
/* const server = http.createServer((req,res)=>{
   fs.readFile("media/samplemp4.mp4", (err,video)=>{
      res.writeHead(200,{"Content-Type":"video/mp4"});
      res.end(video);
   })
}) */


server.listen(3000)
