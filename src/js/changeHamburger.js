function changeHamburger() {
    $('.btn_menu').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('btn_menu_active');
      $('.header-nav-list').toggleClass('header-nav-list_active');
    })
};

$(function(){
    changeHamburger();
})