var $header = $('header'),
    $intro = $('.intro'),
    $arrow = $('#arrow');

$(document).ready(function() {

  function introFade() {
    $intro.delay(400).animate(
      { opacity: 1, top: '10px' }, {
        duration: 1000,
        easing: 'swing'
    });

    $arrow.delay(1800).animate(
      { opacity: 1, marginTop:'130px' }, {
        duration: 1000,
        easing: 'swing'
    });

    $arrow.animate(
      { marginTop:'126px' }, {
        duration: 550,
        easing: 'swing'
    });
	}

  function parallax() {
    var scrolled = $(window).scrollTop();
    // Home
    $intro.css('top', (scrolled / 5) + 'px');
    // Photo Site
    $('#image_a').css('top', (scrolled / 5) + 'px');
    $('#image_b').css('top', -(scrolled * 0.1) + 'px');
    // Tomatotxt
    $('#image_c').css('top', (scrolled / 8) + 'px');
    $('#image_d').css('top', -(scrolled * 0.05) + 'px');
    // Retwitr
    $('#image_e').css('top', (scrolled / 40) + 'px');
    $('#image_f').css('top', -(scrolled  * 0.04) + 'px');
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
		if ($(this).scrollTop() > 300) {
			$header.fadeIn();
		} else {
			$header.fadeOut();
		}
		// Parallax
    parallax();
  });

  // Initial hidden elements
  $header.hide();
  $intro.animate({ opacity: 0 }, 0);
  $arrow.animate({ opacity: 0}, 0);

  // Intro fade in
	introFade();
  
});
