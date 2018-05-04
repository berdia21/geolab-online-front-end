$(document).ready(function($) {
	/*-----------Login----------*/

	$('.login_btn').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('body').find(".registration_bg").fadeIn('slow');
	});
	$('.registration_wrapper').on('click', '.close_btn', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('body').find(".registration_bg").fadeOut('fast');
	});

	/*-----------Search----------*/

	$('.search_btn').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('body').find(".search_bg").fadeIn('slow');
		$('body').find("#myInput").focus();
	});
	$('.search_wrapper').on('click', '.close_btn', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('body').find(".search_bg").fadeOut('fast');
	});


	$(function() {
		$('#login-form-link').click(function(e) {
			$("#login-form").delay(100).fadeIn(100);
			$("#register-form").fadeOut(100);
			$('#register-form-link').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
		});
		$('#register-form-link').click(function(e) {
			$("#register-form").delay(100).fadeIn(100);
			$("#login-form").fadeOut(100);
			$('#login-form-link').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
		});

	});

	$('.lectures_filter button').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('.lectures_filter button span').toggleClass('rotate');

	});


	$('.desc_holder').on('click', '.close_btn', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(this).parents(".note").fadeOut('fast');
	});

	var closer = true;

	$('.desc_holder').on('click', '.note_icon', function(event) {
		event.preventDefault();
		/* Act on the event */
		if(closer) {
			$(this).siblings('.note').fadeIn('fast');
			closer = false;
		} else {
			$('.note').fadeOut('fast');
			$(this).siblings('.note').fadeIn('fast');
		}

	});

	$('.user_lessons_page .main_content .row .col-md-4:nth-child(3) .note').css(
		{"left" : "auto", "right" : "0", "margin-left" : "0px", "margin-right" : "30px"}
		);

	if ($('.user_lessons_page .main_content .row').hasClass('last_row')) {
		$('.user_lessons_page .main_content .last_row .note').css({"top" : "auto", "bottom" : "-30px"});
	}

	/* lecture_inner */
	$('.lecture_menu li:first-child ').addClass('first_item');

	$('.lecture_menu li.first_item').find('span').addClass('actived');

	var actived_check = true;

	$('.lecture_menu li label').click(function(){
		if (actived_check) {
			$('.lecture_menu li span').removeClass('actived');
			actived_check = false;
			
		} else {
			$('.lecture_menu li span').removeClass('actived');
			$(this).find('span').addClass('actived');
		}
	});

	var note_check = true;

	$('.lecture_desc .note_icon a').click(function(event) {
		if(note_check) {
			$(this).css('background-image', 'url(images/X_icon.png)');
			note_check = false;
		} else {
			$(this).css('background-image', 'url(images/note_icon.png)');
			note_check = true;
		}

		$(this).parents().siblings('.note').toggle('fast');

	});
	
	$('.lecture_content_1').addClass('on');

	$('.item_text').click(function(event) {
		/* Act on the event */
	
		$('.lecture_item').removeClass('on');
		$('.lecture_content_1').addClass('on');

	});
		
	$('.item_video').click(function(event) {
		/* Act on the event */
		
		$('.lecture_item').removeClass('on');
		$('.lecture_content_2').addClass('on');

	});

	


});


