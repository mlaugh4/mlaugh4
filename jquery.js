$(document).ready(function(){
  $('.hero-image').slideDown(1000);
  setTimeout($('.header').css("opacity","1"),1000);
});

$('.link').click(function() {
  $('.header').css("padding-bottom","80vh");
  $(this).addClass("active");
});
