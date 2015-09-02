$(document).ready(function(){

  $('.links2 > a:nth-child(1)').click(function(){
    // $('.container div:nth-child(2)').delay(500).hide(500);
    $('#mark').animate({width:'toggle',opacity:'toggle'},500,"swing").delay(200);
    $(this).toggleClass("active1")
  });

  $('.links2 > a:nth-child(2)').click(function(){
    if ( $('#mark').is(":visible") ) {
      $('#mark').animate({width:'toggle',opacity:'toggle'},{duration:500,easing: "swing", complete: function() {
        $('#work').animate({height:'toggle'},500,"swing");
      }
    });
    } else {
      $('#work').animate({height:'toggle'},500,"swing");
      $(this).toggleClass("active2")
    };
    $('#work-content').delay(700).fadeToggle(100);
    $('.project-area').delay(1000).fadeToggle(100);
    $('.links2 > a:nth-child(1)').removeClass("active1");
    $(this).toggleClass("active2");
  });

});
