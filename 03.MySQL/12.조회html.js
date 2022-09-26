const mysql = require("mysql");
const config = require("./mysql.json");


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
         <th>ID</th>
         <th>Name</th>
         <th>CountryCode</th>
         <th>District</th>
         <th>Population</th>
      </tr>
`;

const connection = mysql.createConnection(config);  //여기서 db랑 프로그램이 접속

connection.connect();    //sql db에접속

const sql = `select * FROM city WHERE population >9000000;`;
connection.query(sql, (err,rows,fields) => {
   if (err) //에러처리
      throw err;
   //console.log(rows);  // 여기  select * FROM city WHERE population >9000000; 정보가 출력
   for (let row of rows) {
      let line = `<tr>`;
      const str = `<td>${row.ID}</td><td>${row.Name}</td><td>${row.CountryCode}</td><td>${row.District}</td><td>${row.Population}</td>`;
      line += `${str}`
      line += `</tr>\n`;
      html += line;
   }   //console.log(fields); // 여긴 각 필드 정보들이 출력
html+= `
   </table>
</body>
</html>
`
   fs.writeFile("12.table.html", html, err => {  //파일생성 내용은 html변수

   });  
});  // 배열/객체로 출력

connection.end();  ////sql db에접속해제

//이걸 실행하면
// 12.table.html이 생성