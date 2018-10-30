import React, { Component, Fragment } from 'react';

export default class Operation extends Component {
  /**
   * Method that is overwritten by an actual operation
   * Some starting value for the combination of children
   * @return {React.Element} starting value;
   */
  start() {
    return <Fragment />;
  }

  /**
   * Method that is overwritten by an actual operation
   * it takes the children and a given operation
   * to all of them in order
   * @return {React.Element} some combination of the children
   */
  apply(acc, cur) {
    return acc;
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
