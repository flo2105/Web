var sliderElement = $('.slider');

sliderElement.on('afterChange', function(){
	var currentSlide = sliderElement.slick('slickCurrentSlide');
	$('.slick-dots>li>button').removeClass('active');
	$('.slick-dots>li>button:eq('+currentSlide+')').addClass('active')
});

$('.slider').slick({
		adaptiveHeight: true,
		arrows: false,
		dots: true,
		autoplay: true,
		responsive: true,
		autoplaySpeed: 8000
});
$('.slick-active>button').addClass('active');


$(window).on("scroll", function() {
	if($(window).scrollTop() > 50) {
		$('.nav').addClass('sticky');
	} else {
		$('.nav').removeClass('sticky');
	}
});

var navDown = false;

$('.downbutton').on("click", function() {
	if(!navDown) {
		$('.nav-links').addClass('down');
		$(this).addClass('down');
		navDown = true;
	} else {
		$('.nav-links').removeClass('down');
		$(this).removeClass('down');
		navDown = false;
	}
})

$('a[href*="#"]').on('click', function (el) {
	var el = $(this.getAttribute('href'));
  var elOffset = el.offset().top;
  var elHeight = el.height();
  var windowHeight = $(window).height();
  var offset;

  if (elHeight < windowHeight) {
    offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
  }
  else {
    offset = elOffset;
  }
  var speed = 1000;
  $('html, body').animate({scrollTop:offset}, speed);
});
