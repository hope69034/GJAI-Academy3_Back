const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://www.hanbit.co.kr/academy/books/book_view.html?p_code=B7306695419";
axios.get(url)
   
   //제대로받앗다면
   .then(response=>{
      //console.log(response.data)
      //const soup = cheerio.load(response.data);
 //     soup()      //soup==$
      const $ = cheerio.load(response.data);
      
      $(".view_box").each((index,element)=>{
         // .class 선택자  //trim 여백지우기
         // f12로 찾아가기
         let title = $(element).find(".book_tit").text().trim();
         let author = $(element).find(".book_writer").text().trim();
         //예쁘게출력하기위한
         author = author.split(",").map(x=>x.trim()).join(",");
               //스플릿하면 배열로
         console.log(index+1,"====================");
         console.log(title);
         console.log(author);
      });
   })

   //제대로못받앗다면
   .catch(err=>{
      console.log(err);
   })