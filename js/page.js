var bgWrapper = document.querySelector('.bg-wrapper img');
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
var randomOpacity = (el)=>{
  var randomNumber = getRandomFloat(.25, .35);
  TweenLite.to(el, .1, {css:{opacity: randomNumber}, ease:Power2.easeInOut});

}

setInterval(()=>{
  randomOpacity(bgWrapper);
}, 120);
$('.indexPage .bg-wrapper').parallax();
