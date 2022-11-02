function countDivide(number){
  let count = 0;
  for(let i=0;i<=number;i++){
    if(i%3==0){
      
      count++;
    }
  }
  return count;
}

function resultDivide(){
  let selected = document.querySelector(".number").value;
    if (selected == "") {
      document.querySelector('#resultDivide').innerHTML = "Làm ơn nhập đầy đủ dữ liệu";
      
      document.querySelector('#resultDivide').style.border = "1px solid red";
      document.querySelector('#resultDivide').style.color = "red";
    } else {
      if(selected<3){
          document.querySelector('#resultDivide').innerHTML = "Dữ liệu không hợp lệ!!!";
          document.querySelector('#resultDivide').style.border = "1px solid red";
          document.querySelector('#resultDivide').style.color = "red";
      }
      else{
        document.querySelector('#resultDivide').innerHTML = `Có ${countDivide(parseInt(selected))} chia hết cho 3`;
        document.querySelector('#resultDivide').style.border = "1px solid transparent";
        document.querySelector('#resultDivide').style.color = "#000";

      }

    }
}