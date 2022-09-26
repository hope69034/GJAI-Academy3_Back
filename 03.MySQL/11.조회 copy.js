const mysql = require("mysql");

config = {
   host: "localhost",
   user: "cshuser",
   password: "cshpass",
   port: 3306,
   database: "world"   // sql에 world 디이터베이스db    use world의 의미
}

const connection = mysql.createConnection(config);  //여기서 db랑 프로그램이 접속

// 커넥션컨넥이랑 엔드 사이에 원하는 코드 작성
connection.connect();    //sql db에접속

const sql = `select * FROM city WHERE population >9000000;`;

//sql이라는 쿼리를 날린다 그럼 3가지 아큐먼트를 가진 콜백함수를 부른다 조회할게잇으면2개 있으면 3개 셀렉은2개 업뎃은3개
connection.query(sql, (err,rows,fields) => {
   if (err) //에러처리
      throw err;
   console.log(rows);  // 여기  select * FROM city WHERE population >9000000; 정보가 출력
   console.log(fields); // 여긴 각 필드 정보들이 출력
});  // 배열/객체로 출력
connection.end();  ////sql db에접속해제