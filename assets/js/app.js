var setSkrollr = function($el, data) {
	for (var i = 0, l = data.length; i < l; i++) {
		var d = data[i],
		px = d[0];
		css = d[1];
		$el.attr('data-' + px, css);
	}
}


$(document).ready(function(){

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		var is_mobile = true;
		$("body").addClass("mobile");
	}
	else {
		var is_desktop = true;
	}
	if (is_desktop) {

	// ANIMATIONS
	// HEADER
	
	setSkrollr($('header'), [[0, 'height:600px'], [500, 'height: 100px']]);	

	setSkrollr($('#lines-bg'), [[0, 'opacity:1'], [400, 'opacity:0.0']]);
	setSkrollr($('#dark-bg'),  [[0, 'opacity:0.0'], [400, 'opacity:0.7']]);

	setSkrollr($('#date-place, #name'),  [[0, 'opacity:1.0'], [200, 'opacity:0']]);
	
	setSkrollr($('#logo'), [[0, 'top: 127px; width: 276px; height: 476px'], [500, 'top: 10px; width: 60px; height: 80px']]);
	setSkrollr($('#bold-logo'),  [[0, 'opacity: 0.0'], [500, 'opacity: 1']]);
	
	setSkrollr($('#the-bar'), [[0, 'top: 600px' ], [700, 'top: -100px']]);


		skrollr.init({
			smoothScrolling: false,
			forceHeight: false
		});
		
	}

});