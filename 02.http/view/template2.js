module.exports = {
	HOME_CONTENTS:
		``,
	listGen:    function(files) {   // 명단
		 let list = '';
		 for (let file of files) {
			  const title = file.substring(0);     // .txt를 제외한 나머지
				if (file==files[0])
			  		list += `${title}\t`; // 체크박스코드 <input type="checkbox" name="xxx" value="yyy">
				else 
					list += `${title}\t`;
			}
		 return list;
	},
	buttonGen:  function(title) {   // 버튼
		 if (title === undefined) {      // 홈 화면, 생성만 가능
			  return `
					<button onclick="location.href='/create'">생성</button>
					<button disabled="disabled">수정</button>
					<button disabled="disabled">삭제</button>
			  `;
		 } else {                        // 조회 화면, 생성/수정/삭제 가능
			  return `
					<button onclick="location.href='/create'">생성</button>
					<button onclick="location.href='/update?id=${title}'">수정</button>
					<button onclick="location.href='/delete?id=${title}'">삭제</button>
			  `;
		 }
	},
	createForm: function() {  //선수 생성
		 return `
			  <form action="/create" method="post">
					<table>
						 
						 <tr>
							  <td>이름</td>
							  <td><input type="text" name="title"></td>
						 </tr>

						 <tr>
						 <td>백넘버</td>
						 <td><input type="text" name="content" ></td>
					</tr>

					<tr>
					<td>포지션</td>
					<td><input type="text" name="content" ></td>
			  </tr>

						 <tr>
							  <td colspan="2" style="text-align: center;"><input type="submit" value="생성"></td>
						 </tr>
					</table>
			  </form>        
		 `;
	},

	updateForm: function(title, content) {  // 수정
		 return `
			  <form action="/update" method="post">
					<input type="hidden" name="original" value="${title}">
					<table>



					<tr>
					<td>이름</td>
					<td><input type="text" name="title" value="${title}" ></td>
			  </tr>

			  <tr>
			  <td>백넘버</td>
			  <td><input type="text" name="content" >${content}</td>
		 </tr>

		 <tr>
		 <td>포지션</td>
		 <td><input type="text" name="content2" >${content}</td>
	</tr>




					</table>
			  </form>        
		 `;
	},
	deleteForm: function(title) {
		 return `
			  ${title} 삭제를 누르면 체크된 선수명단이 삭제됩니다.<br><br>
			  <button onclick="location.href='/deleteConfirm?id=${title}'">삭제</button>
			  <button onclick="location.href='/?id=${title}'">취소</button>
		 `;
	}
}