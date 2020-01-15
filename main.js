'use strict';
const CA = document.getElementById('clickA');
const CB = document.getElementById('clickB');
const CC = document.getElementById('clickC');
const CD = document.getElementById('clickD');
const CE = document.getElementById('clickE');
const CF = document.getElementById('clickF');

var flg;

CA.addEventListener('click', () => {
  if(window.confirm('この人でいいですか？')){
    flg='A';
    localStorage.setItem('Flg', flg);
		location.href = "Eva.html"; 
	}
	else{
		window.alert('｛　・＿・　｝＜・・・'); 
	}
});
CB.addEventListener('click', () => {
  if(window.confirm('この人でいいですか？')){
    flg='B';
    localStorage.setItem('Flg', flg);
		location.href = "Eva.html"; 
	}
	else{
		window.alert('｛　・＿・　｝＜・・・'); 
	}
});
CC.addEventListener('click', () => {
  if(window.confirm('この人でいいですか？')){
    flg='C';
    localStorage.setItem('Flg', flg);
		location.href = "Eva.html"; 
	}
	else{
		window.alert('｛　・＿・　｝＜・・・'); 
	}
});
CD.addEventListener('click', () => {
  if(window.confirm('この人でいいですか？')){
    flg='D';
    localStorage.setItem('Flg', flg);
		location.href = "Eva.html"; 
	}
	else{
		window.alert('｛　・＿・　｝＜・・・'); 
	}
});
CE.addEventListener('click', () => {
  if(window.confirm('この人でいいですか？')){
    flg='E';
    localStorage.setItem('Flg', flg);
		location.href = "Eva.html"; 
	}
	else{
		window.alert('｛　・＿・　｝＜・・・'); 
	}
});
CF.addEventListener('click', () => {
  if(window.confirm('この人でいいですか？')){
    flg='F';
    localStorage.setItem('Flg', flg);
		location.href = "Eva.html"; 
	}
	else{
		window.alert('｛　・＿・　｝＜・・・'); 
	}
});

