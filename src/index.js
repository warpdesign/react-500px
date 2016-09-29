import React from 'react';
import {render} from 'react-dom';
import App from 'components/app';
import {polyfill} from 'es6-promise';

polyfill();

render(<App/>, document.getElementById('root'));