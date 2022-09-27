const dm = require('./m');

//10문제 동시 작동 가능 // 확인



   // 문제1 걸그룹리스트조회
//완료 작동확인
dm.getGroupList(rows => {
   console.log() //구분선
   console.log("======문제1. 걸그룹리스트조회=========")
   for (let row of rows) {
      console.log(row.gid, row.name, row.debut, row.title);
   
   } 
});   




   // 문제2 송 리스트 조회
//완료 작동확인
dm.getSongList(rows => {
   console.log() //구분선
   console.log("=======문제2. 송리스트조회================")
   for (let row of rows) {
      console.log(row.sid, row.title, row.lyrics, row.name);

   } 
});  





   // 문제3 걸그룹 검색(gid로)
//완료 작동확인
dm.getGirlSearch(1, rows => {
   console.log() //구분선
   console.log("=======문제3. 걸그룹검색================")
   for (let row of rows) {
      console.log(row.gid, row.name, row.debut, row.title);
   }
   console.log()
});  




   // 문제4 송 검색(sid로)
//완료 작동확인
dm.getSongSearch("미스터", rows => {
   console.log() //구분선
   console.log("=======문제4. 송 검색================")
   for (let row of rows) {
      console.log(row.sid, row.title, row.lyrics, row.name);
   }
});  



   // 문제5 걸그룹 추가
//완료 작동확인
//hit_song_id에 Auto_INCREMENT 속성 없을 때
dm.insertPlayer(['csh',"2022-09-10",22], () => {
   dm.getList(rows => {
      console.log()
      console.log("======문제5 걸그룹 추가 (추가됐는지 확인용)=========")
      for (let row of rows) {
         console.log(row.gid, row.name, row.debut, row.hit_song_id);
      }  
   });
});  





 


   // 문제6 걸그룹수정
//완료 작동확인
dm.updatePlayer(["12313332", "2024-09-01", 7 , 15 ], () => {
   dm.getList(rows => {
      console.log()
      console.log("======문제6 걸그룹수정 (수정됐는지확인용)=========")
      for (let row of rows) {
         console.log(row.gid, row.name, row.debut, row.hit_song_id);
      }  
   });
});   






   // 문제7 걸그룹삭제
//완료 작동확인
//걸그룹 이름 기준 삭제
dm.deletePlayer("csh", () => {
   dm.getList(rows => {
      console.log()
      console.log("======문제7 걸그룹삭제 (삭제됐는지확인용)=========")
      for (let row of rows) {
         console.log(row.gid, row.name, row.debut, row.hit_song_id);
      }  
   });
});   


   // 문제8 송 추가
//완료 작동확인
dm.insertSong(['송추34', '송가사2'], () => {
   dm.getAllSongList(rows => {
      console.log() //구분선
      console.log("======문제8 송추가 (추가됐는지확인용)=========")
      for (let row of rows) {
         console.log(row.sid, row.title, row.lyrics);
      }   
   });
});  

   
   
   
   // 문제9 송 수정
//완료 작동확인
dm.updateSong(['송', '송가', 133], () => {
   dm.getAllSongList(rows => {
      console.log() //구분선
      console.log("====== 문제9 송 수정 (수정됐는지확인용)=========")
      for (let row of rows) {
         console.log(row.sid, row.title, row.lyrics);
      }   
   });
});     




   // 문제10 송 삭제
//완료 작동확인
// 송 타이틀기준 삭제
dm.deleteSong("송", () => {
   dm.getAllSongList(rows => {
      console.log() //구분선
      console.log("====== 문제10 송삭제 (삭제됐는지확인용)=========")
      for (let row of rows) {
         console.log(row.sid, row.title, row.lyrics);
      }   
   });
});   



///////////////////////////////////////////////////


   //보조펑션1. 모든 가수 목록 출력  
//완료 작동확인
/* dm.getList(rows => {
   console.log() //구분선
   console.log("======보조펑션1. 모든 가수 목록 출력=========")
   for (let row of rows) {
      console.log(row.gid, row.name, row.debut, row.hit_song_id);
   }
   console.log()
});    */

   //보조펑션2. 모든 노래제목 출력 
//완료 작동확인
/* dm.getAllSongList(rows => {
   console.log() //구분선
   console.log("======보조펑션2. 모든 노래제목 출력=========")
   for (let row of rows) {
      console.log(row.sid, row.title, row.lyrics);
   }
   console.log()
});    */
