//------------------------------------------------------
/* //사용법  node thisfile.js filename
const fs = require("fs"); //fs모듈선언
const readline = require("readline"); //readline 모듈선언

// filename  파라미터로 받기
if (process.argv.length<3){
   console.log("사용법  node thisfile.js filename");
   process.exit(); //프로그램멈추기
}
const filename=process.argv[2];
//argv는  node thisfile.js filename
console.log(filename) */
//------------------------------------------------------






cmd창에서 인풋 받아서 새 글과 글 내용을 쓰는 방법


cmd창에서 받은 fnInput을(파일네임인풋) 변수로 쓰는 방법
//사용법  node 이파일이름.js 인풋
const fs = require("fs"); //fs모듈선언
const fnInput = process.argv[2];
// cmd 창에서 node thisfile.js input(임의) 이렇게 실행하면 
console.log(fnInput)
console.log(process.argv[2]) //위와 같은 값
// input 으로 입력한 것이 두번 출력
cmd창에서 받은 fnInput이 fnInput 변수로 저장되었다

ex) cmd창에 node pp.js fnInput(임의) 치면
console.log(process.argv[0]) 은  C:\Program Files\nodejs\node.exe
console.log(process.argv[1]) 은  C:\Workspace\03.BackEnd\01.NodeJS\07.File\pp.js
console.log(process.argv[2]) 은  fnInput




fnInput을 변수로 받았으니 이것을 활용하여 fnInput을 파일이름으로 하는 파일을 생성할 수 있다
// readline
// prompt, on('line') 활용
const fs = require("fs"); //fs모듈선언
const readline = require("readline"); //readline 모듈선언

const r1 = readline.createInterface({
	input: process.stdin, //standard input, terminal 키보드로입력한값이스탠다드인풋
	output: process.stdout  //standard output . terminal(monitor) 시엠디창이모니터
});

r1.prompt(">"); //두번째인풋창에 >를 표시해준다

//input은 fsInput파일에 적을 글을 cmd창 인풋으로 받은 글
//err=>는콜백함수
r1.on("line",input은=>{
   fs.writeFile(fsInput,input,err=>{
      if(err)
         console.log(err);
   });
   r1.close();
})

cmd에서  node thisfile.js fsInput(이것이파일네임으로) 치면
다음줄에 > 인풋을 받는 줄이 생긴다 여기에 fsInput파일에 들어갈 내용을 적으면
실행 후 thisfile과 같은 폴더에 파일이름이 fsInput인 글이 생성된다
(같은 이름으로 자꾸 실행하면 기존 파일에 덮어쓰면서 기존 글이 지워진다)