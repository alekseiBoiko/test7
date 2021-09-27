// ON CLICK BTNS

function onClick(btnClass, blockClass) {
    $('.'+btnClass).on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('icon-btn_active');
      $('.'+blockClass+'-wrapper').toggleClass(blockClass+'-wrapper_active');
      $('.'+blockClass).toggleClass(blockClass+'_active');
    })
};

$(function(){
    onClick('header-btn-search','search-form');
    onClick('header-btn-bars','side-bar_right');
})

// END ON CLICK BTNS
