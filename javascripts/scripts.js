$(document).ready(function() {

  var $header = $('header'),
      $intro = $('.intro'),
      $introPhoto = $('#intro-photo'),
      $arrow = $('#arrow');

  function infoSlide() {
    $('.work-item').on('mouseover', function() {
      if (!$(this).hasClass('openItem')) {
        $(this).addClass('openItem');
      } else {
        $(this).removeClass('openItem');
      }
    }).on('mouseout', function() {
      $(this).removeClass('openItem');
    });
  }

  function introFade() {
    $intro.delay(900).animate(
      { opacity: 1, top: '10px' }, {
        duration: 1000,
        easing: 'swing'
    });

    $introPhoto.delay(200).animate(
      { opacity: 1 }, {
        duration: 700
    });

    $arrow.delay(1800).animate(
      { opacity: 1, marginTop:'210px' }, {
        duration: 1000,
        easing: 'swing'
    });

    $arrow.animate(
      { marginTop:'200px' }, {
        duration: 550,
        easing: 'swing'
    });
  }

  // Nav
  $(window).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 350) {
      $header.fadeIn();
    } else {
      $header.fadeOut();
    }
  });

  // Easing scroll
  $(function() {
    $('nav li a, #arrow a').click(function(){
			$('html, body').animate({
				scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
			return false;
		});
	});

  // infoSlide();
	introFade();
  
});
