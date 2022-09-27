// from.txt 파일을 읽어서 to.txt 파일에 쓰는데,
// 첫번째 줄은 1번 반복, 두번째 줄은 2번 반복, ...
const fs = require('fs');

// cmd 실행

fs.readFile('07.File/tmp/from.txt', 'utf8', (err, data) => {         //전체감쌈
    //console.log(data);
    const dataArray = data.split('\n').map(s => s.trim());  // \r 제거    // [ aaa, bbb, ccc]
    let output = '';
    dataArray.forEach((item, index) => {
        line = '';
        for (let i=0; i<index+1; i++) {
            line += item;
        }
        if (index != dataArray.length-1)   // 마지막인덱스가 아니라면 엔터넣기
            output += line + '\n';
        else
            output += line;             // 마지막 줄엔 \n 를 넣지 않는다.
    });
    // 아웃풋형태  (원본 aaa엔터bbb엔터ccc) aaa  엔터 bbbbbb 엔터 cccccc

    fs.writeFile('07.File/tmp/to.txt', output, err => {  // to.txt파일 생성 위에서 
        if (err)
            console.log(err);
    });

});