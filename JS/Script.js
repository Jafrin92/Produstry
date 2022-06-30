//preloader
//   var loader=document.getElementById("preloader");
//   window.addEventListener("load", function(){
//     loader.style.display="none";
// })
var preloader= document.getElementById("preloader");
function myfunction(){
  preloader.style.display="none";
}

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
    // autoplay: true,
    // autoplaySpeed: 3000,
    prevArrow: '.blogicon_left',
    nextArrow: '.blogicon_right',
    speed: 500,
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
        prevArrow: '.testimonial_left',
        nextArrow: '.testimonial_right',
        slidesToShow: 3,
        centerMode: true,
        speed: 500,
        centerPadding: '0px',
        asNavFor:".testimonial_text_slider",
      });

//brand js
      $('.brand_slick').slick({
        infinite: true,
        prevArrow: '.brand_left',
        nextArrow: '.brand_right',
        dots: false,
        speed: 500,
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

//about page
//team slider
$('.team_slider').slick({
  infinite: true,
  arrows: true,
  prevArrow: '.team_left',
  nextArrow: '.team_right',
  speed: 300,
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 3,
  slidesToScroll: 1,
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
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
		