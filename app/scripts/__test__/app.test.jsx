import React from 'react';
import ReactDOM from 'react-dom';
import IndexApp from '../components/IndexApp.jsx';
import $ from '../jquery-2.2.0.min.js';
global.$ = global.jQuery = $;

describe('IndexPage Testing', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<IndexApp/>, div);
  });
});
