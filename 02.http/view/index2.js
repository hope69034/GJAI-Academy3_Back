exports.index = function(title, list, content, control) {
   return `
<!DOCTYPE html>
<html lang="ko">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>${title}</title>     <!-- 23.app조회.js 에서 변경됨 -->
</head>
<body style="margin: 50px;">
   <h1><a href="/">기아 타이거즈 선수 명단</a></h1>
   
	<table>

      <th>check</th>
      <th>id</th>
      <th>player</th>
      <th>backNo</th>
      <th>POSITION</th>
   
      <tr>
      <td><input type="checkbox" name="xxx" value="yyy"></td>
         <td>${list[0]}</td>  
         <td>${list[1]}</td>  
         <td>${list[4]}</td>  
         <td>${list[6]}</td>  
      <tr>

 </td>
   <tr>

	</table>

   <hr>

   <p>
      ${content}              <!-- 23.app조회.js 에서 변경됨 -->
   </p>
   <hr>
   ${control}                  <!-- 24.app생성.js 에서 추가됨 -->




</body>
</html>
   `;
}