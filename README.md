react-500px
===========

little 500px popular feed viewer using React + ES6 + webpack http://experiments.warpdesign.fr/react-500px

This small React app loads up 'popular' feed from 500px and displays the photos.

Demo
====

The working application can be seen live [here](http://experiments.warpdesign.fr/react-500px)

Why ?
=====

This small application was developped to get familiar with ReactJS development with ES6 and webpack.

It uses the following components:

* es6-promise (polyfill)
* fetch (polyfill)

This is a direct rewrite of an old application I wrote using AngularJS & CSS3 a few years back: [CSS 3 experiments](http://experiments.warpdesign.fr/angularjs-500px)

Requirements
============

In order to run the application, you will need the following tools (any developer should have these installed but if you're starting with web development you may not have them)

 * Node (see [Node.js](http://nodejs.org/download/))
 * webpack

How to install ?
================

Type `npm install` and `npm start` to run the app in development mode, and `npm run build` to generate a production build.

See: [500px applications](http://500px.com/settings/applications?from=developers)

To Do
=====

 * CSS transitions are not working correctly, some work is needed
 * Add play/pause options
 * Add Help/About page
