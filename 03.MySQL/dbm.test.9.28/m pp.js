const mysql = require('mysql');
const config = require('./mysql.json');

//본인이름zip으로제출
// db모둘db테스트파일
module.exports = {


   //걸그룹 리스트 조회
   //gid 걸그룹이름 데뷔일 히트곡명
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

   // 송 리스트 조회
   // sid 노래제목 가사 걸그룹명
   getList: function(callback) {
      const conn = this.getConnection();
      const sql = `SELECT * FROM tigers WHERE isDeleted=0;`;
      conn.query(sql, (err, rows, fields) => {
         if (err)
               throw err;
         callback(rows);      
      });
      conn.end();
   },

   // 걸그룹 검색(gid로)
   // gid, 걸그룹이름, 데뷔일, 히트곡명
   insertPlayer: function(params, callback) {
      const conn = this.getConnection();
      const sql = `INSERT INTO tigers (player, backNo, position)
                           VALUES (?, ?, ?);`;
      conn.query(sql, params, (err, fields) => {
         if (err)
               throw err;
         callback();
      });
      conn.end();
   },

   // 4송 검색(sid로)
   // sid, 노래제목, 가사, 걸그룹명
   getPlayer: function(params, callback) {
      const conn = this.getConnection();
      const sql = `SELECT * FROM tigers WHERE id=? and isDeleted=0;`;
      conn.query(sql, params, (err, rows, fields) => {
         if (err)
               throw err;
         callback(rows);    
      });
      conn.end();
   },

   // 5 걸그룹 추가
   updatePlayer: function(params, callback) {
      const conn = this.getConnection();
      const sql = `UPDATE tigers 
      SET player=?, backNo=?, position=?
                           WHERE id=?;`;
      conn.query(sql, params, (err, fields) => {
         if (err)
               throw err;
         callback();
      });
      conn.end();
   },

   // 6걸그룹수정
   deletePlayer: function(params, callback) {
      const conn = this.getConnection();
      const sql = `UPDATE tigers SET isDeleted=1 WHERE id=?`;
      conn.query(sql, params, (err, fields) => {
         if (err)
               throw err;
         callback();
      });
      conn.end();
   },

   //걸그룹삭제
   getPlayersByPosition: function(params, callback) {          // 필요한 파라메터
      const conn = this.getConnection();
      const sql = `SELECT * FROM tigers WHERE position=?;`;
      conn.query(sql, params, (err, rows, fields) => {
         if (err)
               throw err;
         callback(rows);                                     // 콜백 파라메터
      });
      conn.end();
   },


   
   //송추가
   getPlayersOrderByBackNo: function(order, callback) {   // ASC-0, DESC-1
      const conn = this.getConnection();
      let sql = `SELECT * FROM tigers WHERE isDeleted=0
                  ORDER BY backNo `;
      sql += (order == 1) ? 'DESC;' : ';';
      conn.query(sql, (err, rows, fields) => {
         if (err)
               throw err;
         callback(rows);                                     // 콜백 파라메터
      });
      conn.end();
   },

   //송수정
   getPlayersByOrder: function(field, order, callback) {
      const conn = this.getConnection();
      let sql = `SELECT * FROM tigers WHERE isDeleted=0
                  ORDER BY ${field} `;
      sql += (order == 1) ? 'DESC;' : ';';
      conn.query(sql, (err, rows, fields) => {
         if (err)
               throw err;
         callback(rows);                                     // 콜백 파라메터
      });
      conn.end();
   },

   //송삭제
   getPlayersByOrder: function(field, order, callback) {
      const conn = this.getConnection();
      let sql = `SELECT * FROM tigers WHERE isDeleted=0
                  ORDER BY ${field} `;
      sql += (order == 1) ? 'DESC;' : ';';
      conn.query(sql, (err, rows, fields) => {
         if (err)
               throw err;
         callback(rows);                                     // 콜백 파라메터
      });
      conn.end();
   },


}

