$(function () {
  "use strict";

  new WOW().init();
  $(".timer").countTo();

  // active mixitup shuffle plugin
  $("#portfolio-container").mixItUp();

  // add class to navbar on scroll
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 500) {
      $(".nav").addClass("shadow-nav");
    } else {
      $(".nav").removeClass("shadow-nav");
    }
  });
});
