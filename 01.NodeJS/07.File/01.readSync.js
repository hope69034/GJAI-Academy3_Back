//file system 모듈

//파일시스템모듈선언
const fs = require("fs");

//동기적으로 읽는 방법 - 비권장

//encoding 정보를 주지 않으면 binary로 읽음
//cmd에서 실행
const buffer = fs.readFileSync("tmp/textfile.txt");
console.log(buffer)  // ASCII code값
console.log(buffer.toString()) 

// 문자로 읽고 싶으면 인코딩 정보가 필요함
const text = fs.readFileSync("tmp/textfile.txt","utf8");
console.log(text);

//비동기적으로만 가능한 것이 많기 때문에 위 코드는 비권장

