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
                    store.dispatch(action);
                    <br/>
                    const unsubscribe = store.subscribe(()=><Begin/>
                    <br/>                   	
                    	unsubscribe();
                    <br/>                    	
                    	done();
                    <br/>                    	
                    <End/>);
                    <br/>
                    if( simulateRealTime && action.offsetMillis )<Begin/>
                    <br/>    
                        setTimeout( ()=>testStore.dispatch(action), action.offsetMillis);
                    <br/>    
                    <End/> else <Begin/>
                    <br/>
                        testStore.dispatch(action);
                    <br/>   
                    <End/>
                    <br/>
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

        const its = R.map((item)=> <span><It {...item}/><br/><br/></span>,R.filter((item)=>item && item.action && item.action.record)(this.props.items));
        return (

            <span>
                   import chai from "chai";
                <br/>
                   import <Begin/> combineReducers, createStore <End/> from 'redux';
                <br/>
                   import <Begin/> Reducers <End/> from 'redux-devtools-gentest-plugin';
                <br/>
                    //change next line to import your redux combined reducer and your composed store
                <br/>
                    import <Begin/> reducer, store <End/> from '../redux-setup';
                <br/>
                    //change next line to import your react root component
                <br/>
                    import rootComponent from '../index';                    
                <br/>    
                <br/>
                   chai.config.truncateThreshold = 0;
                <br/>                   
                   const simulateRealTime = false;
                <br/>
                   let expect = chai.expect;
                <br/>
                   let playEvents = Reducers.playEvents.create(rootComponent);
                <br/>
                   let testReducer = combineReducers(<Begin/> playEvents <End/>);
                <br/>
                   let testStore = createStore(testReducer);
                <br/>                
                <br/>
                         describe('run recorded UI tests', function()<Begin/>
                     <br/>
                     <br/>
                     this.timeout(60000);
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
