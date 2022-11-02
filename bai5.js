
function factorial(n) {
  n = parseInt(n);
  let multip = 1;
  for (let i = 1; i <= n; i++) {
    multip *= i;
  }
  return multip;
  // console.log(`Giai thừa là: ${multip}`);
}

function Resultfactorial() {
  let selected = document.querySelector(".factorial").value;
  let result = factorial(selected); 
  if (selected == "") {
    document.querySelector('#Resultfactorial').innerHTML = "Làm ơn nhập đầy đủ dữ liệu";
    document.querySelector('#Resultfactorial').style.border = "1px solid red";
    document.querySelector('#Resultfactorial').style.color = "red";
  } else {

    document.querySelector('#Resultfactorial').innerHTML = `Giai thừa của ${selected} là: ${result}`;
    document.querySelector('#Resultfactorial').style.border = "1px solid transparent";
    document.querySelector('#Resultfactorial').style.color = "#000";
  }
}