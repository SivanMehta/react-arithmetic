import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>What is this?</h1>
        <Fragment>
          { this.props.children }
        </Fragment>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

App.defaultProps = {};
