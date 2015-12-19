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
    npm install -g gulp browser-sync
    npm install .

### To run the development environment

Once you've run npm install just run this very complicated command in your terminal to start gulp

```npm start```

This will watch the sass directory and do the following on file change:
  • Compile scss files down to css/trim.css
  • Run autoprefixer on css/trim.css (this allows you to keep vendor prefixes out of your css)
  • Run csslint and spit the output to your terminal window where you are running gulp
  • Run an instance of browser-sync. With the chrome and safari extensions, you can see
    changes in the browser without hitting refresh


If you are including js - you'll still need to change the references in your html to
the minified files.

## Sass 
Trim comes with a number of simple css utilities that you might find helpful. More documentation later.

## TODO

- Show how to dictate order of js when compiling

