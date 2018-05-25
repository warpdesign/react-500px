react-500px
===========

little 500px popular feed viewer using preact + ES-2015 + webpack 4

The app loads up 'popular' feed from 500px and displays the photos.

Demo
====

The working application can be seen live [here](http://experiments.warpdesign.fr/react-500px)

Why ?
=====

This small application was developped to get familiar with ReactJS development with ES6 and webpack.

It uses the following components:

* es6-promise (polyfill)
* fetch (polyfill)

Version 2.0 it was updated to work with preact instead of React and webpack version was updated to version 4.

How to install ?
================

Type `npm install` and `npm start` to run the app in development mode, and `npm run build` to generate a production build.

See: [500px applications](http://500px.com/settings/applications?from=developers)

To Do
=====

 * CSS transitions are not working correctly, some work is needed
 * Add play/pause options
 * Add Help/About page
