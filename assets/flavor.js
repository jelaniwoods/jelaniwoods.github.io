
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
    setTimeout(function() { ScrollToResolver(elem);}, "50");
  } else {
    elem.lastjump = null;
  }
}
function handleResize() {
  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var lotus = document.getElementById('lotus_link');
  var hy = document.getElementById('hy_link');
  var ama = document.getElementById('ama_link');
  var p = document.getElementById('p_link');
  if(w <= 979) {
    lotus.href = 'https://www.philippanormanmd.com';
    hy.href = 'https://www.hannahyehudah.com';
    ama.href = 'https://alainamichaelart.tumblr.com/';
    p.href = '/productivity';
    var cards = document.getElementsByClassName('card');
    console.log(cards + ' ddd ' + cards[0]);
    for (var i = 0; i < 4; i++) {
      console.log(' ff ' + cards[i]);
      // if (card.hasOwnProperty(key)) {
      cards[i].removeAttribute('data-toggle');
        
      // }
    }
  }
  else {
    lotus.removeAttribute("href");
    hy.removeAttribute("href");
    ama.removeAttribute("href");
    p.removeAttribute("href");
  }

}