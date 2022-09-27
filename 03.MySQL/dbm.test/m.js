const mysql = require('mysql');
const config = require('./mysql.json');
/* 1234 는테이블조인 */
//본인이름zip으로제출
// db모둘db테스트파일
module.exports = {



   //1 걸그룹 리스트 조회
   //gid 걸그룹이름 데뷔일 히트곡명
//완료
   getGroupList: function(callback) {
      const conn = this.getConnection();
      const sql = `
      SELECT   girl_group.gid, girl_group.name, date_format(girl_group.debut, '%Y-%m-%d' ) as debut, song.title
      FROM song
      JOIN girl_group
      ON song.sid = girl_group.hit_song_id;
      `;
      conn.query(sql, (err, rows, fields) => {
         
         if (err)
               throw err;
         callback(rows);      
         
      });
      conn.end();
   },

   // 2 송 리스트 조회
   // sid 노래제목 가사 걸그룹명
//완료
   getSongList: function(callback) {
      const conn = this.getConnection();
      const sql = `
      SELECT  song.sid, song.title, song.lyrics, girl_group.name
      FROM song
      JOIN girl_group
      ON song.sid = girl_group.hit_song_id;
      `;
      conn.query(sql, (err, rows, fields) => {
         
         if (err)
               throw err;
         callback(rows);      
         
      });
      conn.end();
   },


   // 3 걸그룹 검색(gid로)
   // gid, 걸그룹이름, 데뷔일, 히트곡명
//완료
   getGirlSearch: function(params, callback) {
      const conn = this.getConnection();
      const sql = `
      SELECT  girl_group.gid, girl_group.name, date_format(girl_group.debut, '%Y-%m-%d' ) as debut,  song.title
      FROM song
      JOIN girl_group
      ON song.sid = girl_group.hit_song_id
      WHERE girl_group.gid=?;
      `;
      conn.query(sql, params, (err, rows, fields) => {
         
         if (err)
               throw err;
         callback(rows);      
         
      });
      conn.end();
   },


   // 4 송 검색(sid로)
   // sid, 노래제목, 가사, 걸그룹명
//완료
   getSongSearch: function(params, callback) {
      const conn = this.getConnection();
      const sql = `
      SELECT  song.sid, song.title, song.lyrics, girl_group.name
      FROM song
      JOIN girl_group
      ON song.sid = girl_group.hit_song_id
      where song.title=?;
      `;
      conn.query(sql, params, (err, rows, fields) => {
         
         if (err)
               throw err;
         callback(rows);      
         
      });
      conn.end();
   },




   // 5 걸그룹 추가 걸그룹테이블에추가
//완료
   insertPlayer: function(params, callback) {
      const conn = this.getConnection();
      const sql = `
INSERT INTO girl_group (name, debut, hit_song_id)
VALUES (?, ?,?);
`;
      conn.query(sql, params, (err, fields) => {
         if (err)
               throw err;
         callback();
      });
      conn.end();
   },







  // 6 걸그룹 수정
//완료
updatePlayer: function(params, callback) {
   const conn = this.getConnection();
   const sql = `
UPDATE girl_group 
SET name=?, debut=?, hit_song_id=?
WHERE gid=?;
`;
   conn.query(sql, params, (err, fields) => {
      if (err)
            throw err;
      callback();
   });
   conn.end();
},  



   // 7 걸그룹 삭제
//완료
deletePlayer: function(params, callback) {
   const conn = this.getConnection();
   const sql = `delete from girl_group where Name=?;`;
   conn.query(sql, params, (err, fields) => {
      if (err)
            throw err;
      callback();
   });
   conn.end();
},


   // 8 송 추가
//완료
insertSong: function(params, callback) {
   const conn = this.getConnection();
   const sql = `
   iNSERT INTO song (title, lyrics)
   VALUES (?, ?);
`;
   conn.query(sql, params, (err, fields) => {
      if (err)
            throw err;
      callback();
   });
   conn.end();
},   
   
   // 9 송 수정
//완료
   updateSong: function(params, callback) {
      const conn = this.getConnection();
      const sql = `
UPDATE song 
SET title=?, lyrics=?
WHERE sid=?;
`;
      conn.query(sql, params, (err, fields) => {
         if (err)
               throw err;
         callback();
      });
      conn.end();
   },



   // 10 송삭제
//완료
   deleteSong: function(params, callback) {
      const conn = this.getConnection();
      const sql = `
delete from song 
where title=?;
`;
      conn.query(sql, params, (err, fields) => {
         if (err)
               throw err;
         callback();
      });
      conn.end();
   },





////////////////////////////////////////////
   

   //겟컨넥션 필수 펑션
   getConnection: function() {
      const conn = mysql.createConnection(config);
      conn.connect(err => {
         if (err) {
               console.log('mysql connection error');
               console.log(err);
         }
      });
      return conn;
   },


   //보조펑션1. 모든 가수 출력  (코드정상작동확인용펑션)
//완료
getList: function(callback) {
   const conn = this.getConnection();
   const sql = `
SELECT gid, name, date_format(girl_group.debut, '%Y-%m-%d' ) as debut, hit_song_id 
FROM girl_group
;`;
   conn.query(sql, (err, rows, fields) => {
      if (err)
            throw err;
      callback(rows);      
   });
   conn.end();
},


   //보조펑션2. 모든 노래제목 출력 (코드정상작동확인용펑션)
//완료
getAllSongList: function(callback) {
   const conn = this.getConnection();
   const sql = `
SELECT * 
FROM song;
;`;
   conn.query(sql, (err, rows, fields) => {
      if (err)
            throw err;
      callback(rows);      
   });
   conn.end();
},






}

