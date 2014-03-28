$(window).load(function() {
	$("body").scrollspy({target: "#navbar", offset:55});

  $('ul#insidepagenav > li > a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        console.log(target.selector);
        console.log($(window).scrollTop());
        console.log($(window).height());
        if (target.selector == "#accordionArrow" & ($(window).scrollTop() >= $(window).height()/2)) {
          var off = -20;
        } else {
          var off = 50;
        }
        console.log(($(window).scrollTop() > $(window).height()));
        console.log(target.selector == "#accordionArrow")
        $('html,body').animate({
          scrollTop: (target.offset().top - off)
        }, 500);
        return false;
      }
    }
  });

  var height = $(window).height();

  $(window).scroll({}, 
    function () {
      var currentTop = $(window).scrollTop();
      if (currentTop < height * .5) {
        $("#navbar").removeClass("navbar-fixed-top");
        $("#accordionArrow").css("padding-top","0px");
      }
      else if (currentTop > height * .5) {
        $("#navbar").addClass("navbar-fixed-top");
        $("#accordionArrow").css("padding-top","72px");
      }
    }
  );
});