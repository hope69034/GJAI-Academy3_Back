const fs = require("fs");
fs.readdir('tmp', (err, files) => {  // "tmp" 폴더경로를 지정하고 files를 뽑으면 폴더 속 파일이름들이 뽑힌다
   for (let file of files) {    // for let of 로 배열 속 각 밸류들을 뽑는다 즉 파일 하나씩 뽑기
      fs.stat('tmp/'+file, (err, stats) => {   // file이 파일이름이니까 'tmp/'+file로 경로를 잡아주고 스탯을 뽑고
         console.log(`${stats.mtime}\t${stats.size}\t${file}`);
      });
   }
});