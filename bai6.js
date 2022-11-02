function ResultDiv() {
  let content = ''
  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      content += '<div>Div chẵn</div>'
      
    } else {
      
     content += '<div>Div lẽ</div>'
    }
  }
  console.log(content);
  document.querySelector('#ResultDiv').innerHTML = content;
}
//  let a = document.querySelector("#ResultDiv").textContent;
// console.log(a);
// ResultDiv();