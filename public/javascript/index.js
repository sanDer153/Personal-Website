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


$('.banner-content').css('margin-top', $('.navbar').outerHeight() + 'px');

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

function plClick(element){
  if($(element).find('.pl-text').hasClass('pl-text-clicked')){
    $('.pl-text').removeClass('pl-text-clicked').addClass('pl-text-unclicked');
  }else{
    $('.pl-text').removeClass('pl-text-clicked').addClass('pl-text-unclicked');
    $(element).find('.pl-text').removeClass('pl-text-unclicked').addClass('pl-text-clicked');
  }
  
}
