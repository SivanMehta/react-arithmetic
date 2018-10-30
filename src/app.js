import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Number } from './operands';
import { Add, Multiply } from './operators/arithmetic';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <code>Add(One, Two) = 3</code>
        </div>
        <Add>
          <Number value={ 1 } />
          <Number value={ 2 } />
        </Add>

        <div>
          <code>Multiply(Two, Two, Two, Two) = 16</code>
        </div>
        <Multiply>
          <Number value={ 2 } />
          <Number value={ 2 } />
          <Number value={ 2 } />
          <Number value={ 2 } />
        </Multiply>

        <div>
          <code>Multiply(Two, Two, Add(Two, Two, One)) = 20</code>
        </div>
        <Multiply>
          <Number value={ 2 } />
          <Number value={ 2 } />
          <Add>
            <Number value={ 1 } />
            <Number value={ 2 } />
            <Number value={ 2 } />
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
