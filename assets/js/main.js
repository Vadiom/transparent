(function ($) {
	"use strict";
    
/*------------------------------------
    01. Sticky Menu
-------------------------------------- */  
    var windows = $(window);
    var stick = $(".fixed-top");
	windows.on('scroll',function() {    
		var scroll = windows.scrollTop();
		if (scroll < 200) {
			stick.removeClass("sticky");
		}else{
			stick.addClass("sticky");
		}
	}); 


/*------------------------------------------
    07. ScrollUp
------------------------------------------- */	
var btn = $('#button-up');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
	
	
	/* animate smooth scrolling sections */
$("nav ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 700, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});
   
$("a.btn-scroll[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 700, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});   


    
})(jQuery);  