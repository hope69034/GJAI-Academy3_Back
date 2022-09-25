//url 모듈
const url = require("url"); // url 변수가 아닌 모듈

const urlSample = "https://www.hanbit.co.kr/academy/books/book_view.html?p_code=B8613955880"
const parseObject = url.parse(urlSample);

console.log(parseObject); // 각종 정보

console.log(parseObject.href);  //"https://www.hanbit.co.kr/academy/books/book_view.html?p_code=B8613955880"

console.log(parseObject.query); //p_code=B8613955880


URL 모듈은 parse(), format(), resolve() 총 3가지 메소드를 가지고 있다. 
이 중 사용자로부터 문자열 형식으로 받은 URL 요청을 처리하기 위해 'parse()'가 가장 많이 활용된다. 


parse() : URL 문자열을 입력하면 URL 객체를 만든다. 'format()'의 반대  
format() : URL 객체를 입력하면 URL 문자열을 반환한다. 'parse()'의 반대  
resolve() :  상대 URL을 절대 URL로 변경한다. 