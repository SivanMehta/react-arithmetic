import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Operation extends Component {
  /**
   * Method that is overwritten by an actual operation
   * Some starting value for the combination of children
   * @returns {React.Element} starting value;
   */
  start() {
    return <Fragment />;
  }

  /**
   * Method that is overwritten by an actual operation
   * it takes the children and a given operation
   * to all of them in order
   * @param  {Any} acc current state of reduction
   * @param  {Any} cur current child
   * @returns {Any} how to combine acc and cur
   */
  apply(acc, cur) {
    return acc + cur;
  }

  render() {
    const result = this.props.children.reduce(this.apply.bind(this), this.start());
    return (
      <Fragment>
        { result }
      </Fragment>
    );
  }
}

Operation.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};
