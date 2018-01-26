import React from 'react';
import ReactDOM from 'react-dom';

import TopNav from '../components/TopNav.jsx'

import { configure } from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import $ from '../jquery-2.2.0.min.js';
global.$ = global.jQuery = $;


describe('TopNav', () => {
  it('should render correctly', () => {
    const output = shallow(
      <TopNav selectedSection="0" clickChapter="0"/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

