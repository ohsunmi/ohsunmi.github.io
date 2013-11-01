$(document).ready(function() {

  function introFade() {
		$('.intro').delay(500).fadeIn(800);
	}

  function parallax() {
    var scrolled = $(window).scrollTop();
    // Home
    $('#bg').css('top', -(scrolled * 2) + 'px');
    $('.intro').css('top', (scrolled / 1.6) + 'px');
    // Photo Site
    $('#image_a').css('top', (scrolled / 5) + 'px');
    $('#image_b').css('top', -(scrolled * 0.1) + 'px');
    // Tomatotxt
    $('#image_c').css('top', (scrolled / 8) + 'px');
    $('#image_d').css('top', -(scrolled * 0.05) + 'px');
    // Retwitr
    $('#image_e').css('top', (scrolled / 15) + 'px');
    $('#image_f').css('top', -(scrolled * 0.01) + 'px');
  }

  $(function() {
    $('nav li a').click(function(){
			$('html, body').animate({
				scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
			return false;
		});
	});

  // Nav
  $(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('nav').fadeIn();
		} else {
			$('nav').fadeOut();
		}
		// Parallax
    parallax();
  });

  // Intro fade in
	introFade();

});
