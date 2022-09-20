


const axios = require("axios");
const cheerio = require("cheerio");
const url = "http://book.interpark.com/display/collectlist.do?_method=BestsellerHourNew201605&bestTp=1&dispNo=028";
axios.get(url,{responseType:'arraybuffer'},{responseEncoding: 'binary'},{method: 'GET'})
   





   //제대로받앗다면
   .then(response=>{







      //console.log(response.data)
      //const soup = cheerio.load(response.data);
 //     soup()      //soup==$
      const $ = cheerio.load(response.data);
      
      $("a[target='_blank']").each((index,element)=>{
         // .class 선택자  //trim 여백지우기
         // f12로 찾아가기
         let itemName = $(element).find(".itemName").text().trim();  //제목
         let author = $(element).find(".author").text().trim();  //제목
         let company = $(element).find(".company").text().trim();  //가격
         let price = $(element).find(".price").text().trim();  //가격

         //author = author.split(",").map(x=>x.trim()).join(",");
               //스플릿하면 배열로\
            
               var iconv = require('iconv-lite')

               let contentType = response.headers['content-type']
               let charset = contentType.includes('charset=') ? contentType.split('charset=')[1]: 'UTF-8'
               
               let data = iconv.encode(response, charset)

               
         console.log(index+1,"====================");
         console.log(itemName);
         //console.log(author);
         //console.log(company);
         //console.log(price);
      });
   })

   //제대로못받앗다면
   .catch(err=>{
      console.log(err);
   })





