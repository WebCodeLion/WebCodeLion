$(document).ready(function(){
  $("#carousel1").owlCarousel({

items: 1,
autoplay: true,
loop: true,
autoplaySpeed: 600

  });


$(".center").slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 2,
        autoplay:true,
        autoplaySpeed: 1000,
        centerMode: true,
  centerPadding: '60px'
      });



});



