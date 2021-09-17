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
        min: 1000,
        max: 10000,
        values: [2000, 8000],
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
