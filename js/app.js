$(document).ready(function() {

	/* This is basic - uses default settings */

	$("images/3.jpg").fancybox();

	/* Using custom settings */

	//$("a#inline").fancybox({
	//	'hideOnContentClick': true
	});

	/* Apply fancybox to multiple items */

	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600,
		'speedOut'		:	200,
		'overlayShow'	:	false
	});

});
