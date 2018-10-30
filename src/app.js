import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        what
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

App.defaultProps = {};
