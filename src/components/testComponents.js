import React, { Component, PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import { Begin, End } from './jsHelpers';
import R from 'ramda';
import $ from 'jquery';

export class Expect extends PureComponent {
    render() {
        var stateNextId = <span>{JSON.stringify(this.props.nextState)}</span>;
        var stateId = <span>{JSON.stringify(this.props.curState)}</span>;
        var action = <span>{JSON.stringify(this.props.action)}</span>;
        return (
            <span>
                    const curState = {stateId};
                    <br/>
                    const action = {action};
                    <br/>
                    const nextState = {stateNextId};
                    <br/>
                    const unsubscribe = store.subscribe(()=><Begin/>
                    <br/>    
                        const computedNextState = store.getState();
                    <br/>    
                    	expect(computedNextState).to.deep.equal(nextState);
                    <br/>                    	
                    	unsubscribe();
                    <br/>                    	
                    	done();
                    <br/>                    	
                    <End/>);
                    <br/>                    
                    store.dispatch(action);
                <br/>
            </span>
        );
    }
}

export class It extends PureComponent {
    render() {
        var computedStateNextId = <span>check computedState_{this.props.action.type}_{this.props.index} evaluation</span>;
        return (
            <span>

                    it('{computedStateNextId}', (done) =><Begin/>
                <br/>
                <Expect {...this.props}/>
                <End/>);
            </span>
        );
    }
}

export class Describe extends PureComponent {
    componentDidUpdate() {
        if (!this.props.onNewText)
            return;
        var str = $(React.findDOMNode(this)).html();
        var regex = /<br .*?>/g;
        const res = $($.parseHTML(str.replace(regex, '\n'))).text();
        this.props.onNewText(res);
    }


    render() {

        const its = R.map((item)=> <span><It {...item}/><br/><br/></span>)(this.props.items);
        return (



            <span>
                   import chai from "chai";
                <br/>
                   import <Begin/> combineReducers, createStore <End/> from 'redux';
                <br/>
                   import * as reducers from '../reducers';
                <br/>
                <br/>
                   const reducer = combineReducers(reducers);
                <br/>
                   const store = createStore(reducer);
                <br/>
                   const expect = chai.expect;
                <br/>
                <br/>
                         describe('handleActions', () => <Begin/>
                     <br/>
                    <br/>
                {its}
                <br/>
                    <End/>);
                <br/>
            </span>
        );
    }
}
