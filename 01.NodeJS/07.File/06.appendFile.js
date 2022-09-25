async.txt 파일에 "\n어펜드 모드로 동작합니다.\n" 텍스트를
추가하는 방법

const fs = require("fs");
let buffer = "\n어펜드 모드로 동작합니다.\n";

fs.writeFile("tmp/async.txt",buffer,{flag:"a"},err=>{
   if(err)
   console.log(err);
});
//cmd실행하면 txt파일에 글이 아래로 추가로 들어간다
