process.on('exit', code => {
   console.log('프로그램 종료'); // 종료시점에 발동
   console.log('exit code:', code);
});

process.on('uncaughtException', error => {
   console.log('예외 발생'); // 에러 발생시 발동
   console.log('예외 명:', error.name);
   console.log('예외 내용:', error.message);
});

// 예외 발생
error.error.error(); // 에러 유발
process.exit(-1); // 종료