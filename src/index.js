import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SliderI from './SliderI';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<SliderI />, document.getElementById('slihome'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
