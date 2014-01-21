# TRIM

Work in progress. Under active development. Pull requests welcome.

## Wut

Running a simple dev environment and readying assets for production should
be super easy and trivial. This is an attempt at a basic template for
faster performing websites. Performance matters, but we shouldn't have
to constantly pick low-hanging fruit. It should be push-button. This is that button.

## Currently

# Getting started

    git clone git@github:mrmrs/trim.git; cd trim; npm install

### To run the development environment
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

## TODO

- Concat and minify all css/js files
- JShint integration

