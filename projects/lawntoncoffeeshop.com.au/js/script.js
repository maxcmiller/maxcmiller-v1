$(document).ready(function() {
	$('.aboutpage').fadeToggle('fast'); // Fades out all pages except homepage
	$('.menupage').fadeToggle('fast'); // Fades out all pages except homepage
	$('.eventpage').fadeToggle('fast'); // Fades out all pages except homepage

	$('.home').click(function() {
		$('.eventpage').css('display', 'none');
		$('.menupage').css('display', 'none');
		$('.aboutpage').css('display', 'none');
		$('.homepage').css('display', 'block');
	});
	$('.about').click(function() {
		$('.eventpage').css('display', 'none');
		$('.menupage').css('display', 'none');
		$('.homepage').css('display', 'none');
		$('.aboutpage').css('display', 'block');
	});
	$('.menu').click(function() {
		$('.eventpage').css('display', 'none');
		$('.aboutpage').css('display', 'none');
		$('.homepage').css('display', 'none');
		$('.menupage').css('display', 'block');
	});
	$('.events').click(function() {
		$('.menupage').css('display', 'none');
		$('.aboutpage').css('display', 'none');
		$('.homepage').css('display', 'none');
		$('.eventpage').css('display', 'block');
	});
});	