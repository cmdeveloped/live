$(document).ready(function() {
// you're doing it!
  if ($(window).scrollTop() > 50 ) {
  $('.nav').css({'position' : 'fixed', 'top' : 0});
  } else {
  $('.nav').css({'position' : 'relative', 'top' : 'none'});
  }

  // navigation scroll to section
  $("#toWork").click(function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 2000);
  });
  $("#toAbout").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
  });
  $("#toContact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000);
  });
  $("#toTop").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 1000);
  });
})
