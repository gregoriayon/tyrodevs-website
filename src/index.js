var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 3,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false, // Disable navigation dots
  responsiveClass: true,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 7,
      loop: false,
    },
  },
});
