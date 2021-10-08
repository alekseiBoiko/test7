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
// CART FUNCTIONS

function keyPress() {
    var count = $('.input__quantity');
    count.keypress(function () {
      this.value = this.value.replace(/\D/g, '');
      basketTotal();
    });
    count.keyup(function () {
      this.value = this.value.replace(/\D/g, '');
      basketTotal();
    });
  }

  function basketTotal() {
    var coupon = $('.cart__coupon').html();
    cart = $('.table_cart tbody');
    (total = $('.table_calculation .cart__subtotal')), (total_value = 0);
    (grandTotal = $('.table_calculation .cart__total')), (grandTotal_value = 0);
    cart.find('tr').each(function () {
      var cur = $(this),
        price = parseFloat(cur.find('.table-cell_price-per-unit').text()), // цена
        count = cur.find('.input__quantity').val(), // количество
        // packing = $('.packing'),
        // packege = count * 5 + ' уп.',
        sum = cur.find('.table-row__total-price'), // стоимость
        sum_value = price * count;
        sum.text('$'+sum_value);
        total_value += sum_value;
        //   packing.html(packege);
    });
    total.html('$'+total_value);
    
    grandTotal.html('$'+(total_value+(+coupon)));
  }

  function deleteRow(e) {
    // cart = $('.table_cart tbody');
    del = $('.btn-product-item_del'); // .table_cart tbody 
    // удаляем строку в корзине
    del.on('click', function (e) {
      e.preventDefault();
      var cur = $(this);
      cur.parents('tr').fadeOut();
      setTimeout(function () {
        cur.parents('tr').remove();
        basketTotal();
      }, 400);
    });
  }


$(function(){
    basketTotal();
    keyPress();
    deleteRow();
})
//   END CART

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
// SLICK SLIDER

function drawProductCardSlider(listClass) {
    $('.product-img-list').slick({
        
        slidesToShow: 3,
        infinite: true,
        dots: false,
        slidesToScroll: 1,
        slide: 'li',
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev slick-prev_card"><i class="fas fa-angle-double-left"></i></button>',
        nextArrow: '<button type="button" class="slick-prev slick-next_card"><i class="fas fa-angle-double-right"></i></button>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
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

function drawRelatedProductSlider(listClass) {
  $('.product-list_related').slick({
      
      slidesToShow: 4,
      infinite: true,
      dots: false,
      slidesToScroll: 1,
      slide: 'li',
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev slick-prev_related"><i class="fas fa-long-arrow-alt-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next slick-next_related"><i class="fas fa-long-arrow-alt-right"></i></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
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
  drawProductCardSlider();
  drawRelatedProductSlider();
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
// TABS FUNCTION

function tabs(element) {
    "use strict";
    var tabsHolder = $(element),
        tabsTitle = tabsHolder.find('.tabs-title .tab-title'),
        tabsContent = tabsHolder.find('.tabs-holder .tab-item');
    tabsTitle.each(function(index) {
      $(this).attr('data-tab', index);
      $('[data-tab="0"]').addClass('active');
    })
    tabsContent.each(function(index) {
      $(this).attr('data-content', index);
      $('[data-content="0"]').addClass('active');
    })
    
      
    $('[data-tab]').on({
      click: function (e) {
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active');
        $('[data-content=' + $(this)
                      .data('tab') + ']')
                      .addClass('active')
                      .siblings('[data-content]')
                      .removeClass('active');
        e.preventDefault();
      }
    }); 
  } 

  $(function(){
    tabs('.tabs');
})

// END OF TABS FUNCTION
