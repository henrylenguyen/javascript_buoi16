function check(n) {
  if (n < 2) {
    return 0;
  } else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return 0;
      }
    }
  }
  return 1;
}
function prime(number) {
  let result = '';
  for (let i = 0; i < number; i++) {
    if (check(i)) {
      result+= (i + " ");
    }
  }
  return result;
}
function ResultPrime(){
  let selected = document.querySelector(".prime").value;
  let parse = parseInt(selected)
  if (selected == "") {
    document.querySelector('#ResultPrime').innerHTML = "Làm ơn nhập đầy đủ dữ liệu";
    document.querySelector('#ResultPrime').style.border = "1px solid red";
    document.querySelector('#ResultPrime').style.color = "red";
  } else {
    if (selected == 0) {
      document.querySelector('#ResultPrime').innerHTML = "Dữ liệu không hợp lệ!!!";
      document.querySelector('#ResultPrime').style.border = "1px solid red";
      document.querySelector('#ResultPrime').style.color = "red";
    } else {
      document.querySelector('#ResultPrime').innerHTML = `Số nguyên tố trong khoảng 1-> ${parse} là: ${prime(parse)}`;
      document.querySelector('#ResultPrime').style.border = "1px solid transparent";
      document.querySelector('#ResultPrime').style.color = "#000";

    }

  }
}

