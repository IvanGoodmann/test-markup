import "bootstrap";

$('.burger').on('click', function (e) {
    $('body').toggleClass('open');
});

$(window).scroll(function() {
  let height = $(window).scrollTop();
  if(height > 20){
    $('.header').addClass('fixed');
  } else{
    $('.header').removeClass('fixed');
  }
});
