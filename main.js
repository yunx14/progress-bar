$(document).ready(function() { 
	$("#range").change(function() {
		var value = $(this).val();
		$('.meter span').animate({
			width: value+'%'
		}, 1000);

		if(value == 100) {
			$('.meter > span').css({'border-top-right-radius': '20px', 'border-bottom-right-radius': '20px'});
		} else {
			$('.meter > span').css({'border-top-right-radius': '8px', 'border-bottom-right-radius': '8px'});
		}
	});
});