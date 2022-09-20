const async = require("async");
const fs = require("fs");
//이런것이잇구나~

//순서보장안되는코드
/* fs.readFile("tmp/a.txt", "utf-8", (err,bufA)=>{
   console.log(bufA);
})
fs.readFile("tmp/b.txt", "utf-8", (err,bufB)=>{
   console.log(bufB);
})
fs.readFile("tmp/c.txt", "utf-8", (err,bufC)=>{
   console.log(bufC);
})  */

//abc순서보장
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


