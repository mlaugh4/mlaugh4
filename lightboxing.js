 $(document).ready(function(){

$(".content img").click(function(){
  $(".lightbox").fadeIn(300);
  $(".title").append("<h1>" + $(this).attr("alt") + "</h1>" );
  $('.middle').css("background-image", "url(" + $(this).attr("src") + ")");
  $("html").css("overflow","hidden");
});

$(".close, .lightbox").click(function(){
  $(".lightbox").fadeOut(300);
  setTimeout(function() {
    $("h1").remove();
    $("html").css("overflow","auto");
  }, 300);
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    $(".lightbox").fadeOut(300);
    setTimeout(function() {
      $("h1").remove();
      $("html").css("overflow","auto");
    }, 300);
  }
});

});
