






 

const mysql = require('mysql');
const config = require('./mysql.json');

module.exports = {
   getConnection: function(){
      const conn = mysql.createConnection(config);
      conn.connect(err=>{
         if (err){
            console.log("mysql connection error")
            console.log(err)
         }
      });
      return conn;
   },
   getList: function(callback){  //홈화면에서 dm.getList로발동
      const conn = this.getConnection();
      //const sql = `select * from tigers2 where isDeleted=0;`;
      const sql = `select * from tigers2;`;
      //sql실행
      conn.query(sql, (err,rows,fields)=>{
         if (err)
            throw err;
         callback(rows); //rows가결과물 rows에대해서 처리할것을 콜백으로정의
 /*      //앱문서에       dm.getList(rows=>{
         const trs = template.trsGen(rows);
         const html = template.home(trs);
         res.end(html);   이부분이 콜백함수 */
      
      
      });
      conn.end();  //conn.query후 필수
   },

   insertPlayer: function(params,callback){  // /create 생성부분 
      const conn = this.getConnection(); //컨넥션을만들고
      const sql = `insert into tigers2 (player, backNo, position)
      values (?,?,?);
      `; //엣스큐엘선언하고

      //sql실행
      conn.query(sql, params, (err,fields)=>{
         if (err)
            throw err;
         
         callback(); //여긴 파라미터가없음  ()에는 결과를 이용할것인데 rows결과가없음 
   //콜백은 res.writeHead(302, {'Location': '/'}) res.end();
      
      });
      conn.end();  //conn.query후 필수
   },





   getPlayer: function(params,callback){ 
      const conn = this.getConnection();
      const sql = `select * from tigers2 where id=? and isDeleted=0;`;
      conn.query(sql,params,(err,rows,fields)=>{ //셀렉이니까받을결과가잇음rows
         if (err)
         throw err;
      
      callback(rows);

      });
      conn.end(); 
   },







   updatePlayer: function(params,callback){  // /create 생성부분 
      const conn = this.getConnection(); //컨넥션을만들고
      const sql = `
      update tigers2 set player=?, backNo=?, position=?  where id=?;      
      `;
      
      
      `insert into tigers2 (player, backNo, position)
      values (?,?,?);
      `; //엣스큐엘선언하고

      //sql실행
      conn.query(sql, params, (err,fields)=>{
         if (err)
            throw err;
         
         callback(); //여긴 파라미터가없음  ()에는 결과를 이용할것인데 rows결과가없음 
   //콜백은 res.writeHead(302, {'Location': '/'}) res.end();
      
      });
      conn.end();  //conn.query후 필수
   }








};  