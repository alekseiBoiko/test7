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