import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { One, Two, Three } from './operands/numbers';
import { Add, Multiply } from './operators/arithmetic';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <code>Add(One, Two) = 3</code>
        </div>
        <Add>
          <One />
          <Two />
        </Add>

        <div>
          <code>Multiply(Two, Two, Two, Two) = 16</code>
        </div>
        <Multiply>
          <Two />
          <Two />
          <Two />
          <Two />
        </Multiply>

        <div>
          <code>Multiply(Two, Two, Add(Two, Two, One)) = 20</code>
        </div>
        <Multiply>
          <Two />
          <Two />
          <Add>
            <One />
            <Two />
            <Two />
          </Add>
        </Multiply>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

App.defaultProps = {};
