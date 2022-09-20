const fs = require("fs");
//순서가 보장 방법 2가지\
// CMD실행
fs.readFile("../07.File/tmp/a.txt","utf-8",(err,bufA)=>{
   console.log(bufA)
   fs.readFile("../07.File/tmp/b.txt", "utf-8", (err,bufB)=>{
      console.log(bufB);
      fs.readFile("../07.File/tmp/c.txt", "utf-8", (err,bufC)=>{
         console.log(bufC);
      });
   });
});

//이거대신 프라미스 덴덴덴으로 순서를 잘 볼 수 잇게 