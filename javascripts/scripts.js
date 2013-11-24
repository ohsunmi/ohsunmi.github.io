var $header, $intro, $arrow, $descriptions, $info_a, $info_b, $info_c, $info_d;


$(document).ready(function() {

  var $header = $('header'),
      $intro = $('.intro'),
      $arrow = $('#arrow'),
      $descriptions = $('.info'),
      $info_a = $("#info_a"),
      $info_b = $("#info_b"),
      $info_c = $("#info_c"),
      $info_d = $("#info_d");

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
    $('#image_f').css('top', -(scrolled  * 0.06) + 'px');
    // TaskAlot
    $('#image_g').css('top', (scrolled / 40) + 'px');
    $('#image_h').css('top', -(scrolled  * 0.17) + 'px');
  }

  // Easing scroll
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
    var y = $(this).scrollTop();

    // Header fade in/out
		if (y > 300) {
			$header.fadeIn();
		} else {
			$header.fadeOut();
		}

    // Info A fade in/out
    if (y >= 980 && y <= 1370) {
      $info_a.fadeIn();
    } else {
      $info_a.fadeOut();
    }

    // Info B fade in/out
    if (y >= 1700 && y <= 1950) {
      $info_b.fadeIn();
    } else {
      $info_b.fadeOut();
    }

     // Info C fade in/out
    if (y >= 2150 && y <= 2350) {
      $info_c.fadeIn();
    } else {
      $info_c.fadeOut();
    }

    // Info D fade in/out
    if (y >= 2680 && y <= 3000) {
      $info_d.fadeIn();
    } else {
      $info_d.fadeOut();
    }

		// Parallax
    parallax();
  });

  // Initial hidden elements
  $header.hide();
  $descriptions.hide();
  $intro.animate({ opacity: 0 }, 0);
  $arrow.animate({ opacity: 0}, 0);

  // Intro fade in
	introFade();
  
});
