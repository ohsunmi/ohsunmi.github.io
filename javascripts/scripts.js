$(document).ready(function() {

  var $header = $('header'),
      $intro = $('.intro'),
      $introPhoto = $('#intro_photo'),
      $arrow = $('#arrow'),
      $photo_a = $('#photo_a'),
      $photo_b = $('#photo_b'),
      $photo_c = $('#photo_c'),
      $project_a = $('#project_a'),
      $project_b = $('#project_b'),
      $project_c = $('#project_c'),
      $project_1 = $('#project_1'),
      $project_2 = $('#project_2'),
      $project_3 = $('#project_3');

  function infoSlideOut(project) {
    project.animate({left: -15});
    project.find('.info').animate({left: 15});
  }

  function infoSlideIn(project) {
    project.animate({left: 150});
    project.find('.info').animate({left: -290});
  }

  function infoSlide() {
    $photo_a.on('mouseover', function(){
      infoSlideOut($project_a);
    });
    $project_a.on('mouseleave', function(){
      infoSlideIn($(this));
    });

    $photo_b.on('mouseover', function(){
      infoSlideOut($project_b);
    });
    $project_b.on('mouseleave', function(){
      infoSlideIn($(this));
    });

    $photo_c.on('mouseover', function(){
      infoSlideOut($project_c);
    });
    $project_c.on('mouseleave', function(){
      infoSlideIn($(this));
    });
  }

  // check if other info are displaying
  function mobileInfo() {
    var info = $(this).find('div');
    if (info.css('display') == 'none') {
      info.fadeIn(400);
    } else {
      info.fadeOut(400);
    }
  }

  function introFade() {
    $intro.delay(1200).animate(
      { opacity: 1, top: '10px' }, {
        duration: 1000,
        easing: 'swing'
    });

    $introPhoto.delay(200).animate(
      { opacity: 1 }, {
        duration: 700
    });

    $arrow.delay(1800).animate(
      { opacity: 1, marginTop:'80px' }, {
        duration: 1000,
        easing: 'swing'
    });

    $arrow.animate(
      { marginTop:'76px' }, {
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

  // Initial hidden elements
  $header.hide();
  $intro.animate({ opacity: 0 }, 0);
  $introPhoto.animate({ opacity: 0 }, 0);
  $arrow.animate({ opacity: 0}, 0);

  // Mobile
  $project_1.on('click', mobileInfo);
  $project_2.on('click', mobileInfo);
  $project_3.on('click', mobileInfo);

  infoSlide();
	introFade();
  
});
