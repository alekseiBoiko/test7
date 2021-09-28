function drawSlider(listClass) {
    $(listClass).slick({
        
        slidesToShow: 3,
        infinite: true,
        dots: false,
        slidesToScroll: 1,
        slide: 'li',
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-double-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-double-right"></i></button>',
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
    drawSlider('.product-img-list');
})

