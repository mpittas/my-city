$(document).ready(function(){
  $('.vr-slider').slick({
      dots: true
  });

  $('.vr-floating-boxes').slick({
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    dots: true
  });

  $('.vr-destination-images').slick({
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    dots: true
  });
});