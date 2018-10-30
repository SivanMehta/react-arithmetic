import React, { Fragment, Component } from 'react';

export default class Operand extends Component {
  render() {
    return <Fragment>{ this.value() }</Fragment>;
  }
}
