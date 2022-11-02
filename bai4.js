//hàm lấy dữ liệu
function getValue(value) {
  let number = document.querySelectorAll(value);
  let arr = new Array();
  number.forEach(element => {
    // mỗi lần lập sẽ đẩy dữ liệu vào mảng 
    arr.push(element.value);
  });
  return arr;
}

// hàm check có giá trị rỗng (người dùng không nhập) hay không
function checkNull(checked) {
  let arrValue = getValue(checked);
  for (let i = 0; i < arrValue.length; i++) {
    //nếu dữ liệu có rỗng trả về true liền (true là dữ liệu bị nhập bị thiếu);
    if (isNaN(arrValue[i]) || arrValue[i] == "") {
      return true;
    }
  }

  return false;
}

function addStyle(name, string) {
  document.querySelector(name).value = string[0];
  document.querySelector(name).style.border = string[1];
  document.querySelector(name).style.color = string[2];
}

function indexNumber(X,n){
  let sum = 0;
  for(let i=1;i<=n;i++){
    sum += Math.pow(X,i);
  }
  return sum;
}
// console.log(indexNumber(33,2));
function resultIndexNumber() {
  if (!checkNull(".IndexNumber")) {
    let arr = getValue(".IndexNumber");
    let arrParse = new Array();
    arr.forEach(element => {
      arrParse.push(parseFloat(element));
    })
    if(arrParse[0]==0 || arrParse[1] ==0){
        addStyle("#resultIndexNumber", ['Dữ liệu không hợp lệ!!!', ' 1px solid red', 'red']);
    }
    else{
      //  console.log(arrParse);
      addStyle("#resultIndexNumber", [indexNumber(arrParse[0],arrParse[1]), "1px solid #000", "#000"]);

    }
  } 
  else {
    addStyle("#resultIndexNumber", ['Làm ơn nhập đầy đủ dữ liệu!!!', ' 1px solid red', 'red']);
  }

}