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

