const mysql = require("mysql");
const config = require("./mysql.json");
//+const fs = require("fs");
const conn = mysql.createConnection(config);
conn.connect();

let sql = `
   INSERT INTO tigers (player, backNo, POSITION)
   VALUE (?,?,?);
`;

const params = ["박준표", 31, "투수"]; // 물음표에넣을것
//여기서는 받아올 결과값이 없기 떄문에 rows가 필요없다
conn.query(sql, params, (err,fields)=>{
   if (err)
      throw err;
   sql = `SELECT * FROM tigers`;
   conn.query(sql,(err,rows,fields)=>{
      if (err)
         throw err;
         for (let row of rows){
            console.log(`${row.id}\t${row.player}\t${row.backNo}\t${row.POSITION}`)
         }
   });
   conn.end();
});

//잘 실행되었는지 확인하는 방법
//이걸 실행하고
// sql가서 SELECT * FROM tigers; 하면 최형우가 아래 들어가있음
//잘 실행되었는지 확인하는 방법
//  conn.end();위로올리고  sql = `SELECT * FROM tigers`;
/*    conn.query(sql,(err,rows,fields)=>{
      if (err)
         throw err;
         for (let row of rows){
            console.log(`${row.id}\t${row.player}\t${row.backNo}\t${row.POSITION}`)
         }
   });
   conn.end();
   코드 */