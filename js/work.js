$(document).ready(function() {
  $('body').on('click', '.work ul li', function() {
    $('li.active').removeClass('active');
    $(this).addClass('active');
  })

  $('body').on('click', '#live', function() {
    $('.mockups').addClass('hide');
    $('.live').removeClass('hide');
  })

  $('body').on('click', '#mock', function() {
    $('.live').addClass('hide');
    $('.mockups').removeClass('hide');
  })

  $('body').on('click', '#all', function() {
    $('.live').removeClass('hide');
    $('.mockups').removeClass('hide');
  })
})
