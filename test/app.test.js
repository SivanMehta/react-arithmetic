import React from 'react';
import { mount } from 'enzyme';
import assume from 'assume';
import App from '../src/app';

const props = {};

function renderApp(extras = {}) {
  return mount(<App { ...{ ...props, ...extras } }/>);
}

describe('App Layout', function () {
  let app;
  beforeEach(function () {
    app = renderApp();
  });

  afterEach(function () {
    app.unmount();
  });

  it('is a function', function () {
    assume(App).is.a('function');
  });
});
