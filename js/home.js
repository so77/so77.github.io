$(function(){

 $('.button').hide();
 $('.button').fadeIn(8000);
 $('#title').hide();
 $('#title').fadeIn(1500);
 $('#mozi1').hide();
 $('#mozi1').fadeIn(3000);
 $('#mozi2').hide();
 $('#mozi2').fadeIn(4000);
 });

 if (window.matchMedia( "(max-width: 1000px)" ).matches) {
   var particles = Particles.init({
    selector: '.background',
    sizeVariations: 10,
    color: ['#00bbdd', '#404B69', '#DBEDF3'],
    connectParticles: false
    });
  }else{
     var particles = Particles.init({
      selector: '.background',
      sizeVariations: 10,
      color: ['#00bbdd', '#404B69', '#DBEDF3'],
      connectParticles: true
      });

  }
  



$('h3').delay(5000).queue(function(){
  $(this).text("　　Λ　　");
});
$('h2').delay(5000).queue(function(){
  $(this).text("ぼくをクリックしてね");
});
