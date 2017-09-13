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
  $("#toTop").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 1000);
  });
})

$(window).scroll(function() {
  if ($(window).scrollTop() > 50 ) {
    console.log('hey');
  $('.navbar').css({'position' : 'fixed',
                  'top' : 0,
                  'background-color' : '#001c33',
                  'border' : 'none'
                });
  $('.navbar ul li').css({'color' : '#fff'});
  } else {
  $('.navbar').css({'position' : 'fixed',
  'top' : 0,
  'background-color' : '#fff',
  'border-top' : '8px solid #001c33'});
  $('.navbar ul li').css({'color' : '#474747'});
  $('.navbar ul li:hover').css({'color' : '#001c33'})
  }
});
