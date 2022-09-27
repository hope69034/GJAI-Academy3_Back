파일읽기 2가지

const async = require("async");
const fs = require("fs");
//이런것이잇구나~

// cmd 실행

//순서보장안되는코드  - 비동기적
fs.readFile("./07.File/tmp/a.txt", "utf-8", (err,bufA)=>{
   console.log(bufA);
})
fs.readFile("./07.File/tmp/b.txt", "utf-8", (err,bufB)=>{
   console.log(bufB);
})
fs.readFile("./07.File/tmp/c.txt", "utf-8", (err,bufC)=>{
   console.log(bufC);
})  


// cmd 실행

//abc순서보장o   - 동기적
async.parallel({
   bufA: function(callback){
      fs.readFile("07.File/tmp/a.txt","utf-8",callback);
   },
   bufB: function(callback){
      fs.readFile("07.File/tmp/b.txt","utf-8",callback);
   },
   bufC: function(callback){
      fs.readFile("07.File/tmp/c.txt","utf-8",callback);
   }   

}, (err,result)=>{
   console.log(result.bufA);
   console.log(result.bufB);
   console.log(result.bufC);
});