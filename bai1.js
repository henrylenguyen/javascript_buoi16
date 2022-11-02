// let a = document.getElementById("resultSalary");
// console.log(a);

console.log(document.getElementsByTagName("label"));
function resultCount() {

  let even = '',odd = '';
  for(let i=0;i<=100;i++){
    if(i%2==0){
      even += (i+" ");
    }
    else{
      odd += (i+" ");
    }
  }
  document.querySelector('#resultCount').innerHTML = `Số chẵn là: ${even} Số lẽ là: ${odd}`;

}
