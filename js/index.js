$(window).load(function() {
	$("body").scrollspy({target: "#navbar", offset:75});

	$('ul#insidepagenav > li > a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: (target.offset().top - 65)
				}, 500);
				return false;
			}
		}
	});

	var height = $(window).height();

	$(window).scroll({}, 
		function () {
			var currentTop = $(window).scrollTop();
			if (currentTop < height/2) {
				$("#navbar").removeClass("navbar-fixed-top");
				$(".content").css("padding-top","0px");
			}
			else if (currentTop > height/2) {
				$("#navbar").addClass("navbar-fixed-top");
				$(".content").css("padding-top","65px");
			}
		}
	);
});