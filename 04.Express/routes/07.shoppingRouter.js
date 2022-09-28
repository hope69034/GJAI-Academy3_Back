 // 07라우츠js파일에서 const shoppingRouter = require("./routes/07.shoppingRouter");로 로드
const express = require("express"); //express 프레임워크 선언 익스프레스속에 모듈 많음
const shoppingRouter= express.Router();

shoppingRouter.get("/list", (req,res)=>{
   res.send(`<h1>http://localhost:3000/shopping/list</h1>`);
});


shoppingRouter.get("/cart", (req,res)=>{
   res.send(`<h1>http://localhost:3000/shopping/cart</h1>`);
});

//외부에서쇼핑라우터를볼수잇게하는
module.exports = shoppingRouter;





 


///////////////////////////////////////////////////

// 아래 두개는 필수 코드
//여기는없어야한다..
