// 비동기적

const fs= require("fs");

//cmd

//이렇게 읽으면 순서 보장이 되지 않는다 abc bca...
/* fs.readFile("tmp/a.txt", "utf-8", (err,bufA)=>{
   console.log(bufA);
})
fs.readFile("tmp/b.txt", "utf-8", (err,bufB)=>{
   console.log(bufB);
})
fs.readFile("tmp/c.txt", "utf-8", (err,bufC)=>{
   console.log(bufC);
}) */

//순서가 보장 방법 2가지
fs.readFile("tmp/a.txt","utf-8",(err,bufA)=>{
   console.log("순서보장법1")
   console.log(bufA)
   fs.readFile("tmp/b.txt", "utf-8", (err,bufB)=>{
      console.log(bufB);
      fs.readFile("tmp/c.txt", "utf-8", (err,bufC)=>{
         console.log(bufC);
      });
   });
});
//(err,bufA)=>{} 콜백함수
fs.readFile("tmp/a.txt","utf-8",(err,bufA)=>{
   
   fs.readFile("tmp/b.txt", "utf-8", (err,bufB)=>{
      fs.readFile("tmp/c.txt", "utf-8", (err,bufC)=>{
         console.log("순서보장법2")
         console.log(bufA)
         console.log(bufB);
         console.log(bufC);
      });
   });
});
 