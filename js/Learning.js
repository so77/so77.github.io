$('h1').delay(2000).queue(function(){
  $(this).text("{ 　・_- }＜好みな順にクリックしてね");
});
//---------------------最初のメッセージ---------------------//
var flg = localStorage.getItem("Flg");
console.log(flg);

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
var img6 = document.getElementById('img6');

var img2_1 = document.getElementById('img2_1');
var img2_2 = document.getElementById('img2_2');
var img2_3 = document.getElementById('img2_3');
var img2_4 = document.getElementById('img2_4');

var img3_1 = document.getElementById('img3_1');
var img3_2 = document.getElementById('img3_2');
var img3_3 = document.getElementById('img3_3');
var img3_4 = document.getElementById('img3_4');
var img3_5 = document.getElementById('img3_5');
var img3_6 = document.getElementById('img3_6');

var verygood=0;
var good=0;
var hate=0;
var veryhate=0;

var i=0;
var j=0;
var arrey = new Array;

var imgAns = new Array;
var parAns = new Array;
var secondImg = new Array;
var secondPar = new Array;
var EndImg = new Array;
var EndPar = new Array;

var imagesArreyA = [
  [
  'img/pic00.jpg',
  'img/pic01.jpg',
  'img/pic02.jpg',
  'img/pic03.jpg',
  'img/pic04.jpg',
  'img/pic05.jpg',
  'img/pic06.jpg',
  'img/pic07.jpg',
  'img/pic08.jpg',
  'img/pic09.jpg',
  'img/pic10.jpg',
  'img/pic11.jpg',
  'img/pic12.jpg',
  'img/pic13.jpg',
  'img/pic14.jpg',
  'img/pic15.jpg',
  'img/pic16.jpg',
  'img/pic17.jpg',
  'img/pic18.jpg',
  'img/pic19.jpg',
  'img/pic20.jpg',
  'img/pic21.jpg',
  'img/pic22.jpg',
  'img/pic23.jpg'
],[
  9.20,
  9.20,
  18.20,
  9.60,
  16.80,
  8.90,
  9.40,
  9.50,
  10.10,
  28.60,
  37.90,
  23.70,
  10.10,
  10.10,
  10.40,
  12.90,
  9.50,
  17.10,
  8.50,
  9.20,
  10.40,
  9,
  26.60,
  10.10
]
];
var imagesArreyB = [
  [
  'img/pic00.jpg',
  'img/pic01.jpg',
  'img/pic02.jpg',
  'img/pic03.jpg',
  'img/pic04.jpg',
  'img/pic05.jpg',
  'img/pic06.jpg',
  'img/pic07.jpg',
  'img/pic08.jpg',
  'img/pic09.jpg',
  'img/pic10.jpg',
  'img/pic11.jpg',
  'img/pic12.jpg',
  'img/pic13.jpg',
  'img/pic14.jpg',
  'img/pic15.jpg',
  'img/pic16.jpg',
  'img/pic17.jpg',
  'img/pic18.jpg',
  'img/pic19.jpg',
  'img/pic20.jpg',
  'img/pic21.jpg',
  'img/pic22.jpg',
  'img/pic23.jpg'
],[
  15.30,8.40,8.90,9.80,17.90,9.60,8.40,10.10,8.90,10.20,9.40,8.60,9.30,8.0,9.40,23.70,13.90,8.80,9.70,9.30,9.80,10,9.30,9.40
]
];
var imagesArreyC = [
  [
  'img/pic00.jpg',
  'img/pic01.jpg',
  'img/pic02.jpg',
  'img/pic03.jpg',
  'img/pic04.jpg',
  'img/pic05.jpg',
  'img/pic06.jpg',
  'img/pic07.jpg',
  'img/pic08.jpg',
  'img/pic09.jpg',
  'img/pic10.jpg',
  'img/pic11.jpg',
  'img/pic12.jpg',
  'img/pic13.jpg',
  'img/pic14.jpg',
  'img/pic15.jpg',
  'img/pic16.jpg',
  'img/pic17.jpg',
  'img/pic18.jpg',
  'img/pic19.jpg',
  'img/pic20.jpg',
  'img/pic21.jpg',
  'img/pic22.jpg',
  'img/pic23.jpg'
],[
  9.60,9.80,8.10,10.10,11.20,9.90,9.70,22,9.90,8.60,9.10,9.90,19.50,8.10,9.30,9.80,8.60,9.10,8.40,9.50,8.60,9.10,11.60,9,
]
];
var imagesArreyD = [
  [
  'img/pic00.jpg',
  'img/pic01.jpg',
  'img/pic02.jpg',
  'img/pic03.jpg',
  'img/pic04.jpg',
  'img/pic05.jpg',
  'img/pic06.jpg',
  'img/pic07.jpg',
  'img/pic08.jpg',
  'img/pic09.jpg',
  'img/pic10.jpg',
  'img/pic11.jpg',
  'img/pic12.jpg',
  'img/pic13.jpg',
  'img/pic14.jpg',
  'img/pic15.jpg',
  'img/pic16.jpg',
  'img/pic17.jpg',
  'img/pic18.jpg',
  'img/pic19.jpg',
  'img/pic20.jpg',
  'img/pic21.jpg',
  'img/pic22.jpg',
  'img/pic23.jpg'
],[
  8.40,9.60,9.90,8.30,9.30,21.80,8.90,10.10,28.30,8.90,8.60,8.70,13,9.40,9.40,8.90,9.30,10.20,8.70,10.10,8.10,9.50,9.70,8.90
]
];
var imagesArreyE = [
  [
  'img/pic00.jpg',
  'img/pic01.jpg',
  'img/pic02.jpg',
  'img/pic03.jpg',
  'img/pic04.jpg',
  'img/pic05.jpg',
  'img/pic06.jpg',
  'img/pic07.jpg',
  'img/pic08.jpg',
  'img/pic09.jpg',
  'img/pic10.jpg',
  'img/pic11.jpg',
  'img/pic12.jpg',
  'img/pic13.jpg',
  'img/pic14.jpg',
  'img/pic15.jpg',
  'img/pic16.jpg',
  'img/pic17.jpg',
  'img/pic18.jpg',
  'img/pic19.jpg',
  'img/pic20.jpg',
  'img/pic21.jpg',
  'img/pic22.jpg',
  'img/pic23.jpg'
],[
  9.20,8.80,9.10,21.70,8.90,8.50,12.90,8.40,8.60,9,8.90,9.10,9.70,9.30,9.70,9.20,9.90,9.80,8.40,8.50,9.70,8.90,8.50,9.70
]
];
var imagesArreyF = [
  [
  'img/pic00.jpg',
  'img/pic01.jpg',
  'img/pic02.jpg',
  'img/pic03.jpg',
  'img/pic04.jpg',
  'img/pic05.jpg',
  'img/pic06.jpg',
  'img/pic07.jpg',
  'img/pic08.jpg',
  'img/pic09.jpg',
  'img/pic10.jpg',
  'img/pic11.jpg',
  'img/pic12.jpg',
  'img/pic13.jpg',
  'img/pic14.jpg',
  'img/pic15.jpg',
  'img/pic16.jpg',
  'img/pic17.jpg',
  'img/pic18.jpg',
  'img/pic19.jpg',
  'img/pic20.jpg',
  'img/pic21.jpg',
  'img/pic22.jpg',
  'img/pic23.jpg'
],[
  8.90,8.20,9.00,9.60,9.50,9.60,9.30,10,17.60,8.50,23.90,11.80,10.10,8.40,40.50,9.80,8.70,9,9.90,8,24,9.80,8.30,8.60
]
];

switch(flg){
  case 'A': arrey = imagesArreyA;
       break;
  case 'B': arrey = imagesArreyB;
       break;
  case 'C': arrey = imagesArreyC;
       break;
  case 'D': arrey = imagesArreyD;
       break;
  case 'E': arrey = imagesArreyE;
       break;
  case 'F': arrey = imagesArreyF;
       break;
}

img1.src = arrey[0][i];
img2.src = arrey[0][i+1];
img3.src = arrey[0][i+2];
img4.src = arrey[0][i+3];
img5.src = arrey[0][i+4];
img6.src = arrey[0][i+5];

img2_1.style.display ="none"; // スタイルで非表示
img2_2.style.display ="none";
img2_3.style.display ="none";
img2_4.style.display ="none";

img3_1.style.display ="none";
img3_2.style.display ="none";
img3_3.style.display ="none";
img3_4.style.display ="none";
img3_5.style.display ="none";
img3_6.style.display ="none";


function setimages1(i) {
  img1.style.display ="inline"; 
  img2.style.display ="inline";
  img3.style.display ="inline";
  img4.style.display ="inline";
  img5.style.display ="inline";
  img6.style.display ="inline";
  
  img1.src = arrey[0][i];
  img2.src = arrey[0][i+1];
  img3.src = arrey[0][i+2];
  img4.src = arrey[0][i+3];
  img5.src = arrey[0][i+4];
  img6.src = arrey[0][i+5];
}

function setimages2(i) {
  img2_1.style.display ="inline"; 
  img2_2.style.display ="inline";
  img2_3.style.display ="inline";
  img2_4.style.display ="inline";

  img2_1.src = imgAns[i];
  img2_2.src = imgAns[i+6];
  img2_3.src = imgAns[i+12];
  img2_4.src = imgAns[i+18];
}

function setimages3(i) {
  img3_1.style.display ="inline"; 
  img3_2.style.display ="inline";
  img3_3.style.display ="inline";
  img3_4.style.display ="inline";
  img3_5.style.display ="inline";
  img3_6.style.display ="inline";

  img3_1.src = secondImg[i];
  img3_2.src = secondImg[i+4];
  img3_3.src = secondImg[i+8];
  img3_4.src = secondImg[i+12];
  img3_5.src = secondImg[i+16];
  img3_6.src = secondImg[i+20];
}


function endnext(){
  for(var i=0; i<6; i++){
    verygood += EndPar[i];    // [0]+[1]+[2]+[3]+[4]+[5]
    good += EndPar[i+6];      // [6]+[7]+[8]+[9]+[10]+[11]
    hate += EndPar[i+12];     // [12]+[13]+[14]+[15]+[16]+[17]
    veryhate += EndPar[i+18]; // [18]+[19]+[20]+[21]+[22]+[23]
  }
  localStorage.setItem('VeryGood', verygood);
  localStorage.setItem('Good', good);
  localStorage.setItem('Hate', hate);
  localStorage.setItem('VeryHate', veryhate);

  window.location.href = 'loading.html';
}

img1.addEventListener('click', () => {
  imgAns.push(arrey[0][i]);
  console.log(imgAns);
  parAns.push(arrey[1][i]);
  console.log(parAns);
  img1.style.display = "none";
  j++;
  
  if(j === 6){
    if(i === 18){
      i=0;
      j=0;
      
      $("#div1").remove();
      setimages2(i);
     }else{
       i+=6;
       j=0;
       setimages1(i);
    }
  }
});
img2.addEventListener('click', () => {
  imgAns.push(arrey[0][i+1]);
  console.log(imgAns);
  parAns.push(arrey[1][i+1]);
  console.log(parAns);
  img2.style.display = "none";
  j++;
  if(j === 6){
    if(i === 18){
      i=0;
      j=0;
      
      $("#div1").remove();
      setimages2(i);
     }else{
       i+=6;
       j=0;
       setimages1(i);
    }
  }
});
img3.addEventListener('click', () => {
  imgAns.push(arrey[0][i+2]);
  console.log(imgAns);
  parAns.push(arrey[1][i+2]);
  console.log(parAns);
  img3.style.display = "none";
  j++;
  
  if(j === 6){
    if(i === 18){
      i=0;
      j=0;
      
      $("#div1").remove();
      setimages2(i);
     }else{
       i+=6;
       j=0;
       setimages1(i);
    }
  }
});
img4.addEventListener('click', () => {
  imgAns.push(arrey[0][i+3]);
  console.log(imgAns);
  parAns.push(arrey[1][i+3]);
  console.log(parAns);
  img4.style.display = "none";
  j++;
  
  if(j === 6){
    if(i === 18){
      i=0;
      j=0;
      
      $("#div1").remove();
      setimages2(i);
     }else{
       i+=6;
       j=0;
       setimages1(i);
    }
  }
});
img5.addEventListener('click', () => {
  imgAns.push(arrey[0][i+4]);
  console.log(imgAns);
  parAns.push(arrey[1][i+4]);
  console.log(parAns);
  img5.style.display = "none";
  j++;
  
  if(j === 6){
    if(i === 18){
      i=0;
      j=0;
      
      $("#div1").remove();
      setimages2(i);
     }else{
       i+=6;
       j=0;
       setimages1(i);
    }
  }
});
img6.addEventListener('click', () => {
  imgAns.push(arrey[0][i+5]);
  console.log(imgAns);
  parAns.push(arrey[1][i+5]);
  console.log(parAns);
  img6.style.display = "none";
  j++;
  
  if(j === 6){
    if(i === 18){
      i=0;
      j=0;
      
      $("#div1").remove();
      setimages2(i);
     }else{
       i+=6;
       j=0;
       setimages1(i);
    }
  }
});

// --------------------------------------------------------------------------- //

img2_1.addEventListener('click', () => {
  secondImg.push(imgAns[i]);
  console.log(secondImg);
  secondPar.push(parAns[i]);
  console.log(secondPar);
  j++;
  img2_1.style.display ="none";
  
  if(j === 4){
    if(i === 5){
      
      $("#div2").remove();
      i=0;
      j=0;
      setimages3(i);
    }else{
      i++;
      setimages2(i);
      j=0;
    }
  }
});
img2_2.addEventListener('click', () => {
  secondImg.push(imgAns[i+6]);
  console.log(secondImg);
  secondPar.push(parAns[i+6]);
  console.log(secondPar);
  j++;
  img2_2.style.display ="none";
  if(j === 4){
    if(i === 5){
      
      $("#div2").remove();
      i=0;
      j=0;
      setimages3(i);
    }else{
      i++;
      setimages2(i);
      j=0;
    }
  }
});
img2_3.addEventListener('click', () => {
  secondImg.push(imgAns[i+12]);
  console.log(secondImg);
  secondPar.push(parAns[i+12]);
  console.log(secondPar);
  j++;
  img2_3.style.display ="none";
  if(j === 4){
    if(i === 5){
      
      $("#div2").remove();
      i=0;
      j=0;
      setimages3(i);
    }else{
      i++;
      setimages2(i);
      j=0;
    }
  }
});
img2_4.addEventListener('click', () => {
  secondImg.push(imgAns[i+18]);
  console.log(secondImg);
  secondPar.push(parAns[i+18]);
  console.log(secondPar);
  j++;
  img2_4.style.display ="none";
  if(j === 4){
    if(i === 5){
      
      $("#div2").remove();
      i=0;
      j=0;
      setimages3(i);
    }else{
      i++;
      setimages2(i);
      j=0;
    }
  }
});

img3_1.addEventListener('click', () => {
  EndImg.push(secondImg[i]);
  console.log(EndImg);
  EndPar.push(secondPar[i]);
  console.log(EndPar);
  img3_1.style.display = "none";
  j++;
  
  if(j === 6){
    if(i === 3){
      i=0;
      j=0;
      
      $("#div3").remove();
      endnext();
     }else{
       i+=1;
       j=0;
       setimages3(i);
    }
  }
});
img3_2.addEventListener('click', () => {
  EndImg.push(secondImg[i+4]);
  console.log(EndImg);
  EndPar.push(secondPar[i+4]);
  console.log(EndPar);
  img3_2.style.display = "none";
  j++;
  
  if(j === 6){
    if(i === 3){
      i=0;
      j=0;
      
      $("#div3").remove();
      endnext();
     }else{
       i+=1;
       j=0;
       setimages3(i);
    }
  }
});
img3_3.addEventListener('click', () => {
  EndImg.push(secondImg[i+8]);
  console.log(EndImg);
  EndPar.push(secondPar[i+8]);
  console.log(EndPar);
  img3_3.style.display = "none";
  j++;
  
  if(j === 6){
    if(i === 3){
      i=0;
      j=0;
      
      $("#div3").remove();
      endnext();
     }else{
       i+=1;
       j=0;
       setimages3(i);
    }
  }
});
img3_4.addEventListener('click', () => {
  EndImg.push(secondImg[i+12]);
  console.log(EndImg);
  EndPar.push(secondPar[i+12]);
  console.log(EndPar);
  img3_4.style.display = "none";
  j++;
  
  if(j === 6){
    if(i === 3){
      i=0;
      j=0;
      
      $("#div3").remove();
      endnext();
     }else{
       i+=1;
       j=0;
       setimages3(i);
    }
  }
});
img3_5.addEventListener('click', () => {
  EndImg.push(secondImg[i+16]);
  console.log(EndImg);
  EndPar.push(secondPar[i+16]);
  console.log(EndPar);
  img3_5.style.display = "none";
  j++;
  
  if(j === 6){
    if(i === 3){
      i=0;
      j=0;
      
      $("#div3").remove();
      endnext();
     }else{
       i+=1;
       j=0;
       setimages3(i);
    }
  }
});
img3_6.addEventListener('click', () => {
  EndImg.push(secondImg[i+20]);
  console.log(EndImg);
  EndPar.push(secondPar[i+20]);
  console.log(EndPar);
  img3_6.style.display = "none";
  j++;
  
  if(j === 6){
    if(i === 3){
      i=0;
      j=0;
      
      $("#div3").remove();
      endnext();
     }else{
       i+=1;
       j=0;
       setimages3(i);
    }
  }
});