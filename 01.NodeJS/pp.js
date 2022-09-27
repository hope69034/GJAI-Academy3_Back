const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://www.hanbit.co.kr/academy/books/new_book_list.html";


axios.get(url)
    .then(response=>{
        //console.log(response.data)  // 해당 url의 html 파일이다
        const soup = cheerio.load(response.data);
           soup()      //soup==$
        const $ = cheerio.load(response.data);
        

        });
    
