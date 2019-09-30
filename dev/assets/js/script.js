  $(document).ready(function(){
    $('.slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.prox')
      });
  });