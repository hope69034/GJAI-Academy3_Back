const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const dm = require('./db/tigers-module');

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
   dm.getList(rows => {
      ejs.renderFile('views/31.index.ejs', {
         rows                                // {rows: rows}
      }, (err, html) => {
         res.send(html);
      });
   });
});
app.get('/create', (req, res) => {
   ejs.renderFile('views/31.create.ejs', (err, html) => {
      res.send(html);
   });
});
app.post('/create', (req, res) => {
   const player = req.body.player;
   const backNo = parseInt(req.body.backNo);
   const position = req.body.position;
   dm.insertPlayer([player, backNo, position], () => {
      res.redirect('/');
   });
});
/// :id로하면 모든인풋을저기로받아서 인풋-타입이미지가안뜬다  img로이미지를넣어야한다
app.get('/update/:id', (req, res) => {  // http://localhost:3000/update?id=123 에서  http://localhost:3000/update/123
   const id = parseInt(req.params.id);
   dm.getPlayer(id, rows => {
      const player = rows[0].player;
      const backNo = parseInt(rows[0].backNo);
      const position = rows[0].position;
      ejs.renderFile('views/31.update.ejs', {
         id, player, backNo, position    // id:id, player:player, backNo:backNo, position:position
      }, (err, html) => {
         res.send(html);
      });
   });
});
app.post('/update', (req, res) => {
   const id = req.body.id;
   const player = req.body.player;
   const backNo = req.body.backNo;
   const position = req.body.position;
   dm.updatePlayer([player, backNo, position, id], () => {
      res.redirect('/');
   });
});
app.get('/delete/:id', (req, res) => {      // http://localhost/delete?id=123 에서 http://localhost/delete/123로
   const id = parseInt(req.params.id);
   ejs.renderFile('views/31.delete.ejs', {
      id
   }, (err, html) => {
      res.send(html);
   });
});
app.get('/deleteConfirm/:id', (req, res) => {
   const id = parseInt(req.params.id);
   dm.deletePlayer(id, () => {
      res.redirect('/');
   });
});




/////////////////////
app.get('*', (req, res) => {
   res.status(404).send('Path not found.');
});
app.listen(3000, () => {
   console.log('Server is running at http://127.0.0.1:3000');
});




/* app.get("/create", (req,res)=>{
   const html = template.createForm();
   res.send(html);
});


app.post("/create" , (req,res)=>{
   const player = req.body.player;
   const backNo = parseInt(req.body.backNo);
   const position = req.body.position;
   dm.insertPlayer([player,backNo,position],()=>{
      res.redirect("/");      //res semd아니면 res redirect로 끝난다
   });  //dm은디비모듈 변수
});




app.get("/update",(req,res)=>{  //http://localhost:3000/update?id=123 
   const id = parseInt(req.query.id);  // 아이디는 쿼리로 받는다
   dm.getPlayer(id,rows=>{ //rows는 데이터가1개라도 배열로 만들어진다
      const player=rows[0].player; //[0]첫행
      const backNo=parseInt(rows[0].backNo); //[0]첫행
      const position=rows[0].position; //[0]첫행
      const html = template.updateForm(id,player,backNo,position);
      res.send(html);  //업데이트에서업데이트폼을줫다
   });

});


app.post("/update", (req,res)=>{
   const id =  parseInt(req.body.id);  // 바로위 updateform.에서 오니까
        //쿼리.id로 오는게 아니라 body로 온다
   const player = req.body.player;
   const backNo = parseInt(req.body.backNo);
   const position = req.body.position;
   dm.updatePlayer([player,backNo,position,id],()=>{
      res.redirect("/");       //끝나고 홈으로가기
   });  

});

 



app.get("/delete", (req,res)=>{  //http://localhost:3000/delete?id=123   //식으로오는거라 ?이거  쿼리 아이디로 받는다
   const id = parseInt(req.query.id)
   const html = template.deleteForm(id);
   res.send(html);
});

app.get("/deleteConfirm", (req,res)=>{
   const id = parseInt(req.query.id);
   dm.deletePlayer(id, ()=>{      //parseInt(req.query.id)
      res.redirect("/");
   });
}); */
   





