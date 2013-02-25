/*
* Droplet.js
* https://github.com/invmatt/Droplet
* Version: 1.2.1
* Usage: $.droplet('#selector');
* Extend: $.droplet('#selector', {options});
*/

(function($) {
	$.droplet = function(selector, settings) {
		var config = {
			'buttonID': 'droplet-menu', 	// The default button ID
			'mode': 'droplet-responsive', // Class added once the smaller breakpoint has been reached
			'smallScreen': '768',
			'largeScreen': '769',
			'Modernizr': false, 			// Adds support for Modernizr Media Queries (recommended)
			'subNav': false, 				// If you have sub-navigation set this to true
			'subClass': '', 				// Class of the containing sub navigation UL
			'panel': false, 				// Create a panel style menu
			'panelPosition': '250'
		};

		if (settings) { $.extend(config, settings); }

		// Set some basic vars
		var obj = $(selector);
		var child = obj.children('ul');
		var childOfChild = obj.children('li > ul');
		var menuSize = "";
		var i = 0;
		var navLocation = (obj).parent();

		if (config.Modernizr == true) {
			$("body").addClass("droplet-enabled-mdnz");
		}

		else {
			$("body").addClass("droplet-enabled");
		}

		$(function() { windowSize(); });
		$(window).resize(windowSize);

		function windowSize() {

			if ((config.Modernizr == false && $(window).width() <= config.smallScreen) || (config.Modernizr == true && Modernizr.mq('only screen and (max-width : ' + config.smallScreen + 'px)'))) {
				// (window).width() doesn't play nicely with scrollbars, modernizr can be used to set the correct breakpoints regardless of scrollbars or not.

				if (menuSize != "small") {
					menuSize = "small";
					$(obj).addClass(config.mode);

					// Panel Style
					if (!config.panel) {
						$(obj).prepend('<div id="' + config.buttonID + '">Main Menu</div>');

						$("#" + config.buttonID + "").click(function() {

							if ($(child).css('display') == 'none') {
								$(child).slideDown("fast");
								$("#" + config.buttonID + "").addClass("active");
							}

							else if ($(child).css('display') == 'block') {
								$(child).slideUp("fast");
								$("#" + config.buttonID + "").removeClass("active");
							}

						});

					}

					if (config.panel) {
						$("html").prepend($(obj));
						$("body").prepend('<div id="' + config.buttonID + '">Main Menu</div>');
						$(obj).addClass("panel-closed");

						$(obj).css({
							width: '' + config.panelPosition + 'px',
							left: '-' + config.panelPosition + 'px',
							position: "absolute"
						});

						$("#" + config.buttonID + "").click(function() {

						if ($(obj).hasClass('panel-open')) {
							$(obj).removeClass('panel-open');
							$(obj).addClass('panel-closed');

							$(obj).animate({
								left: '-' + config.panelPosition + 'px'
							}, 500);

							$("body").animate({
								left: '0'
							}, 500);

							$(child).css("display", "none");
						} else {
								$(obj).removeClass('panel-closed');
								$(obj).addClass('panel-open');

								$(obj).animate({
									left: '0px'
								}, 500);

								$("body").animate({
									left: '' + config.panelPosition + 'px'
								}, 500);

								$(child).css("display", "block");
							}

						});

					}

					$(child).css('display', 'none');

					if (config.subNav == true) {
						// Sub navigation stuff
					}

				}

			}


			else if ((config.Modernizr == false && $(window).width() >= config.largeScreen) || (config.Modernizr == true && Modernizr.mq('only screen and (min-width : ' + config.largeScreen + 'px)'))) {
				if (menuSize != "large") {
					menuSize = "large";

					$(child).css('display', 'block');
					$(obj).removeClass(config.mode);
					$("#" + config.buttonID + "").remove();
					
					if (config.panel) {
						$(navLocation).append($(obj));
						$(obj).removeAttr('style')
					}

				}

			}

		}

		return this;
	};

})(jQuery);
