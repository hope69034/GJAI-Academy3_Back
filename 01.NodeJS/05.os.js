const os = require("os");

console.log(os.cpus()); //cpu정보
console.log(os.cpus().length); //시피유 수

console.log(Math.round(os.totalmem()/Math.pow(2,30), 4)+'GB', os.freemem());
                      토탈메모리 기가바이트변환               ,   프리메모리

console.log("토탈메모리",os.totalmem()); // 아래서 기가바이트 단위로 변환
console.log("토탈메모리 "+os.totalmem()/Math.pow(2,30)+" GB"); 

console.log("프리메모리",os.freemem()); // 아래서 기가바이트 단위로 변환
console.log("프리메모리 "+os.freemem()/Math.pow(2,30)+" GB"); 
 
console.log(os.networkInterfaces());  //네트워크정보