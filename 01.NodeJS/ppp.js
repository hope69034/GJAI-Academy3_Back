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