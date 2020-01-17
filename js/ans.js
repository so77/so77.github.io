// 他のJsファイルの値を取得
var UserAns = localStorage.getItem("userans");
var flg = localStorage.getItem("Flg");

var mainimg = document.getElementById('Mainimg');

var verygood=0;
var good=0;
var hate=0;
var veryhate=0;

verygood = localStorage.getItem("VeryGood");
good = localStorage.getItem("Good");
hate =localStorage.getItem("Hate");
veryhate =localStorage.getItem("VeryHate");

verygood /= 6;
good /= 6;
hate /= 6;
veryhate /= 6;

verygood = Math.round(verygood * 10)/10;
good = Math.round(good * 10)/10;
hate = Math.round(hate * 10)/10;
veryhate = Math.round(veryhate * 10)/10;

console.log(verygood);
console.log(good);
console.log(hate);
console.log(veryhate);

var AIAns;
var lastanswer;

if((verygood >= good) && (verygood >= hate) && (verygood >= veryhate)){
  AIAns = "いいね！";
 }else if((good >= hate) && (good >= veryhate)){
  AIAns = "まぁまぁ";
}else if((hate >= veryhate)){
  AIAns = "あんまり";
}else{
  AIAns = "う～ん";
}
 if(AIAns === UserAns){
   lastanswer = "一致したね！{ ・_ ・ v}";
 }else if(UserAns === "いいね！" && AIAns === "まぁまぁ"){
   lastanswer = "惜しかったね{; _; }"
 }else if(UserAns === "まぁまぁ" && (AIAns === "いいね！" || AIAns =="あんまり")){
   lastanswer = "惜しかったね{; _; }"
 }else if(UserAns === "あんまり" && (AIAns === "あんまり" || AIAns =="う～ん")){
   lastanswer = "惜しかったね{; _; }"
 }else if(UserAns === "う～ん" && AIAns === "あんまり"){
  lastanswer = "惜しかったね{; _; }"
 }else{
   lastanswer = "外れちゃったね{; _; }";
 }


  document.write("<p id=\"text1\">僕が判別した答えは</p>");
  document.write("<p id=\"text2\">" + AIAns + "</p>");
  document.write("<p id=\"text3\">君の答えは"+ UserAns + "だったから" + lastanswer + "</p>");

// mainで選んだ人の表示
switch(flg){
  case 'A': mainimg.src = "img/picA.jpg";
       break;
  case 'B': mainimg.src = "img/picB.jpg";
       break;
  case 'C': mainimg.src = "img/picC.jpg";
       break;
  case 'D': mainimg.src = "img/picD.jpg";
       break;
  case 'E': mainimg.src = "img/picE.jpg";
       break;
  case 'F': mainimg.src = "img/picF.jpg";
       break;
}

 

var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["いいね！", "まぁまぁ", "あんまり", "う～ん"],
      datasets: [{
          backgroundColor: [
              "#BB5179",
              "#FAFF67",
              "#58A27C",
              "#3C00FF"
          ],
          data: [verygood, good, hate, veryhate]
      }]
    },
    options: {
      title: {
        display: true,
        text: '一致率 割合'
      }
    }
  });