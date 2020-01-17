var flg = localStorage.getItem("Flg");
console.log(flg);
const baseimg = document.getElementById('img')

switch(flg){
  case 'A': baseimg.src = "img/picA.jpg";
       break;
  case 'B': baseimg.src = "img/picB.jpg";
       break;
  case 'C': baseimg.src = "img/picC.jpg";
       break;
  case 'D': baseimg.src = "img/picD.jpg";
       break;
  case 'E': baseimg.src = "img/picE.jpg";
       break;
  case 'F': baseimg.src = "img/picF.jpg";
       break;
}

function score(userAns){
  console.log(userAns);
  localStorage.setItem('userans', userAns);
  alert(userAns + 'にしました');
  window.location.href = 'Learning.html';
}
