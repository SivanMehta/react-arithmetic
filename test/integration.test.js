import React, { Component } from 'react';
import { mount } from 'enzyme';
import assume from 'assume';
import { Number } from '../src/operands';
import { Add, Multiply } from '../src/operators/arithmetic';

class Addition extends Component {
  render() {
    return (
      <Add>
        <Number value={ 1 } />
        <Number value={ 2 } />
      </Add>
    );
  }
}

class Multiplication extends Component {
  render() {
    return (
      <Multiply>
        <Number value={ 2 } />
        <Number value={ 2 } />
        <Number value={ 2 } />
        <Number value={ 2 } />
      </Multiply>
    );
  }
}

class Simple extends Component {
  render() {
    return (
      <Multiply>
        <Number value={ 2 } />
        <Number value={ 2 } />
        <Add>
          <Number value={ 1 } />
          <Number value={ 2 } />
          <Number value={ 2 } />
        </Add>
      </Multiply>
    );
  }
}

class ALittleMore extends Component {
  render() {
    return (
      <Multiply>
        <Multiply>
          <Number value={ 2 } />
          <Number value={ 2 } />
        </Multiply>
        <Add>
          <Number value={ 1 } />
          <Number value={ 2 } />
          <Number value={ 3 } />
        </Add>
      </Multiply>
    );
  }
}

describe('It all works together', function () {
  it('they\'re all functions', function () {
    [Number, Add, Multiply].forEach(f => assume(f).is.a('function'));
  });

  it('knows how to "add"', function () {
    const sum = mount(<Addition />);
    assume(sum.text()).equals('3');
  });

  it('knows how to "multiply"', function () {
    const product = mount(<Multiplication />);
    assume(product.text()).equals('16');
  });

  it('knows to do both at once', function () {
    const abomination = mount(<Simple />);
    assume(abomination.text()).equals('20');

    const warCrime = mount(<ALittleMore />);
    assume(warCrime.text()).equals('24')
  })
});
