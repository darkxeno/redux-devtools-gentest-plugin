import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/CounterActions';
import { TestActions } from 'redux-devtools-gentest-plugin';

@connect(state => ({
  counter: state.counter
}))
export default class CounterApp extends Component {
  render() {
  	const { counter, dispatch } = this.props;
  	if(!window.TestActions){
  		window.TestActions = {...bindActionCreators(TestActions, dispatch)};
  	}
    
    return (
      <Counter counter={counter}
               {...bindActionCreators(CounterActions, dispatch)} />
    );
  }
}
