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
})
