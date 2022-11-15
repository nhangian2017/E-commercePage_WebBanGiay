$(document).ready(function () {
    $(".feature-slider").slick({
      infinite: true,
      // Số slide hiển thị
      slidesToShow: 4,
      // Số slide khi scroll
      slidesToScroll: 2,
      // Tự động dịch chuyển
      autoplay: false,
      dots: true,
      // Tự động dịch sau n giây
      // autoplaySpeed: 2000,
      // Làm mất 2 cái prev và next
      arrows: false,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
  
  $(document).ready(function () {
    $(".newest-slider").slick({
      infinite: true,
      // Số slide hiển thị
      slidesToShow: 4,
      // Số slide khi scroll
      slidesToScroll: 2,
      // Tự động dịch chuyển
      autoplay: false,
      dots: true,
      // Tự động dịch sau n giây
      // autoplaySpeed: 2000,
      // Làm mất 2 cái prev và next
      arrows: false,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
  $(document).ready(function () {
    $(".member-details_slider").slick({
      infinite: true,
      // Số slide hiển thị
      slidesToShow: 1,
      // Số slide khi scroll
      slidesToScroll: 1,
      // Tự động dịch chuyển
      autoplay: true,
      dots: true,
      // Tự động dịch sau n giây
      // autoplaySpeed: 2000,
      // Làm mất 2 cái prev và next
      // arrows: false,
      prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fas fa-caret-square-left'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fas fa-caret-square-right'></i></button>",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
  