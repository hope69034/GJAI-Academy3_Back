//readline 모듈 사용하기

const readline = require("readline");
const r1 = readline.createInterface({
	input: process.stdin, //standard input, terminal 키보드로입력한값이스탠다드인풋
	output: process.stdout  //standard output . terminal(monitor) 시엠디창이모니턷ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ
});

r1.setPrompt("숫자를입력하세요.");  //시엠디창에서 파이썬input같은역할

//  I/0(input, 파일읽기쓰기데이터통신등) //작업은콜백에서처리함
/* r1.prompt();
r1.on("line", (buf) = {  //숫자입력하고 엔터 치면 발생하는 이벤트
	let num=parseInt(buf);
	let evenOdd=(num%2==0) ?"짝수" : "홀수"
	console.log(`입력한 숫자는" ${num}이고 ${evenOdd}입니다.`)
	r1.prompt();
	// r1.close() //끝날 때 반드시 처리해야 함

}) */


//  I/0(input, 파일읽기쓰기데이터통신등) //작업은콜백에서처리함
r1.prompt();
r1.on("line", (data) = {  //숫자입력하고 엔터 치면 발생하는 이벤트
	console.log(data);
	r1.prompt();
})


