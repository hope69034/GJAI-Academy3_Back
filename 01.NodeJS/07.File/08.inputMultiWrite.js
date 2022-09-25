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

r1.setPrompt(">");

r1.prompt();
//버프가 받은 글
//err=>는콜백함수
let input = "";
r1.on("line",buf=>{        //엔터키를치면 라인이벤트가 발생
   input += buf + "\n";         
   r1.prompt();
}).on("close", ()=>{           //다끝나서 컨트롤디가 오면 클로스이벤트가 발생
                          //컨트롤디 ;시엠디창 명령중지
   fs.writeFile(filename,input,err=>{
      if(err)
         console.log(err);
   });
   r1.close();
});

//cmd에서  node thisfile.js filename 로
//실행 후 글 적으면 tmp폴더에 새파일로 생성