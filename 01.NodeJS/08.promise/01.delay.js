//promise

//producer
function delayP(ms){ //리졸브 리젝트 콜백함수두개  리졸브는 성공햇을때실행되는 콜백 리젝은 실패햇을떄
    return new Promise((resolve,reject)=> {
        try {
            setTimeout(()=>{
                resolve("성공");
            },ms);  // ms 시간만큼 타임아웃 걸림, 타임아웃 때 성공을 출력
        } 
        catch(e){
            reject("실패");
        };
    });
};

//소비자 consumer
delayP(1000) //()안 만큼 타임아웃걸림
    .then(console.log) //리졸브에해당  성공을 val로 받아서 출력

/*     .then((val)=>{         //같은코드   
        console.log(val); 
    }); */
    .catch(console.log);
    //.catch(err=>{console.log(err)})  //같은코드  실패를 err로 받아서 출력