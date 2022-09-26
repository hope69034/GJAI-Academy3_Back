
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
         <th>id</th>
         <th>player</th>
         <th>backNo</th>
         <th>Population</th>
      </tr>
`;


const conn = mysql.createConnection(config);

conn.connect();    //sql db에접속

const sql = `select * FROM tigers;`;

conn.query(sql, (err,rows,fields) => {
   if (err) //에러처리
      throw err;
   for (let row of rows) {
      let line = `<tr>`;
      const str = `<td>${row.id}</td><td>${row.player}</td><td>${row.backNo}</td><td>${row.POSITION}</td>`;
      line += `${str}`
      line += `</tr>\n`;
      html += line;
   }   //console.log(fields); // 여긴 각 필드 정보들이 출력
html+= `
   </table>
</body>
</html>
`
   fs.writeFile("13.table.html", html, err => {  //파일생성 내용은 html변수

   });  
});  // 배열/객체로 출력

conn.end();  ////sql db에접속해제
