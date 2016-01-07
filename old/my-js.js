$(document).ready(function(){

  $('.links2 > a:nth-child(1)').click(function(){
    if ( $('#work').is(':visible')) {
      $('#work-content').fadeToggle(100);
      $('.project-area').fadeToggle(100);
      $('#work').animate({height:'toggle',opacity:'toggle'},{duration:300,easing: "swing", complete: function() {
        $('#mark').animate({width:'toggle',opacity:'toggle'},300,"swing");
        }
      });
    } else {
      $('#mark').animate({width:'toggle',opacity:'toggle'},300,"swing");
    };
    $('#mark-content').delay(700).fadeToggle(100);
    $('.links2 > ul > li:nth-child(1)').removeClass("active2");
    $(this).toggleClass("active1");
  });


  $('.links2 > ul > li:nth-child(1)').click(function(){
    if ( $('#mark').is(":visible") ) {
      $('#mark').animate({width:'toggle',opacity:'toggle'},{duration:300,easing: "swing", complete: function() {
        $('#work').animate({height:'toggle',opacity:'toggle'},300,"swing");
      }
    });
    } else {
      $('#work').animate({height:'toggle',opacity:'toggle'},300,"swing");
    };

    $('#work-content').delay(700).fadeToggle(100);
    $('.project-area').delay(1000).fadeToggle(100);
    // $('.image-slider').css("display","block");
    $('.links2 > a:nth-child(1)').removeClass("active1");
    $(this).toggleClass("active2");
    // $('.image-slider')[0].slick.refresh();
    // $('.image-slider').get(0).slick.setPosition();
  });

  $('.image-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    // fade: true,
    cssEase: 'linear'
  });

});

  // $(function() {
  //   var images = ['tree-bg.jpg','dog_small.jpg','mexico-soccer.jpg','volcano.jpg','giraffe-butt.jpg'];
  //   $('body').css({'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + ')'});
  // });

