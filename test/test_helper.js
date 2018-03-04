import React from 'react';
import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';
// (if use '$', its going to try and reach into the browser, which is not available; and try to get access to the DOM, which is going to fail...)

// 1) setup testing environment to run like a browser in command line
// Use jsdom to 'fake' a browser using jsdom library, but in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
// Hooked jQuery into the fake version of the DOM we created
const $ = jquery(global.window);

// 2) build 'renderComponent' helper that should render a given component
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(<Provider store={createStore(reducers, state)}>
    <ComponentClass {...props} />
                                                         </Provider>);
  return $(ReactDOM.findDOMNode(componentInstance));
}

// 3) Build helper for simulating events
$.fn.simulate = function (eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

// 4) Setup chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
