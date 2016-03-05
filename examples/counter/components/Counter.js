import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  };

  render() {
    const { increment, incrementIfOdd, decrement, counter, incrementAsync } = this.props;
    return (
      <p>
        <input type="text" className="text" id="textField1" />
        Clicked: {counter} times
        {' '}
        <button id="increment" className="button" onClick={increment}>+</button>
        {' '}
        <button id="decrement" className="button" onClick={decrement}>-</button>
        {' '}
        <button id="incrementIfOdd" className="button" onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button id="incrementAsync" className="button" onClick={incrementAsync}>Increment Async</button>
        <input type="text" className="text" id="textField" />
      </p>
    );
  }
}
