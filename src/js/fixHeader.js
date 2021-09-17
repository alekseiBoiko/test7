function fixHeader() {
    let header = $('.header'), //хедер
        headerHeight = header.innerHeight(), // высота хедера
        content = $('body'); //контентная часть
  
    $(window).scroll(function() { //событие скролла страницы
        let windowScroll = $(this).scrollTop(); //скроллим от верха страницы
        if (windowScroll >= headerHeight) { //условие в котором смотрим просклорили страницу на высоту хедера или нет, если да:
        header.addClass('header_fixed'); //довешиваем класс на хедер
        content.css({ //довешиваем отступ на контент
          'padding-top': headerHeight
        })
        } 
        else { //в противном случае все удаляем
        header.removeClass('header_fixed');
        content.css({
            'padding-top': '0'
            })
        }
    })
};

$(function(){
    fixHeader();
})
