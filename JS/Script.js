$(function($){
    "use strict";
    //Menu js
    var menu_icon = $('.menu_icon');
    menu_icon.on('click', function(){
      $('#menu ul').fadeToggle('500');
      $('.logo').toggleClass('logo_left');
    });
    // menu
    let mainMenu = $('.custom_nav').offset().top;

  $(window).scroll(function(){
    let ScrollWin = $(window).scrollTop();
    if(ScrollWin> mainMenu){
        $('.custom_nav').addClass('menu_fixed');
    }else{
        $('.custom_nav').removeClass('menu_fixed');
    }
  //scroll
     if(ScrollWin > 200){
        $('.scroll').fadeIn(1000);
    }else{
        $('.scroll').fadeOut(1000);
    }
  });

  //scroll
    $('.scroll').on("click",function(){
        $('body,html').animate({
        scrollTop: 0
    },500);
    });
 
    //banner pogo js
    /*var mySlider = $('#home_banner')
    mySlider.pogoSlider({
      pauseOnHover: false,
      autoplay: true,
      generateButtons: false,
      autoplayTimeout: 7000,
      generateNav: false,
      generateButtons:true,

    }).data('plugin_pogoSlider');
    
    $('.arrow_left').on('click', function () {
      mySlider.prevSlide();
    });
    $('.arrow_right').on('click', function () {
      mySlider.nextSlide();
    });*/

    //Banner js
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      autoplay: true,
      autoplaySpeed: 3000,
      loop: false,
      effect: 'fade',

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl:'.swiper-button-prev'
      },
    
      // scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    // service slide js
    $('.services_slide').slick({
      slidesToShow: 3,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
          {
              breakpoint: 992,
              settings: {
                slidesToShow: 2
              }
            },
          {
              breakpoint: 576,
              settings: {
                slidesToShow: 2
              }
            },
          {
            breakpoint: 401,
            settings: {
              slidesToShow: 1
            }
          }
          
        ]
  });

  //Counter js
  $('.counter_number').counterUp({
    time: 1000
  });

  //blog slider
  $('.blog_slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<i class="fa-solid banner_arrow_left fa-angle-left"></i>',
    nextArrow: '<i class="fa-solid banner_arrow_right fa-angle-right"></i>',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                
            }
},
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
},
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
}
]
  });

  //testimonial js
      $('.testimonial_text_slider').slick({     
        arrows: false,
        asNavFor:".testimonial_img_slide",
      });
      $('.testimonial_img_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed:3000,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0px',
        asNavFor:".testimonial_text_slider",
      });
//brand js
      $('.brand_slick').slick({
        infinite: true,
        autoplay: true,
        arrows: true,
        prevArrow: '<i class="fa-solid banner_arrow_left fa-angle-left"></i>',
        nextArrow: '<i class="fa-solid banner_arrow_right fa-angle-right"></i>',
        dots: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                   
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
});

//preloader
//   var loader=document.getElementById("preloader");
//   window.addEventListener("load", function(){
//     loader.style.display="none";
// })
  var preloader= document.getElementById("preloader");
  function myfunction(){
    preloader.style.display="none";
  }