
const mysql = require("mysql")
const config = require("./mysql.json")
const fs = require("fs");
let html = `
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>
   <table>
      <tr>
         <th>gid</th>
         <th>name</th>
         <th>debut</th>
         <th>히트곡명</th>
      </tr>
`;

//SELECT gid, NAME,  DATE_FORMAT(debut, '%Y-%m-%d') AS debutDate,  hit_song_id    FROM girl_group;
//select * FROM girl_group;  //이렇게하면데이트가복잡하게나오기떄문에위에코드로

const conn = mysql.createConnection(config);

conn.connect();    //sql db에접속

const sql = `
SELECT gid, NAME AS girlGroup,  DATE_FORMAT(debut, '%Y-%m-%d') AS debutDate,  hit_song_id AS 히트곡명   
	FROM girl_group
	JOIN song ON girl_group.hit_song_id=song.sid;
`;

conn.query(sql, (err,rows,fields) => {
   if (err) //에러처리
      throw err;
   //일단끌어오는지확인하는코드
      /*  for (let row of rows) {
      console.log((`${row.gid}\t${row.name}\t${row.debut}\t${row.hit_song_id}`)) */
      for (let row of rows) {
         let line = `<tr>`;

         // as로 이름바꾼거 생각해서 row.에 넣어야함
         const str = `<td>${row.gid}</td><td>${row.girlGroup}</td><td>${row.debutDate}</td><td>${row.히트곡명}</td>`;
         line += `${str}`
         line += `</tr>\n`;
         html += line;
      }   //console.log(fields); // 여긴 각 필드 정보들이 출력
   html+= `
      </table>
   </body>
   </html>
   `
      fs.writeFile("13.걸그룹table.html", html, err => {  //파일생성 내용은 html변수
   
      });  
   });  // 배열/객체로 출력
   
conn.end();  ////sql db에접속해제






