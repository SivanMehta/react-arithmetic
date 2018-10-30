import React, { Fragment, Component } from 'react';

class Operand extends Component {
  render() {
    return <Fragment>{ this.value() }</Fragment>;
  }
}

export class Number extends Operand {
  constructor(props) {
    super(...arguments);
    this._value = props.value;
  }

  value() {
    return this._value;
  }
}
