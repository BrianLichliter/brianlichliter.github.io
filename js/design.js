$('ul#insidepagenav > li > a[href*=#]:not([href=#])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
    || location.hostname == this.hostname) {

  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
    $('html,body').animate({
      scrollTop: (target.offset().top - 80)
    }, 500);
    return false;
  }
}
});

$( document ).ready(function() {
	$("body").scrollspy({target: "#navbar", offset:80});
});