const path = require("path");
console.log(__dirname); // 이프로그램이잇는디렉토리
   // C:\Workspace\03.BackEnd\01.NodeJS
console.log(__filename); //이프로그램의파일이름
   //c:\Workspace\03.BackEnd\01.NodeJS\01.전역변수.js
//상대경로 relative path
const relPath = "tmp/textfile.txt"

//절대경로 absolute path 처음부터끝까지
//const absPath = path.join(__dirname, "tmp", "textfile.txt")
//console.log(absPath)
//위아래둘다가능
const absPath = path.join(__dirname, relPath)
console.log(absPath)