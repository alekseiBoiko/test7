function changeHamburger() {
    $('.menu-btn').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('menu-btn_active');
      $('.nav-block').toggleClass('nav_active');
    })
};

$(function(){
    changeHamburger();
})
function drawSlider() {
    $('.offer-list').slick({
        
        slidesToShow: 5,
        infinite: true,
        dots: true,
        slidesToScroll: 2,
        slide: 'li',
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
    });
};

$(function(){
    drawSlider();
})


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

function initHolderBg(holder) {
    "use strict";
    // set image as inline background
    $(holder).each(function() { 
        var imgHolder = $(this),
                img = imgHolder.find('img'),
                imgSrc = img.attr('src');
        if(!!imgHolder.length && !!img.length && !!imgSrc) {
            imgHolder.css({
                backgroundImage: 'url(' + imgSrc + ')',
                // backgroundSize: 'cover',
                backgroundPosition: '80% 0%',
                backgroundRepeat: 'no-repeat',
                // height: '100%'
            });
            img.remove();
        }
    });
}

$(function(){
    initHolderBg('.add-holder');
    initHolderBg('.partners-discount');
})

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
  initRaty('.product__rate');
})

// END RATE STARS

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
    onClick('header-btn-bars','side-bar');
})
/* sliderRange */
function sliderRange() {
    // slider-range-price
    if ($('.slider-range-price').length) {
      var slider_wrap = $('.slider-range-wrap');
      var slider = $('.slider-range-price');
      var val_start = slider_wrap.find('.slider-range-start');
      var val_end = slider_wrap.find('.slider-range-end');
      slider.slider({
        range: true,
        min: 10,
        max: 4000,
        values: [10, 3000],
        slide: function(event, ui) {
          val_start.val(ui.values[0]);
          val_end.val(ui.values[1]);
        },
       
      });
  
      // inputFilter
      function inputFilter(event) {
        if (!(event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            (event.keyCode == 65 && event.ctrlKey === true) ||
            (event.keyCode >= 35 && event.keyCode <= 39))) {
          if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105))
            event.preventDefault();
        }
      }
      slider_wrap.find(':text').on('keyup keydown', function(event) {
        inputFilter(event);
      });
  
      slider_wrap.find(':text').on('blur', function() {
        var cur = $(this);
        var cur_index = cur.parent().index();
        var cur_value = parseInt(cur.val());
        var parent = cur.parents('.slider-range-wrap:eq(0)');
  
        var cur_slider = parent.find('.slider-range');
        var cur_slider_min = cur_slider.slider('option', 'min');
        var cur_slider_max = cur_slider.slider('option', 'max');
        var cur_slider_values = cur_slider.slider('option', 'values');
        var cur_slider_value = cur_slider_values[0];
        var cur_slider_value2 = cur_slider_values[1];
  
        if (cur_index == 0) {
          if (!isNaN(cur_value)) {
            if (cur_value < cur_slider_min)
              cur_value = cur_slider_min;
            if (cur_value > cur_slider_value2)
              cur_value = cur_slider_value2;
          } else
            cur_value = cur_slider_min;
          cur_slider.slider('option', 'values', [cur_value, cur_slider_value2]);
        } else {
          if (!isNaN(cur_value)) {
            if (cur_value > cur_slider_max)
              cur_value = cur_slider_max;
            if (cur_value < cur_slider_value)
              cur_value = cur_slider_value;
          } else
            cur_value = cur_slider_max;
          cur_slider.slider('option', 'values', [cur_slider_value, cur_value]);
        }
      });
    }
  }
  
  $(function(){
    sliderRange();
})
  /* sliderRange end */


function spinner() {
    var spin = $('.spinner');
    if (spin.length) {
      spin.each(function() {
        var spinner = $(this);
        spinner.spinner({
          spin: function(event, ui) {
            if (ui.value > 9999) {
              $(this).spinner('value', 9999);
              return false;
            } else if (ui.value < 1) {
              $(this).spinner('value', 1);
              return false;
            }
            var spin_val = $(this).spinner('value');
          },
          create: function(ui, event) {
            var widget = $(this).spinner('widget');
            widget.find('.ui-icon-triangle-1-n').html('+');
            widget.find('.ui-icon-triangle-1-s').html('-');
          },
          stop: function(event, ui) {
            // cartTotal();
          }
        });
        // Функция реакции на событие event, проверяет введёный символ на "число это или нет", "дополнительные кнопки или нет" и "значение в интервале 1 - 9999 "
        function checkSpinInput(event) {
          // Если Ctrl+A, home, end, стрелки
          if (event.keyCode == 46 || event.keyCode == 9 || event.keyCode == 27 ||
            (event.keyCode == 65 && event.ctrlKey === true) ||
            (event.keyCode >= 35 && event.keyCode <= 39)) {} else {
            // Если не число - отменить действие 
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
              if (event.keyCode != 8)
                event.preventDefault();
            }
          }
        }
        spinner.keydown(function(event) {
          checkSpinInput(event);
        });
        spinner.keyup(function(event) {
          checkSpinInput(event);
        });
        spinner.blur(function(event) {
          if (!spinner.val() || spinner.val() == 0)
            spinner.val(1);
          // cartTotal();
        });
      });
    }
};

$(function(){
    spinner();
})