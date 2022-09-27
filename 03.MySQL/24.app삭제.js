const http = require('http');
const url = require('url');
const qs = require('querystring');
const mysql = require('mysql');
const config = require('./mysql.json');
const template = require('./view/template delete');
const { parse } = require('path');

http.createServer((req, res) => {
   let pathname = url.parse(req.url).pathname;
   let query = url.parse(req.url, true).query;
   switch(pathname) {
   case '/':                   // 초기 홈 화면
      const conn = mysql.createConnection(config);
      conn.connect();
      const sql = `SELECT * FROM tigers2;`;
      conn.query(sql, (err, rows, fields) => {
         if (err)
               throw err;
         let trs = template.trsGen(rows);
         let html = template.home(trs);
         res.end(html);
      });
      conn.end();
      break;
   case '/create':
      if (req.method == 'GET') {      // 입력 폼 보여주기
         let html = template.createForm();
         res.end(html);
      } else {                        // 사용자 입력 -> DB
         let body = '';
         req.on('data', data => {
               body += data;
         });
         req.on('end', () => {
               const param = qs.parse(body);
               const player = param.player;
               const backNo = parseInt(param.backNo);
               const position = param.position;

               const conn = mysql.createConnection(config);
               conn.connect();
               const sql = `INSERT INTO tigers2 (player, backNo, position)
                           VALUES (?, ?, ?);`;
               conn.query(sql, [player, backNo, position], (err, fields) => {
                  if (err)
                     throw err;
                  res.writeHead(302, {'Location': '/'});
                  res.end();
               });
               conn.end();
         });
      }
      break;

      case "/update":
         if (req.method == "GET"){ //수정입력할폼보여주기
            const id = parseInt(query.id);   //   let query = url.parse(req.url, true).query;여기서쿼리받아서가능
            //이제아이디로검색해서 결과를 가져와야함
         
            const conn = mysql.createConnection(config);
            conn.connect();
            const sql = `SELECT * FROM tigers2 where id=?;`;
            conn.query(sql, id, (err, rows, fields) => {  //id가 ? 자리로
               if (err)
                     throw err;
               const player = rows[0].player
               const backNo = rows[0].backNo
               const position = rows[0].position
               const html = template.updateForm(id, player, position);
/*                let trs = template.trsGen(rows);
               let html = template.home(trs); */
               res.end(html);
            });
            conn.end();
            break;







         } else { //db에수정하기
            
            let body = '';
            req.on('data', data => {
                  body += data;
            });
            req.on('end', () => {
                  const param = qs.parse(body);
                  const id = parseInt(param.id);


                  const player = param.player;
                  const backNo = parseInt(param.backNo);
                  const position = param.position;
   
                  const conn = mysql.createConnection(config);
                  conn.connect();
                  const sql = `update tigers2 set player=?, backNo=?, position=? where id=?;`;
                  conn.query(sql, [player, backNo, position, id], (err, fields) => {
                     if (err)
                        throw err;
                     res.writeHead(302, {'Location': '/'});
                     res.end();
                  });
                  conn.end();
            });
         }
         break;


      case "/delete": 
         const did = parseInt(query.id);
         const html = template.deleteForm(did);
         res.end(html) //html보내기
         break;
      
      case "/deleteConfirm": {//삭제할거냐물어보는
         const id = parseInt(query.id);
         //const csql = `update tigers set isDeleted=1 where id=?`   //isD가 1이면 쓰지 않는 것 쓰는건 where isD=0으로셀렉
         const sql = `delete from tigers2 where id=?;`;
         const conn = mysql.createConnection(config);
         conn.connect();
         conn.query(sql, id, (err, fields) => {
            if (err)
               throw err;
            res.writeHead(302, {'Location': '/'});
            res.end();
         });
         conn.end();
         break;
         }
      default:
         res.writeHead(404, {'Content-Type': 'text/html'});
         res.end();        
      }
}).listen(3000, () => {
      console.log('Server running at http://localhost:3000');
});