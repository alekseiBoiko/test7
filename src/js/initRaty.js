// RATE STARS

function initRaty(starClass) {
  'use strict';
  $(starClass).raty({
    score: 3,
    starOff: 'img/star-off.png',
    starOn: 'img/star-on.png',
  });
}

function rateList(number){
  
  for (let r=1;r<number;r++) {
    'use strict';
    $('.rate-item_' + r).raty({
      number: r,
      starOff: 'img/star-off.png',
      starOn: 'img/star-on.png',
    });  
  }
}

$(function(){
  initRaty('.product__rate');
  rateList('6');
})

// END RATE STARS
