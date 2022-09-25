파일 쓰기
async.txt 파일에 '비동기적으로 파일 쓰기' 라는 텍스트를 
넣는 방법 [ async.txt에 있던 원래 텍스트는 지워진다 ] 

const fs = require('fs');
const buffer = '비동기적으로 파일 쓰기';
fs.writeFile('tmp/async.txt', buffer, error => {
    if (error)
        console.log(error);
});
