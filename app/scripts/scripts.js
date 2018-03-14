'use strict';

var bgWrapper = document.querySelector('.bg-wrapper img');
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
var randomOpacity = function randomOpacity(el) {
  var randomNumber = getRandomFloat(.25, .35);
  TweenLite.to(el, .1, { css: { opacity: randomNumber }, ease: Power2.easeInOut });
};

setInterval(function () {
  randomOpacity(bgWrapper);
}, 120);
$('.indexPage .bg-wrapper').parallax();
'use strict';

var t = document.querySelector('.toggleButton button#toggleNav');
var n = document.getElementById('sideNavigation');

t.addEventListener('click', function (e) {

  if (t.getAttribute("data-toggle") == 0) {
    t.setAttribute('data-toggle', '1');

    TweenLite.to(n, .275, { css: { transform: "translateX(337px)" }, ease: Power2.easeInOut });
  } else {
    t.setAttribute('data-toggle', '0');
    TweenLite.to(n, .275, { css: { transform: "translateX(0px)" }, ease: Power2.easeInOut });
  }
});