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
