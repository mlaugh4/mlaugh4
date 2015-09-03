$(document).ready(function(){

  $('.links2 > a:nth-child(1)').click(function(){
    if ( $('#work').is(':visible')) {
      $('#work-content').fadeToggle(100);
      $('.project-area').fadeToggle(100);
      $('#work').animate({height:'toggle',opacity:'toggle'},{duration:500,easing: "swing", complete: function() {
        $('#mark').animate({width:'toggle',opacity:'toggle'},500,"swing");
        }
      });
    } else {
      $('#mark').animate({width:'toggle',opacity:'toggle'},500,"swing");
    };
    $('#mark-content').delay(700).fadeToggle(100);
    $('.links2 > a:nth-child(2)').removeClass("active2");
    $(this).toggleClass("active1");
  });


  $('.links2 > a:nth-child(2)').click(function(){
    if ( $('#mark').is(":visible") ) {
      $('#mark').animate({width:'toggle',opacity:'toggle'},{duration:500,easing: "swing", complete: function() {
        $('#work').animate({height:'toggle',opacity:'toggle'},500,"swing");
      }
    });
    } else {
      $('#work').animate({height:'toggle',opacity:'toggle'},500,"swing");
    };
    $('#work-content').delay(700).fadeToggle(100);
    $('.project-area').delay(1000).fadeToggle(100);
    $('.links2 > a:nth-child(1)').removeClass("active1");
    $(this).toggleClass("active2");
  });



});
