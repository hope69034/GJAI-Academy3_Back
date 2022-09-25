const fs = require("fs");
// Multi readFileSync
//리드파일싱크 - 비권장 - 동기적
let bufA = fs.readFileSync("tmp/a.txt","utf-8");
let bufB = fs.readFileSync("tmp/b.txt","utf-8");
let bufC = fs.readFileSync("tmp/c.txt","utf-8");

console.log(bufA)  //cmd창실행
console.log(bufB) 
console.log(bufC)