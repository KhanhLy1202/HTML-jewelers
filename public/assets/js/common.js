$(document).ready(function () {
  $(function () {
    objectFitImages();
  });

  /******************************
    Responsive Video
  *****************************/
  var min_w = 300;
  var vid_w_orig;
  var vid_h_orig;
  $(function () {
    vid_w_orig = parseInt($('video').attr('width'));
    vid_h_orig = parseInt($('video').attr('height'));
    $(window).resize(function () {
      fitVideo();
    });
    $(window).trigger('resize');
  });

  function fitVideo() {
    $('#video-viewport').width($('.fullsize-video-bg').width());
    $('#video-viewport').height($('.fullsize-video-bg').height());

    var scale_h = $('.fullsize-video-bg').width() / vid_w_orig;
    var scale_v = $('.fullsize-video-bg').height() / vid_h_orig;
    var scale = scale_h > scale_v ? scale_h : scale_v;

    if (scale * vid_w_orig < min_w) {
      scale = min_w / vid_w_orig;
    }

    $('video').width(scale * vid_w_orig);
    $('video').height(scale * vid_h_orig);

    $('#video-viewport').scrollLeft(
      ($('video').width() - $('.fullsize-video-bg').width()) / 2
    );
    $('#video-viewport').scrollTop(
      ($('video').height() - $('.fullsize-video-bg').height()) / 2
    );
  }

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).scroll(function (e) {
    var positionV = $("#videoHand").offset();
    if ($(this).scrollTop() >= (positionV.top - 300)) {
      $('#videoHand').get(0).play();
      $(window).off('scroll');
    }
  });

  $('#videoBg').click(function () {
    $(this).css("display", "none");
  })

  $('.videoBg img').click(function () {
    $(this).css('display', 'none')
  })


  /******************************
  Responsive footer
  *****************************/
  var width = $(window).width();
  if (width <= 767) {
    $('.sitemapTtl').click(function () {
      $(this).next().slideToggle('slow');
      $(this).toggleClass('active');
    });
  }

  heightGift = $('.giftIdeasBox .content__img img').height();
  $('.giftIdeasBox .content__img').css('height', heightGift);
  heightShare = $('.shareShineBox .content__img img').height();
  $('.shareShineBox .content__img').css('height', heightShare);
  // heightHand = $('.handCont .hand.pc').height();
  // $('.handCont').css('height', heightHand);

  /******************************
   Header
  *****************************/
  $(function () {
    $('.globalnavToggle').on('click', function () {
      $('.headerCont').toggleClass('active');
      $(this).toggleClass('globalnavToggle--opened');
      $('.headerCont__menu').slideToggle();
      $('body').toggleClass('-hidden');
    });
    heightWel = $('.welcomeCont').height();
    heightHeader = $('.headerCont__top').height();
    heightTop = heightWel + heightHeader;
    $('.headerCont.active .headerCont__menu').css('top', heightTop);
  });
  $(function () {
    if (width <= 767) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
          $('.headerCont').addClass('shrink');
        } else {
          $('.headerCont').removeClass('shrink');
        }
      });
    }
  });
  // Reload
  $(function () {
    var timer = false;
    var prewidth = $(window).width();
    $(window).resize(function () {
      if (timer !== false) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        var nowWidth = $(window).width();
        if (prewidth !== nowWidth) {
          location.reload();
        }
        prewidth = nowWidth;
      }, 200);
    });
  });
  /******************************
   SLider
  *****************************/
  //  Testimonial
  $('.sliderTestimonial').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          prevArrow: $('.prevTes'),
          nextArrow: $('.nextTes'),
        }
      }
    ]
  });

  // Need Ideas
  $('.needIdealSlider').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.prevNeed'),
    nextArrow: $('.nextNeed'),
  });
  //diamond

  var activeIndex = 0;
  $('.sliderDiamond').slick({
    initialSlide: activeIndex,
    dots: false,
    infinite: true,
    speed: 600,
    centerMode: true,
    centerPadding: '0px',
    lazyLoad: 'progressive',
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    prevArrow: $('.prevDia'),
    nextArrow: $('.nextDia'),
    responsive: [
      {
        breakpoint: 768,
        centerPadding: '20px',
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  });
  setActiveIndex(activeIndex);
  function setActiveIndex(currentSlide) {
    $('.txtSlider.active').removeClass('active');
    document.getElementsByClassName('txtSlider')[currentSlide].classList.add('active');

  }
  $('.sliderDiamond').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    setActiveIndex(currentSlide);
    activeIndex = currentSlide;
  });
});
