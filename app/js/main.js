$(document).ready(function(){
  $(".testimonials-slider").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
    items:1,
    dots: false
  });

  $(".complete-objects-slider").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
    items:12,
    dots: false
  });
  $(".bigSlider-slider").owlCarousel({
  	loop: true,
    nav: true,
    items: 1
  });
});