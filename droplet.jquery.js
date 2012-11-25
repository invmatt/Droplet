/*
*	Droplet.js
*	https://github.com/invmatt/Droplet
*	Version: 1.0.0
*	Usage: $.droplet('#selector');
*	Extend: $.droplet('#selector', {options});
*/

(function($){
    $.droplet = function(selector, settings){
        var config = {
            'buttonID': 'droplet-menu',		// The default button ID
			'mode': 'droplet-responsive',	// Class added once the smaller breakpoint has been reached
			'smallScreen': '768',
			'largeScreen': '769',
			'Modernizr': false,				// Adds support for Modernizr Media Queries (recommended)
			'subNav': false,				// If you have sub-navigation set this to true
			'subClass': ''					// Class of the containing sub navigation UL
        };
		
        if ( settings ){$.extend(config, settings);}
		
		// Set some basic vars
		var obj = $(selector);
		var child = obj.children('ul');
		var childOfChild = obj.children('li > ul');
		var menuSize = "";
		var i = 0;
		
		if (config.Modernizr == true) {
			$("body").addClass("droplet-enabled-mdnz");
		}
					
		else {
			$("body").addClass("droplet-enabled");
		}
 
		$(function() { windowSize(); });
		$(window).resize(windowSize);
		
		function windowSize() {

			if ( (config.Modernizr == false && $(window).width() <= config.smallScreen) || (config.Modernizr == true && Modernizr.mq('only screen and (max-width : '+ config.smallScreen +'px)')) ) {
				// (window).width() doesn't play nicely with scrollbars, modernizr can be used to set the correct breakpoints regardless of scrollbars or not.
				
				if (menuSize != "small") {
					menuSize = "small";
					$(obj).addClass(config.mode);
					
					$(obj).prepend('<div id="'+ config.buttonID +'">Main Menu</div>');
					$(child).css('display', 'none');
					
					if (config.subNav == true) {
						// Sub navigation stuff
					}
					
					$("#"+ config.buttonID +"").click(function() {
						
						if ($(child).css('display') == 'none') {
							$(child).slideDown("fast");
						}
						
						else if ($(child).css('display') == 'block') {
							$(child).slideUp("fast");
						}
						
					});

				} 
				
			}
			
			
			else if ( (config.Modernizr == false && $(window).width() >= config.largeScreen) || (config.Modernizr == true && Modernizr.mq('only screen and (min-width : '+ config.largeScreen +'px)')) ) {
				if (menuSize != "large") {
					menuSize = "large";
					
					$(child).css('display', 'block');
					$(obj).removeClass(config.mode);
					$("#"+ config.buttonID +"").remove();
					
				}
				
			} 
			
		}
 
        return this;
    };
	
})(jQuery);