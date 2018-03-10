
(function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	$(".navbar").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 200) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});

	
	});

});
  }(jQuery));

  function ScrollTo(name) {
    // console.log(name + ' ddij' + document.getElementById(name));
    ScrollToResolver(document.getElementById(name));
  }
function ScrollToResolver(elem) {
  // console.log(elem + ' fiuh');
  var jump = parseInt(elem.getBoundingClientRect().top * .25);
  document.body.scrollTop += jump;
  document.documentElement.scrollTop += jump;
  if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
    elem.lastjump = Math.abs(jump);
    setTimeout(function() { ScrollToResolver(elem);}, "90");
  } else {
    elem.lastjump = null;
  }
}
