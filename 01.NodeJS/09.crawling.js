const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://www.hanbit.co.kr/academy/books/new_book_list.html";

axios.get(url)
   //제대로받앗다면
   .then(response=>{
      //console.log(response.data)     // 해당 url의 html 파일 출력
      //const soup = cheerio.load(response.data);
 //     soup()      //soup==$
      const $ = cheerio.load(response.data);  // 웹사이트를 로드하는 cheerio 오브젝트 선언 
      
      // f12로 찾아가기
      $(".view_box").each((index,element)=>{  //  .클래스  클래스선택자  //뷰박스클래스의 각 인덱스와 엘리먼트를 뽑는다
         
         //뷰박스클래스의 엘리먼트에서 뷰박스클래스 하위에 있는 북tit클래스의 텍스트를 트림하여 title변수로 선언
         let title = $(element).find(".book_tit").text().trim();   //  .클래스  클래스선택자    //trim 여백지우기

         let author = $(element).find(".book_writer").text().trim();  //  .클래스  클래스선택자   //trim 여백지우기
         
         //예쁘게출력하기위한  // 이장수 , 신만수  형태를 이장수,신만수 형태로 정렬한다 
         author = author.split(",").map(x=>x.trim()).join(",");
         console.log(index+1,"====================");
         console.log(title);
         console.log(author);
      });
   })

   //제대로못받앗다면 //에러처리
   .catch(err=>{
      console.log(err);
   });