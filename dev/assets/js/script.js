  $(document).ready(function(){
    $('.whatsapp').mask('(99) 99999-9999');



    $('.slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.prox')
      });

      $('.itens').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        prevArrow: $('.prevtempo'),
        nextArrow: $('.proxtempo'),

        responsive: [{
            breakpoint: 800,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2
            }
          }
          ]
      });

      var scrollItem = document.querySelector('.topHeader');
      var bottom = document.querySelector('.bott');
      var logo = document.querySelector('.iconz');

      function scroll () {
          if(window.pageYOffset>100){
            scrollItem.classList.add('scrolll');
            bottom.classList.remove('btn-outline-light');
            bottom.classList.add('btn-outline-dark');
            logo.src = 'assets/img/ZECONOriginal.png';

          }else{
            scrollItem.classList.remove('scrolll');
            bottom.classList.add('btn-outline-light');
            bottom.classList.remove('btn-outline-dark');
            logo.src = 'assets/img/ZECON.png';
          }
       }

       window.onscroll = scroll;

      function validacao(){
        status = 0;
        if($('.nome').val() == ''){
          $('.erroNome').html('Campo nome requerido!');
          $('.erroNome').show();
          $('.erroNome').focus();
          status = 1;
        }else{
          $('.erroNome').hide();
        }

        if($('.email').val() == ''){
          $('.erroEmail').html('Campo email requerido!');
          $('.erroEmail').show();
          $('.erroEmail').focus();
          status = 1;
        }else{
          var email = $('.email').val();
          var filtro = 	
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
          
          if(!filtro.test(email)) {
            $('.erroEmail').html('Por favor insira um email valido!');
            $('.erroEmail').show();
            $('.erroEmail').focus();
          }else{
            $('.erroEmail').hide();
          }         
        }
        if($('.whatsapp').val() == ''){
          $('.erroWhatsapp').html('Campo de WhatsApp requerido!');
          $('.erroWhatsapp').show();
          $('.erroWhatsapp').focus();
          status = 1;
        }else{
          if(($('.whatsapp').val().length < 15) && ($('.whatsapp').val() != '')){
            $('.erroWhatsapp').html('Por favor complete o campo de WhatsApp com 11 números!');
            $('.erroWhatsapp').show();
            $('.erroWhatsapp').focus();
            status = 1;
          }else{
            $('.erroWhatsapp').hide();
          }
        }

        if (status == 1){
          return false;
        }
      }
        $('.enviar').click( function(e){ 
          e.preventDefault();
          validar = validacao();
          if(validar == false){
            return false;
          }
          var nome  = $('.nome').val();
          var email = $('.email').val();
          var whatsapp   = $('.whatsapp').val();
          var compra = $('.compra').val();
        
          var urlData = "&nome=" + nome +
          "&email=" + email +
          "&whatsapp=" + whatsapp + 
          "&compra=" + compra ;

          $('.whatsapp').val('');
          $('.nome').val('');
          $('.email').val('');
          
   
          $.ajax({
               type: "POST",
               url: "email.php", 
               async: true,
               data: urlData, 
               success: function(data) { 
                   console.log(data);
                   $('.alert-success').fadeIn();
                    setTimeout(()=>{
                      $('.alert-success').fadeOut();
                    },6000);
                    
               },
               error:function(){
                $('.alert-danger').fadeIn();
                setTimeout(()=>{
                  $('.alert-danger').fadeOut();
                },6000);
                
               }
               
              
           });

          
          
      });
  });


      

