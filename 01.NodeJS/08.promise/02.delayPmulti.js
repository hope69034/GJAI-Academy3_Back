    //딜레이피를 여러번 쓰고 싶을 때

function delayP(index,ms){
    return new Promise((resolve,reject)=> {
            setTimeout(()=>{
            resolve(index+"성공");
            },ms);
    });
    } 

    //1초마다 한번씩 
    //비동기적을 동기적으로 한 것   동기적:위에서아래로차례로
delayP(1,1000)
    .then(value=>{
        console.log(value);
        return delayP(2,1000);
    })
    .then(value=>{
        console.log(value);
        return delayP(3,1000);
    })
    .then(console.log);
