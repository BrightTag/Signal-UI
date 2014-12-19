$(function() {
	var regex = new RegExp(window.location.pathname+'?$');


	console.log(regex);

	$('aside a').each(function() {
		var $this = $(this),
				href 	= $this.attr('href');

		console.log(href);

		if(regex.test(href)) {
			console.log('hi');
			$this.addClass('active');
		}
	});
});
