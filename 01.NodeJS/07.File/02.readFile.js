//비동기적 asynchronous 으로 파일읽기 - 권장
const fs = require("fs");
fs.readFile("tmp/textfile.txt","utf-8", (err,data)=>{
   /* 나중에 production(실제서비스해주는상황)에서는 에러처리를 반드시
    할 것
   if (err) //에러낫을떄
      console.log("1111",err);
   else  //에러안낫을때
      console.log("파일에서읽은데이터:",data);*/

   //파일의에러는잘발생하지않으므로 error 부분을 처리
   console.log("파일에서읽은데이터:",data);
});

