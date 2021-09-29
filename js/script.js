$(document).ready(function () {
  const date = document.getElementById("date");
  date.innerText = new Date().getFullYear();

  $(".tab-schedule-content").hide();
  $(".tab-1").show();

  $(".navigation-tab-item").on("click", function () {
    //reset defaults
    $(".tab-schedule-content").hide();
    $("#tab-content-wrapper").removeClass();
    $(".navigation-tab-item").removeClass("tab--active");
    //add active class
    const activeTab = $(this).data().tab;
    $(this).addClass("tab--active");
    $("#tab-content-wrapper").addClass(`${activeTab}-bg`);
    $(`.${activeTab}`).fadeIn(300);
  });

  //navigation header

  $(window).scroll(function () {
    const scrollLocation = $(window).scrollTop();
    const section = $(".history-section").offset().top;

    if (scrollLocation >= section) {
      $(".navigation").addClass("floating-nav");
    } else {
      $(".navigation").removeClass("floating-nav");
    }
  });

  $(".history-carousel-image").slick({
    infinite: true,
    slidesToShow: 4,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
