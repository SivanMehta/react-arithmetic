import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { One, Two, Three } from './operands/numbers';
import { Add } from './operators/arithmetic';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>What is this?</h1>
        <Add>
          <One />
          <Two />
        </Add>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

App.defaultProps = {};
