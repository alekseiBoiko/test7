// ON CLICK BTNS

function onClick(btnClass, blockClass) {
    $('.'+btnClass).on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('icon-btn_active');
      $('.wrapper_'+blockClass).toggleClass('wrapper_'+blockClass+'_active');
      $('.'+blockClass).toggleClass(blockClass+'_active');
    })
};

$(function(){
    onClick('header-btn-search','search-form');
    onClick('header-btn-bars','side-bar_right');
    onClick('header-btn-shopping-cart','table_short');
    onClick('btn_filter','side-bar_left');
})

// END ON CLICK BTNS
