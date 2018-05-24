/*
import React from 'react';
import {render} from 'react-dom';
*/
import {h, render, Component} from 'preact';
import App from './components/app';
import {polyfill} from 'es6-promise';

polyfill();

function renderApp() {
    render(<App/>, document.getElementById('root'));
}

if (module.hot) {
    module.hot.accept();
    module.hot.accept('./components/app', renderApp);
}

renderApp();