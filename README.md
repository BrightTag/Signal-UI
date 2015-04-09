LoMein - Signal Style Guide
===========================

[See Demo Here](http://signal.github.io/lo-mein/)

LoMein is a base style sheet that styles html elements to conform with Signal's brand. LoMein is designed to be included as a CSS file or as a SASS library that exposes stylistic elements to be used in other stylesheets.

Usage
-----
LoMein can be installed by simply including the [latest CSS file](https://github.com/BrightTag/LoMein/releases/latest/) or by including the entire repository and using the SCSS files found in `/styles`.  Currently `/styles/config/**` includes all of the variablized SCSS but we plan to add more in the near future.

Development
-----------
Make sure you have [npm](https://www.npmjs.com/), [gulp](http://gulpjs.com/), [ruby](https://www.ruby-lang.org/) and [bundler](http://bundler.io/) installed on your machine.

**To install:** `npm install`

**To build resources:** `gulp`

**To watch:** `gulp watch`

**To serve documentation:** `gulp serve`

**To deploy the documentation:** `gulp deploy` Note that this will only work for Signal employees.

