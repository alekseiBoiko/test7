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

