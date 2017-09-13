$(document).ready(function() {

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
})
