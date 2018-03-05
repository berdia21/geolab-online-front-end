$(document).ready(function($) {
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
});