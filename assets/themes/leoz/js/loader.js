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

	set_emoticons();
});

/*
* Functions
*/

function set_emoticons() {
	var definition = {
		smile: {
			title: "Smile",
			codes: [":)",":=)",":-)"]
		},
		wink: {
			title: "Wink",
			codes: [";)",";-)"]
		}
	};

	$.emoticons.define(definition);

	$('#page').html($.emoticons.replace($('#page').html()));
}

