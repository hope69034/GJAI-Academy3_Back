//딜레이피를 여러번 쓰고 싶을 때
//지정한 시간마다 타임아웃을 연속적으로 건다

function delayP(index,ms){ 
    return new Promise((resolve,reject)=> {
            setTimeout(()=>{
            resolve(index+"성공");
            },ms);
    });
    } 

    //1초마다 한번씩 
    //비동기적을 동기적으로 한 것   동기적:위에서아래로차례로


    // 첫 1,1000이 펑션으로 들어가면 아래 value로 성공이 들어가서 출력되고
    // 두번째 2,1000이 펑션으로 가서 아래 value로 출력이되고 
    // 세번째 3,1000이 펑션으로 들어가서 나온 value가 .then(console.log); 에서 출력된다
delayP(1,1000)
    .then(value=>{
        console.log(value);    //resolve성공을 출력한 후 다시 delayP를 리턴
        return delayP(2,1000);
    })
    .then(value=>{
        console.log(value);
        return delayP(3,1000);
    })
    .then(console.log);
