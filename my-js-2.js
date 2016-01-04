$(document).ready(function(){

  $('#work').click(function(){
    $("#box").animate({"marginLeft":"0px","opacity":"0.2", "width":"15%"}, 700);
    $('.main-content').animate({"width":"85%"},700).delay(500).show()
  });



  // $('img').mouseover(function(){
  //   $('body').css('background-image',"url('tree-bg.jpg')")
  //   $('#box').css('color','white')
  //   $('img').css('color','white')
  // });

  // $('img').mouseleave(function(){
  //   $('body').css('background-image',"none")
  //   $('#box').css('color','black')
  //   $('img').css('fill','white')
  // });
});

// $.fn.fadeSlideRight = function(speed,fn) {
//     return $(this).animate({
//         'opacity' : 1,
//         'width' : '750px'
//     },speed || 400, function() {
//         $.isFunction(fn) && fn.call(this);
//     });
// }

// $.fn.fadeSlideLeft = function(speed,fn) {
//     return $(this).animate({
//         'opacity' : 0,
//         'width' : '0px'
//     },speed || 400,function() {
//         $.isFunction(fn) && fn.call(this);
//     });
// }
