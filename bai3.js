function checkInt(number){
  let sum  = 0,i=0;
  while(true){
    sum+=i;
    if(sum>10000){
      break;
    }
    i++;
  }
  return i;
}
console.log(checkInt());
function resultIntMin(){
  document.querySelector('#resultIntMin').value = `Số nguyên dương nhỏ nhất: ${checkInt()}`;
  

}