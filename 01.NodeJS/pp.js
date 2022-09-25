const os = require("os");


console.log(Math.round(os.totalmem()/Math.pow(2,30), 4)+'GB', os.freemem());
console.log("토탈메모리 "+os.totalmem()/Math.pow(2,30)+" GB"); 

console.log("프리메모리",os.freemem()); // 아래서 기가바이트 단위로 변환