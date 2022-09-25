//비동기적 asynchronous 으로 파일읽기 - 권장
const fs = require("fs");
fs.readFile("tmp/textfile.txt","utf-8", (err,data)=>{
   if (err) //에러낫을떄 에러안내문구출력
      console.log("1111",err);
   else  //에러안낫을때 그냥 읽기
      console.log("파일에서읽은데이터:",data);
});
// fs.readFileSync(파일이름) //동기적으로파일읽기-배제
// fs.readFile(파일이름,콜백함수) //비동기적으로파일읽기