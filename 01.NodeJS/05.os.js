const os = require("os");

// console.log(os.cpus()); //cpu정보

const cpus = os.cpus()
console.log("시피유수",cpus.length) //시피유 수
console.log(Math.round(os.totalmem()/Math.pow(2,30), 4)+'GB', os.freemem());

console.log("토탈메모리",os.totalmem()); //토탈메모리\
console.log("프리메모리",os.freemem()); // 프리메모리

console.log("토탈메모리 "+os.totalmem()/Math.pow(2,30)+" GB"); 
console.log("프리메모리 "+os.freemem()/Math.pow(2,30)+" GB"); 

console.log(os.networkInterfaces());