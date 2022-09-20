//사용법  node thisfile.js filename

const fs = require("fs");
const readline = require("readline");

// filename  파라미터로 받기
if (process.argv.length<3){
   console.log("사용법  node thisfile.js filename");
   process.exit(); //프로그램멈추기
}
const filename=process.argv[2];
//argv는  node thisfile.js filename

const r1 = readline.createInterface({
	input: process.stdin, //standard input, terminal 키보드로입력한값이스탠다드인풋
	output: process.stdout  //standard output . terminal(monitor) 시엠디창이모니턷ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ
});

r1.prompt(">");

//버프가 받은 글
//err=>는콜백함수
r1.on("line",buf=>{
   fs.writeFile(filename,buf,err=>{
      if(err)
         console.log(err);
   });
   r1.close();
})

//cmd에서  node thisfile.js filename 로
//실행 후 글 적으면 tmp폴더에 새파일로 생성
