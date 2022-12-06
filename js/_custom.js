document.addEventListener("DOMContentLoaded", function() {

	$('.js-toggleheader').on('click', function() {
    $(this).find('.header__list').slideToggle('');
  });

	$('.blog__aside-title').on('click', function() {
    $(this).find('.blog__aside-svg').toggleClass('active');
    $('.blog__aside-toggle').slideToggle('');
  });
  

  $('.registration__input-item--category').on('click', function() {
    $(this).find('.arrow').toggleClass('active');
    $('.registration__input-game').slideToggle('');
  });

  $('.bids__category').on('click', function() {
    $(this).find('.arrow').toggleClass('active');
    $(this).find('.category__toggle').slideToggle('');
  });

  $('.bids__country').on('click', function() {
    $(this).find('.arrow').toggleClass('active');
    $('.country__toggle').slideToggle('');
  });

  $('.header__toggle').on('click', function () {
    $(this).find('.header__listReg').slideToggle()
  })

  $('.setting__select').on('click', function () {
    $(this).find('.setting__list').slideToggle();
    $(this).toggleClass('active');
  })

  $('.tab__button').on('click', function () {
    $('.tab__button').removeClass('active')
    $(this).addClass('active');
  })

  $('.js-referal .button').on('click', function() {
    event.preventDefault();
    $(this).prev('.link').slideDown();
  })
  
  $(document).mouseup(function (e) {
		var div = $('.header__toggle');
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			$('.header__listReg').slideUp();
		}
	});

  $(document).mouseup(function (e) {
		var div = $('.header__toggle');
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			$('.header__list').slideUp();
		}
	});

  $(document).mouseup(function (e) {
		var div = $('.setting__select');
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			$('.setting__list').slideUp();
			$('.setting__select').removeClass('active');
		}
	});

  (function () {
		var btn = $('.js-scroll');
		btn.click(function () {
			$("html, body").animate({
				scrollTop: $($(this).attr("href")).offset().top + "px"
			}, {
				duration: 1000
			});
			return false;
		});
	})();

  $('.service__carousel-top .item img').each(function() {
    var ico = $(this).attr('src');
    $('.service__carousel-bottom').append('<button class="img owl-dot" style="background: url('+ico+')"></button>');
  });

  $('.service__carousel-top').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    nav: true,
    dots: true,
    loop: true,
    dotsContainer: '.service__carousel-bottom',
    autoplayHoverPause: true
  });

  $('.service__carousel-bottom').appendTo('.service__carousel-top');

  $('.service__carousel-bottom img').on('click', function () {
    $('.service__carousel-top').trigger('to.owl.carousel', [$(this).index(), 300]);
  });

  $('.service__recommend').owlCarousel({
    items: 3,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    margin: 20,
    dots: false,
    loop: true,
    navContainer: '.service__recommend-nav',
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      767: {
        items: 3,
      },
    },
  });

  $('.service__recommend-nav button').html('<img src="img/svg/arrow-down-sign-to-navigate.svg" alt="">');

  $('.service__other').owlCarousel({
    items: 3,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    margin: 20,
    dots: false,
    loop: true,
    navContainer: '.service__other-nav',
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      767: {
        items: 3,
      },
    },
  });

  $('.service__other-nav button').html('<img src="img/svg/arrow-down-sign-to-navigate.svg" alt="">');


  $('.file_input').change(function (e) {
		$('.file_name').html(e.target.files[0].name);
	});

  $('.discuss__load-name img').each(function() {
    var src = $(this).attr('src'); // "static/images/banner/blue.jpg"
    var tarr = src.split('/');      // ["static","images","banner","blue.jpg"]
    var file = tarr[tarr.length-1]; // "blue.jpg"
    // var data = file.split('.')[0];  // "blue"
    $(this).next('.js-filename').html(file);
  });

  $('.discuss__load-delete').on('click', function () {
    $(this).parent('.discuss__load-file').remove();
  })

  function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
              $('#image').attr('src', e.target.result);
          };
          reader.readAsDataURL(input.files[0]);
      }
  }
  $("#imgInput").change(function(){
      readURL(this);
  });

});
