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

      //  let nome = document.querySelector('.nome');
      
      //  let email = document.querySelector('.email');
 
      //  let whatsapp = document.querySelector('.whatsapp');
 
      //  let compra = document.querySelector('.compra');
 
      //  let enviar = document.querySelector('.enviar');
 
      // enviar.addEventListener('click',(e)=>{
      //   e.preventDefault();   
      //       axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'       
          //   axios({
          //    method: 'POST', 
          //    url: 'email.php',
          //    data: {
          //      nome: nome.value, 
          //      email: email.value, 
          //      whatsapp: whatsapp.value,
          //      compra: compra.value
          //    }
          //  })
          //  .then(response => {
          //      console.log(response);
          //      console.log(nome.value,email.value,whatsapp.value,compra.value);
          //  })
          //  .catch(error => {
          //      console.log(error)
          //  })
        //   axios.post('email.php', { email: email.value, nome: nome.value, whatsapp:whatsapp.value, compra:compra.value })
        //         .then(function(response) {
        //             axios.defaults.headers.common['Authorization'] = response.data.token;    
        //             console.log(response.data);
        //             email.value = '';
        //             nome.value = '';
        //             whatsapp.value = '';
        //             compra.value = '';
        //         })
        //         .catch(function(error) {
        //             console.log(error.data);
        //         })

        // });


        $('.enviar').click( function(e){ 
          e.preventDefault();

          var nome  = $('.nome').val();
          var email = $('.email').val();
          var whatsapp   = $('.whatsapp').val();
          var compra = $('.compra').val();
        
          var urlData = "&nome=" + nome +
          "&email=" + email +
          "&whatsapp=" + whatsapp + 
          "&compra=" + compra ;
   
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
               }
               
           });
          
      });
  });


      

