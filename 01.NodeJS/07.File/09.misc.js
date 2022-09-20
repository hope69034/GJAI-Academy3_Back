const fs = require("fs");

// 디렉토리에 잇는 파일 목록 알아내기
//cmd창실행
/* fs.readdir("tmp",(err,files)=>{
   console.log(files);
}); */

//파일의 정보 (stat) 알아내기
/* fs.stat("tmp/a.txt", (err,stats)=>{
   console.log("스탯사이즈(파일크기)",stats.size);
   console.log("스탯엠타임(최종수정시간)",stats.mtime);
}); */



/////////////////////////////////////////////////
/////////////////////////////////////////////////



//디렉토리에 잇는 파일에 대하여 최종수정시간, 파일의 킈기, 파일명 표시
//내가한것
let array2=[]
let array =[];
let array3=[]
fs.readdir("tmp",(err,files)=>{

   for (let i=0; i<= 6; i++){
      array.push(files[i]);
   };

   for (let i=0; i<= 6; i++){
      fs.stat("tmp/"+array[i], (err,stats)=>{
         array2.push(array[i], stats.size, stats.mtime); 
         if (i==6){
            for (let k=0; k<=15; k+=3) {
               array3.push(`파일명: ${array2[k]} / 파일사이즈: ${array2[k+1]} / 파일최종수정시간: ${array2[k+2]}`)
               if (k==15)
                  console.log(array3)
            } 
         }
      })
   };
});    

//선생님코드
// 디렉토리에 있는 파일에 대하여 최종 수정시간, 파일의 크기, 파일 이름 표시
fs.readdir('tmp', (err, files) => {
   for (let file of files) {
      fs.stat('tmp/'+file, (err, stats) => {
         console.log(`${stats.mtime}\t${stats.size}\t${file}`);
      });
   }
});


/////////////////////////////////////////////////
/////////////////////////////////////////////////


// 파일 삭제하기(unlink)
fs.unlink('tmp/single.txt', err => {
   if (err)
      console.log(err);
});

// 파일 이름 변경(rename)
fs.rename('tmp/single.txt', 'tmp/싱글.txt', err => {
   if (err)
      console.log(err);
});

