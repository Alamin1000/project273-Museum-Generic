(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    $(".menu-open , .offcanvas-overlay").click(function () {
      $(".offcanvas-area , .offcanvas-overlay").addClass("active");
    });
    $(".menu-close , .offcanvas-overlay").click(function () {
      $(".offcanvas-area , .offcanvas-overlay").removeClass("active");
    });

    $(".hero-slider").owlCarousel({
      items: 1,
      nav: true,
      dot: false,
      loop: true,
      margin: 0,
      autoplay: false,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      responsiveClass: true,
      navText: [
        '<img src="assets/img/arrow-left.svg" alt="">',
        '<img src="assets/img/arrow-right.svg" alt="">',
      ],
    });

    $(".testimonial-slider-active").owlCarousel({
      items: 1,
      nav: true,
      dot: false,
      loop: false,
      margin: 20,
      autoplay: false,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      responsiveClass: true,
      navText: [
        "<i class='fas fa-long-arrow-alt-left'></i>",
        "<i class='fas fa-long-arrow-alt-right'></i>",
      ],
      responsive: {
        0: {},
        575: {},
        750: {},
        768: {},
        991: {},
        1200: {},
        1360: {},
      },
    });

    $(".slider").owlCarousel({
      items: 1,
      nav: true,
      dot: false,
      loop: true,
      margin: 20,
      autoplay: false,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      responsiveClass: true,
      navText: [
        "<i class='fas fa-chevron-right'></i>",
        "<i class='fas fa-chevron-left'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        575: {
          items: 1,
          margin: 7,
        },
        750: {
          items: 2,
          margin: 7,
        },
        768: {
          items: 2,
        },
        991: {
          items: 3,
          margin: 12,
        },
        1200: {
          items: 3,
          margin: 14,
        },
        1360: {
          items: 3,
          margin: 20,
        },
      },
    });
  });

  jQuery(window).load(function () {});
})(jQuery);
