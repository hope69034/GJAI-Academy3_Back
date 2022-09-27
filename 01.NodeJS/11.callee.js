//콜리 불림당하는 파일  콜러한테 호출당하는프로그램

exports.randInt = function(from,to){
   return Math.floor(Math.random()*(to-from+1)+from)  // floor 소수값 버림
   //??return Math.ceil(Math.random()*(to-from)+from) // ceil 은 올림
}
exports.circleArea = radius => Math.PI *radius *radius ;

require("./11.callee").circleArea()
require("./11.callee").randInt()
로 콜