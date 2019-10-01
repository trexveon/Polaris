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

      var scrollItem = document.querySelector('.topHeader');
      var bottom = document.querySelector('.bott');
      var logo = document.querySelector('.iconz');

      function scroll () {
          if(window.pageYOffset>100){
            scrollItem.classList.add('scroll');
            bottom.classList.remove('btn-outline-light');
            bottom.classList.add('btn-outline-dark');
            logo.src = 'assets/img/ZECONOriginal.png';

          }else{
            scrollItem.classList.remove('scroll');
            bottom.classList.add('btn-outline-light');
            bottom.classList.remove('btn-outline-dark');
            logo.src = 'assets/img/ZECON.png';
          }
       }

       window.onscroll = scroll;


       

       
  });

