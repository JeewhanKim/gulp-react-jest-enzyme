import React from 'react'
import ReactDOM from 'react-dom'
import IndexApp from './components/IndexApp.jsx'
import $ from './jquery-2.2.0.min.js';
global.$ = global.jQuery = $;

ReactDOM.render(<IndexApp />, document.getElementById('root'))