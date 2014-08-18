Droplet
=======

Droplet is a customisable, responsive navigation plugin aimed at simplifying and standardising navigation across multiple devices.

<h3>Download</h3>

Droplet should be downloaded from the <a href="https://github.com/invmatt/Droplet/releases">releases</a> section. All other versions commited should be treated as incomplete / not suitable for production.

<h3>Usage</h3>
<pre>$.droplet('#selector');

$.droplet('.navclass', {
	'subNav': true,
	'subClass': '.subclass',
	'smallScreen': '767',
	'largeScreen': '768'
});</pre>

<h3>Extend</h3>

<pre>
'buttonID': 'droplet-menu',      // The default button ID
'mode': 'droplet-responsive',    // Class added once the smaller breakpoint has been reached
'smallScreen': '768',            // Width the responsive nav should begin
'largeScreen': '769',            // Width the responsive nav should end
'Modernizr': true,               // Adds support for Modernizr Media Queries (recommended)
'subNav': false,                 // If you have sub-navigation set this to true
'subClass': '',                  // Class of the containing sub navigation UL
'panel': false,                  // Create a panel style menu
'panelPosition': '250'           // Width the panel should be (if panel is true)
</pre>

<h3>Demo</h3>

<p>Coming soon</p>
