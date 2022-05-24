$(function () {

  $('.site-preparation-text').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: false,
    nextArrow: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    fadeSpeed: 1000
  });

  // ------------------------------

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 6,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true
  });

  // ------------------------------

  $('.portfolio-work').owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
  })

  // ------------------------------

  $(document).on("click", ".fa-align-right", function () {
    $(".left-menu-wrapper").show();
    $(".left-sub-menu").animate({ left: 0 });
    $(this).css("opacity", "0");
    $("body").css("overflow", "hidden");
  });

  $(document).on("click", ".close-responsive", function () {
    $(".left-menu-wrapper").hide();
    $(".fa-align-right").css("opacity", "1");
    $(".left-sub-menu").animate({ left: "-100%" });
  });

  $(document).on("click", ".left-sub-menu li", function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

    // ------------------------------

  $(".search-btn").click(function () {
    $(".filter").slideDown();
    $(".seach-wrap-item .fa-close").show();
    $(this).hide();
  });

  $(".seach-wrap-item .fa-close").click(function () {
    $(".filter").slideUp();
    $(".search-btn").show();
    $(this).hide();
  });

  // ------------------------------

  var targetOffset = $(".header-scroll").offset().top;
  var $w = $(window).scroll(function () {
    if ($w.scrollTop() > targetOffset) {
      $('.header').css({ "background-color": "white", "box-shadow": "0px 5px 10px -5px rgb(0 0 0 / 15%)", "transition": "1s" });
    } else {
      $('.header').css({ "background-color": "whitesmoke", "box-shadow": "0px 0px 0px 0px rgb(0 0 0 / 0%)" });
    }
  });

  // ------------------------------

  $(".search-btn").click(function () {
    $(this).toggleClass("open");
  });

  // ------------------------------

  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > 500) {
      $("#top-button").css("display", "block");
    } else {
      $("#top-button").css("display", "none");
    }
  });

  // ------------------------------

  const sectionOffsets =
    [
      Math.round($("#create-item-id").offset().top),
      Math.round($("#about-id").offset().top),
      Math.round($("#portfolio-block-id").offset().top),
      Math.round($("#latest-news-id").offset().top),
      Math.round($("#contact-us-id").offset().top)
    ];

  $(document).on("scroll", function () {
    scrollY_ = Math.round(scrollY + 1);
    // console.log(sectionOffsets[1] +"<="+  scrollY_ +"<"+ sectionOffsets[2])
    // console.log(scrollY_ >= sectionOffsets[1] && scrollY_ < sectionOffsets[2])

    $(".bar").hide(0);
    if (scrollY_ < sectionOffsets[0]) {
      $(".navbar-list").find("li").eq(0).find(".bar").show(0);
    } else if (scrollY_ >= sectionOffsets[0] && scrollY_ < sectionOffsets[1]) {
      $(".navbar-list").find("li").eq(1).find(".bar").show(0);
    } else if (scrollY_ >= sectionOffsets[1] && scrollY_ < sectionOffsets[2]) {
      $(".navbar-list").find("li").eq(2).find(".bar").show(0);
    } else if (scrollY_ >= sectionOffsets[2] && scrollY_ < sectionOffsets[3]) {
      $(".navbar-list").find("li").eq(3).find(".bar").show(0);
    } else if (scrollY_ >= sectionOffsets[3] && scrollY_ < sectionOffsets[4]) {
      $(".navbar-list").find("li").eq(4).find(".bar").show(0);
    } else if (scrollY_ >= sectionOffsets[4]) {
      $(".navbar-list").find("li").eq(5).find(".bar").show(0);
    }
  })

  // -----------------------------

  function animateValue(obj, start, end, duration, icon) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp + startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start) + icon;
      if (progress < 100) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  const obj1 = document.getElementById("obj1");
  const obj2 = document.getElementById("obj2");
  const obj3 = document.getElementById("obj3");
  const obj4 = document.getElementById("obj4");
  animateValue(obj1, 0, 100, 3000, "K");
  animateValue(obj2, 0, 1500, 3000, "+");
  animateValue(obj3, 0, 15, 3000, "+");
  animateValue(obj4, 0, 1850, 3000, "+");

  // ------------------------------

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".work-process-next",
      prevEl: ".work-process-previous",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //   const sliderParent = $("#custom-slider");
  //   let currentSlide   = 2; 

  //   $(".work-process-next").click(function()
  //   {
  //     if (currentSlide >= getFirstElementData().elementCount) {
  //       $(".work-process-next").prop("disabled", true);
  //       currentSlide = getFirstElementData().elementCount;
  //       console.log("ddd");
  //     } else {
  //       $(".work-process-next").prop("disabled", false);
  //       console.log("zzz");
  //     }

  //     console.log(currentSlide);
  //     currentSlide++;
  //   });

  //   $(".work-process-previous").click(function()
  //   {
  //     if (currentSlide < 2) {
  //       $(".work-process-previous").prop("disabled", true);
  //       currentSlide = 2;
  //     } else {
  //       $(".work-process-previous").prop("disabled", false);
  //     }

  //     currentSlide--;
  //   });

  //   function getFirstElementData()
  //   {
  //     let firstElement      = sliderParent.find(".custom-slider-item").eq(0);
  //     let firstElementWidth = firstElement.outerWidth();
  //     let elementCount      = sliderParent.find(".custom-slider-item").length;

  //     return {
  //       firstElement, firstElementWidth, elementCount
  //     };
  //   }




})
