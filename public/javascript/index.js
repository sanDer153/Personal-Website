function hover1(element) {
  element.setAttribute('src', 'media/Planet1Persp.png');
}

function unhover1(element) {
  element.setAttribute('src', 'media/Planet1Ortho.png');
}

function hover2(element) {
  element.setAttribute('src', 'media/Planet2Persp.png');
}

function unhover2(element) {
  element.setAttribute('src', 'media/Planet2Ortho.png');
}

// add padding top to show content behind navbar
$('.banner-content').css('margin-top', $('.navbar').outerHeight() + 'px');

// detect scroll top or down
if ($('.smart-scroll').length > 0 && window.screen.width > 920) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}
