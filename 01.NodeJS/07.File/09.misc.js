const fs = require("fs");
// 디렉토리에 잇는 파일 목록 알아내기
// thisfile 경로에 있는 폴더를 " " 에 넣어주면 그 폴더속 파일이름들을 출력한다
fs.readdir("tmp",(err,files)=>{
   console.log(files);
}); 
//cmd창 node thisfile.js 실행

/////////////////////////////////////////////////


//파일의 정보 (stat) 알아내기
const fs = require("fs");
" " 에 경로/파일이름 이나 thisfile에 바로 있는 파일이름을
넣으면 파일스탯을 출력한다

fs.stat("tmp/a.txt", (err,stats)=>{
   console.log("스탯사이즈(파일크기)",stats.size);
   console.log("스탯엠타임(최종수정시간)",stats.mtime);
}); 

/////////////////////////////////////////////////

위에서 파일이름 파일크기 파일최종수정시간을 알아냈다
이 3가지를 동시에 출력하는 방법
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
fs.readdir('tmp', (err, files) => {  // "tmp" 폴더경로를 지정하고 files를 뽑으면 폴더 속 파일이름들이 뽑힌다
   for (let file of files) {    // for let of 로 배열 속 각 밸류들을 뽑는다 즉 파일 하나씩 뽑기
      fs.stat('tmp/'+file, (err, stats) => {   // file이 파일이름이니까 'tmp/'+file로 경로를 잡아주고 스탯을 뽑고
         console.log(`${stats.mtime}\t${stats.size}\t${file}`); // 수정시간 사이즈 파일이름 순으로 출력한다
      });  // \t 은 탭으로 줄을 맞춰주는 것이다
   }
});






//////////////////////////////////
////////////////////////////////////////////////////////////////








파일 삭제하기(unlink)

fs.unlink('경로/삭제할파일.txt', err => {
   if (err)
      console.log(err);
});




파일 이름 변경(rename)

fs.rename('경로/이름바꿀파일.txt', '경로/새이름.txt', err => {
   if (err)
      console.log(err);
});

