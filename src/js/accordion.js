// ACCORDION FOOTER NAV

function accordion() {
    $('.footer-nav-list').each(function () {
        var cur = $(this),
            curTitle = cur.find('.list-title');
        curTitle.on('click', function (e) {
          e.preventDefault();
          cur.toggleClass('visible').siblings().removeClass('visible');
        });
    });
}


$(function(){
    accordion();
})
// END ACCORDION