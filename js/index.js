$(document).ready(function() {
  init();

  var scrollTop = 0;
  var index = 0;
  var currentElement = $($('.container section').get(index));
  var total = $('.container section').length;

  $(window).on('mousewheel', function(e) {
    e.preventDefault();

    scrollTop -= e.originalEvent.wheelDeltaY;

    if (scrollTop < 0) {
      if (index > 0) {
        index--;
        scrollTop = $(window).width() - 1;
        currentElement.css({
          'transform': 'translateX(0px)'
        });
      } else {
        scrollTop = 0;
      }
    }

    if (scrollTop >= $(window).width()) {
      if (index < total - 1) {
        index++;
        currentElement.css({
          'transform': 'translateX(-' + ($(window).width()) + 'px)'
        });
      }

      scrollTop = 0;
    }

    if (index < total - 1) {
      currentElement = $($('.container section').get(index));
      currentElement.css({
        'transform': 'translateX(-' + (scrollTop) + 'px)'
      });
    }
    currentElement.css({
      'opacity': 1.2 - scrollTop / $(window).width()
    });
  });
});

var init = function() {
  var total = $('.container section').length;

  $('.container section').each(function(index) {
    $(this).css({
      'z-index': (total - index)
    });
  });
};