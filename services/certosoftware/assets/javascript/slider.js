$('.slider__list').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '80px',
    responsive: [
        {
          breakpoint: 1120,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          centerMode: false,
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
          }
        }
    ]
});