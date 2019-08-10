// Implement generic scrollTo logic
// when an <a class="srollto" href="#some named link"...> is clicked
//
// find the ID call "some named link"
// <a id="some named link" .....
// scroll to that offset
//
jQuery(document).ready(function($) {
    /* ======= Scrollspy ======= */
    var tr = $('body').scrollspy({ target: '#header', offset: 400});
    
    /* ======= Fixed header when scrolled ======= */
    
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 50) {
             $('#header').addClass('navbar-fixed-top');
         }
         else {
             $('#header').removeClass('navbar-fixed-top');
         }
    });
   
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        //store hash achor that was clicked
        var target = this.hash;

        //Get the ID to target
        var target2 = target.substring(1);
        
        var scrollTarget = document.getElementById(target2);
        var goTop = scrollTarget.offsetTop - 110;
        var scrollTarget = $(target);
                
        e.preventDefault();
        
         $("html, body").animate({
            scrollTop: goTop
          }, 500);


        //Collapse mobile menu after clicking
    		if ($('.navbar-collapse').hasClass('show')){
	    		$('.navbar-collapse').removeClass('show');
		    }
	});

});
