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


  var trigger = 4319;

  // Nav
  $(window).scroll(function() {
    var y = $(this).scrollTop();
    // Header fade in/out
		if (y > 300) {
			$header.fadeIn();
		} else {
			$header.fadeOut();
		}

    // Photo margin increase
    //  if (y >= trigger) {
    //   $("#photo").addClass('moretop');
    // } else {
    //   $("#photo").removeClass('moretop');
    // }

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
