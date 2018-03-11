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

	
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#filter_DIV *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });


});


