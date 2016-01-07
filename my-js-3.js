$(document).ready(function(){
  $('.showcase div').each(function(i) {
    $(this).delay((i + 1) * 100).fadeTo(200, 1);
  });

  $('.scip-slick').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    useTransform: true,
    cssEase: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)'
  });

  $('.scip-final').slick({
    variableWidth: true,
    prevArrow: $('.left'),
    nextArrow: $('.right'),
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    useTransform: true,
    cssEase: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
    asNavFor: '.scip-final-txt'
  });
  $('.scip-final-txt').slick({
    asNavFor:'.scip-final',
    fade:true,
    arrows:false,
  });

  $('.msurvey-slick').slick({
    arrows: true,
    adaptiveHeight: true,
    dots: true,
    useTransform: true,
    cssEase: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)'
  });

});
