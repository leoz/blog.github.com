/*
*
* Copyright 2013 Leonid Zolotarev
* Released under the BSD license.
* http://leoz.net/license
*
*/

$(document).ready(function() {
	$(".fancybox").fancybox();

	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
});
