// RATE STARS

function initRaty(starClass) {
  'use strict';
  $(starClass).raty({
    score: 3,
    starOff: 'img/star-off.png',
    starOn: 'img/star-on.png',
  });
}

$(function(){
  initRaty('.rate');
})

// END RATE STARS
