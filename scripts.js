$(document).ready(function() {

  $('.placeholder, .play-button').click(function() {
    // Fade out
    $('.placeholder').fadeOut();
    $('.play-button').fadeOut();
    $('.learn-more').fadeOut();
    var iframe = document.createElement( "iframe" );
    iframe.setAttribute( "frameborder", "0" );
    iframe.setAttribute( "allowfullscreen", "" );
    iframe.setAttribute( "src", "https://www.youtube.com/embed/lOfH89SYESE?rel=0&vq=hd1080&showinfo=0&autoplay=1" );

    $(".youtube").append( iframe );
  });

  // Fixed nav on scroll
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 84) {
      $('header').addClass('nav-fixed');
      $('.learn-more').fadeOut();
    } else {
      $('header').removeClass('nav-fixed');

    }
  });

  $('.smooth-scroll').on('click',function (e) {
    e.preventDefault();
    $('html, body').animate({
       scrollTop: $($.attr(this, 'href')).offset().top - 84
    }, 750);
  });

});