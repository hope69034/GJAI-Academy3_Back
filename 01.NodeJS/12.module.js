//12콜러 실행하면 실행되는 콜리

module.exports={
   randInt:  function(from,to){
   //function randInt(from,to){ // X  
      return Math.floor(Math.random()*(to-from+1)+from)  // floor 소수값 버림
   },
   circleArea: function(radius){

   return Math.PI *radius *radius; 
   }
}   