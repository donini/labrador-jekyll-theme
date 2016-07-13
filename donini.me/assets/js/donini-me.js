$(document).ready(function () { 
	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		// ABOUT
		if (scroll >= 400) $('.text-about p').addClass('show');
		if (scroll <= 200) $('.text-about p').removeClass('show');
		// QUOTE
		if (scroll >= 1200) { $('.text-quote p').addClass('show'); $('.section-bullets').addClass('section-bullets-white'); }
		if (scroll <= 1200) { $('.text-quote p').removeClass('show');$('.section-bullets').removeClass('section-bullets-white'); }
		// LANGUAGE
		if (scroll >= 1540 || scroll >= 1868) { $('.profile-photo').addClass('profile-photo-white'); }
		if (scroll <= 1540 || scroll <= 1868) { $('.profile-photo').removeClass('profile-photo-white'); }
		console.log(scroll);
	});

	$('body').sectionScroll();

	$('.profile-photo').addClass('profile-photo-show');

	/* MENU RESPONSIVE */
	$('.btn-responsive-menu').click(function(e) {
		e.preventDefault();
		var menu = $('.responsive-menu');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
	$('.responsive-menu ul li a').click(function(e) {
		// e.preventDefault();
		$('.responsive-menu').removeClass('open');
	})
});