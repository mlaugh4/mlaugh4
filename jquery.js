$(document).ready(function(){

  $('.links2 > a:nth-child(1)').click(function(){
    $('#mark').animate({width:'toggle',opacity:'toggle'},500,"swing");
    $(this).toggleClass("active1")
  });

  $('.links2 > a:nth-child(2)').click(function(){
    if ($())
    $('#mark').hide()
    $('#work').animate({height:'toggle',opacity:'toggle'},500,"swing");
    $(this).toggleClass("active2")
  });

});
