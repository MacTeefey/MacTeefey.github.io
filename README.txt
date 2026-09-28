MacTeefey.github.io
===================

Personal portfolio site for Maclay Teefey: https://macteefey.github.io/

A static site (plain HTML, CSS and JavaScript, no build step) built on the
Phantom template by HTML5 UP.

Note: GitHub Pages publishes everything in this repository, including this file.
Don't commit anything that shouldn't be public.


Pages
-----

	index.html        Home: title lines, resume download, intro, contact footer
	Project.html      Projects, shown as tiles grouped by section
	research.html     Research: undergraduate and master's work
	perimeter.html    Overview of the Perimeter project (linked from Project.html)
	helpdesk-ai.html  Overview of the HelpDesk AI project (linked from Project.html)
	generic.html      Blank page template. Copy it to make a new page
	elements.html     Template reference for every styled element (not linked)


Layout
------

	assets/css/          Compiled theme CSS (main.css) plus pre.css for code blocks
	assets/sass/         Theme source. main.css is committed already compiled
	assets/js/           jQuery, theme scripts, and the Showdown markdown renderer
	assets/pdfs/         Resume, project reports, and research papers linked from pages
	assets/html/         Standalone HTML exports linked from project tiles
	assets/images/       Favicons and about/default images
	images/              Tile images (pic01-pic15), profile photos, logo
	server.rb            Local development server


Running locally
---------------

	ruby server.rb                 # http://127.0.0.1:8000  (PORT=xxxx to change)

or, without Ruby:

	python -m http.server 8000


Adding a tile
-------------

Tiles are <article class="styleN"> elements inside a <section class="tiles">.
The whole tile is an <a>, so every tile needs a link target. Only style1
through style6 have colours defined in main.css. Any higher number renders
with no colour overlay.


Deploying
---------

.github/workflows/static.yml uploads the repository as-is to GitHub Pages.
It can also be run manually from the Actions tab.


Credits
-------

	Design: Phantom by HTML5 UP (html5up.net | @ajlkn)
	        Free for personal and commercial use under the CCA 3.0 license
	        (html5up.net/license). See LICENSE.txt.

	Icons:  Font Awesome (fontawesome.io)

	Other:  jQuery (jquery.com)
	        Responsive Tools (github.com/ajlkn/responsive-tools)
	        Showdown (showdownjs.com)
	        google-code-prettify (github.com/google/code-prettify)
	        FormSubmit (formsubmit.co), contact form delivery
