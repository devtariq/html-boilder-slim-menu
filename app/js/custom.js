(function ($) {
  ('use strict');
  // Preloader
  $(window).on('load', function () {
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({overflow: 'visible'});
  });

  $('#navigation').slimmenu({
    resizeWidth: '767',
    collapserTitle: '',
    animSpeed: 'medium',
    indentChildren: false,
    childrenIndenter: '&nbsp;',
    expandIcon: "<img src='images/down-arrow.png'>",
    collapseIcon: "<img src='images/arrow-up.png'>",
  });
  // Mobile Toggle Nav animation
  $('.menu-collapser').on('click', function () {
    console.log('hel');
    $(this).toggleClass('active');
  });
  $('.grid').isotope({
    // options
    itemSelector: '.single-quote',
    percentPosition: true,
    masonry: {
      // use element for option
      columnWidth: 1,
    },
  });

  // Sticky Menu
  let header = $('header.header');
  let win = $(window);

  win.on('scroll', function () {
    let scroll = win.scrollTop();
    if (scroll < 1) {
      header.removeClass('scroll-on');
    } else {
      header.addClass('scroll-on');
    }
  });

  $('.navbar li a').on('click', function (e) {
    var $anchor = $(this);
    var headerH = '65';
    $('html,body')
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top - headerH + 'px',
        },
        800
      );
    e.preventDefault();
  });

  AOS.init({
    duration: 1500,
    offset: 200,
    disable: 'mobile',
  });
})(jQuery);
