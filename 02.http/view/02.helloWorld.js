exports.helloWorld=function(){
   return `
   <!DOCTYPE html>
   <html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>헬로월드</title>
   </head>
   <body>
      <h1>헬로월드</h1>
   웹서버+ai어플리케이션
   
   mvc pattern
      MODEL : db acess, business logic , AI
      view : 화면에 보이게하는 html css js
      control :라우팅, 사용자가 입력한 파라미터 처리,
            뷰파일을 렌더링해서 클라이언트에게 내려보내는일
   뷰 모델 컨트롤을 각기 다른파일로
   </body>
   </html>`;
}

