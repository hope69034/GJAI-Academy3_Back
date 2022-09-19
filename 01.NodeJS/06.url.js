//url 모듈
const url = require("url"); //url변수가아닌모듈

const urlSample = "https://www.hanbit.co.kr/academy/books/book_view.html?p_code=B8613955880"
const parseObject = url.parse(urlSample);

console.log(111)
console.log(parseObject);
console.log(222)
console.log(parseObject.href);  //"https://www.hanbit.co.kr/academy/books/book_view.html?p_code=B8613955880"
console.log(333)
console.log(parseObject.query); //p_code=B8613955880
console.log(444)

