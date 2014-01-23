# TRIM

Work in progress. Under active development. Pull requests welcome.

## Wut

Running a simple dev environment and readying assets for production should
be super easy and trivial. This is an attempt at a basic template for
faster performing websites. Performance matters, but we shouldn't have
to constantly pick low-hanging fruit. It should be as easy as hitting a button.
Hopefully this can become that button.

## Getting started

Set up the project by cloning the repo, navigating into it, then installing the necessary dependencies by running:

    git clone git@github:mrmrs/trim.git
    cd trim
    npm install

### To run the development environment

Once you've run npm install just run this very complicated command in your terminal to start gulp

    gulp

This will watch the sass directory and do the following on file change:
  • Compile scss files down to css/app.css
  • Run autoprefixer on css/app.css (this allows you to keep vendor prefixes out of your css)
  • Run csslint and spit the output to your terminal window where you are running gulp
  • Run an instance of livereload. With the chrome and safari extensions, you can see
    changes in the browser without hitting refresh


### To minify assets for production

    gulp production

This will
  • Compile scss files down to css/app.css
  • Run autoprefixer on css/app.css (this allows you to keep vendor prefixes out of your css)
  • Minify all js and css files in the ./css and ./js directories
  • Compress / minify all images in the ./img directory
  • Compress / minify all svg elements in the ./img/svg/ directory

If you are including js - you'll still need to change the references in your html to
the minified files.

## TODO

- Concat and minify all css/js files
- Show how to dictate order of js/css when cat'n all the files
- Add debugging utilities in sass


