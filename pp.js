function first(){
   setTimeout( function(){
      console.log(1);
   }, 500 );
}

function second(){
   console.log(2);
}

first();
second();
 //2
 //1

//콜백이란 이러한 상황처럼 다른 코드가 특정코드가 마무리되기 
//전에 실행되지 않도록, 즉 비동기처리를 위한 방법이다.