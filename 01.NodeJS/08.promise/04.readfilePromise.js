/* const fs = require("fs");
//순서가 보장 방법 2가지\
// CMD실행
fs.readFile("../07.File/tmp/a.txt","utf-8",(err,bufA)=>{
   console.log(bufA)
   fs.readFile("../07.File/tmp/b.txt", "utf-8", (err,bufB)=>{
      console.log(bufB);
      fs.readFile("../07.File/tmp/c.txt", "utf-8", (err,bufC)=>{
         console.log(bufC);
      });
   });
});
 */

const fs = require("fs");

function readFilePromise(path){
   return new Promise((resolve,reject)=>{
      fs.readFile(path,"utf-8",(err,data)=>{
         if (err)
            reject(err);
         else
            resolve(data);
      });
   });
};

//cmd실행
readFilePromise("../07.File/tmp/a.txt")
   .then(val=>{
      console.log(val);
      return readFilePromise("../07.File/tmp/b.txt");})
   .then(val=>{
      console.log(val);
      return readFilePromise("../07.File/tmp/c.txt");})
   .then(console.log);
