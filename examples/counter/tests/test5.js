import chai from "chai";
import { combineReducers, createStore } from 'redux';
import { Reducers } from 'redux-devtools-gentest-plugin';
//change next line to import your redux combined reducer and your composed store
import { reducer, store } from '../redux-setup';
//change next line to import your react root component
import rootComponent from '../index';

chai.config.truncateThreshold = 0;
const simulateRealTime = false;
let expect = chai.expect;
let playEvents = Reducers.playEvents.create(rootComponent);
let testReducer = combineReducers({ playEvents });
let testStore = createStore(testReducer);
const waitForStoreChanges = function(done){
	const timeout = setTimeout(function(){
		unsubscribe();
		done();
	},5000);
	const unsubscribe = store.subscribe(()=>{
		clearTimeout(timeout);
		unsubscribe();
		done();
	});
}
const dispatchTestAction = function(action){
	if( simulateRealTime && action.offsetMillis ){
		setTimeout( ()=>testStore.dispatch(action), action.offsetMillis);
	} else {
		testStore.dispatch(action);
	}
}

describe('run recorded UI tests', function(){

	this.timeout(60000);

	it('check computedState_topClick_1 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":0,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":2190};
		const nextState = {"counter":0,"testEvents":{"clicks":1,"changes":0,"others":0}};
		const state = store.getState();		
		store.dispatch(action);		
		const state2 = store.getState();
		dispatchTestAction(action);
		expect(state).to.deep.equal(curState);
		expect(state2).to.deep.equal(nextState);		
		done();
	});

	it('check computedState_INCREMENT_COUNTER_ASYNC_2 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":1,"changes":0,"others":0}};
		expect(store.getState()).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_3 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":1,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":498};
		const nextState = {"counter":0,"testEvents":{"clicks":2,"changes":0,"others":0}};
		const state = store.getState();		
		store.dispatch(action);		
		const state2 = store.getState();
		dispatchTestAction(action);
		expect(state).to.deep.equal(curState);
		expect(state2).to.deep.equal(nextState);		
		done();
	});

	it('check computedState_INCREMENT_COUNTER_ASYNC_4 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":2,"changes":0,"others":0}};
		expect(store.getState()).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_5 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":2,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":510};
		const nextState = {"counter":0,"testEvents":{"clicks":3,"changes":0,"others":0}};
		const state = store.getState();		
		store.dispatch(action);		
		const state2 = store.getState();
		dispatchTestAction(action);
		expect(state).to.deep.equal(curState);
		expect(state2).to.deep.equal(nextState);		
		done();
	});

	it('check computedState_INCREMENT_COUNTER_ASYNC_6 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":3,"changes":0,"others":0}};
		expect(store.getState()).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_7 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":3,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":489};
		const nextState = {"counter":0,"testEvents":{"clicks":4,"changes":0,"others":0}};
		const state = store.getState();		
		store.dispatch(action);		
		const state2 = store.getState();
		dispatchTestAction(action);
		expect(state).to.deep.equal(curState);
		expect(state2).to.deep.equal(nextState);		
		done();
	});

	it('check computedState_INCREMENT_COUNTER_ASYNC_8 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":4,"changes":0,"others":0}};
		expect(store.getState()).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_10 evaluation', (done) =>{
		const curState = {"counter":1,"testEvents":{"clicks":4,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":469};
		const nextState = {"counter":1,"testEvents":{"clicks":5,"changes":0,"others":0}};
		const state = store.getState();		
		store.dispatch(action);		
		const state2 = store.getState();
		dispatchTestAction(action);
		expect(state).to.deep.equal(curState);
		expect(state2).to.deep.equal(nextState);		
		done();
	});

	it('check computedState_INCREMENT_COUNTER_ASYNC_11 evaluation', (done) =>{
		const curState = {"counter":1,"testEvents":{"clicks":5,"changes":0,"others":0}};
		expect(store.getState()).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_13 evaluation', (done) =>{
		const curState = {"counter":2,"testEvents":{"clicks":5,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":480};
		const nextState = {"counter":2,"testEvents":{"clicks":6,"changes":0,"others":0}};
		const state = store.getState();		
		store.dispatch(action);		
		const state2 = store.getState();
		dispatchTestAction(action);
		expect(state).to.deep.equal(curState);
		expect(state2).to.deep.equal(nextState);		
		done();
	});

	it('check computedState_INCREMENT_COUNTER_ASYNC_14 evaluation', (done) =>{
		const curState = {"counter":2,"testEvents":{"clicks":6,"changes":0,"others":0}};
		expect(store.getState()).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_20 evaluation', (done) =>{
		const curState = {"counter":6,"testEvents":{"clicks":6,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.1.0.2.1","targetId":"","tagName":"BUTTON","className":"zeroclipboard-is-hover","previousValue":null,"value":"","offsetMillis":7251};
		const nextState = {"counter":6,"testEvents":{"clicks":7,"changes":0,"others":0}};
		const state = store.getState();		
		store.dispatch(action);		
		const state2 = store.getState();
		dispatchTestAction(action);
		expect(state).to.deep.equal(curState);
		expect(state2).to.deep.equal(nextState);		
		done();
	});

	it('check computedState_topKeyDown_21 evaluation', (done) =>{
		const curState = {"counter":6,"testEvents":{"clicks":7,"changes":0,"others":0}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.1.0.2.1","targetId":"","tagName":"BUTTON","className":"","eventData":{"key":"OSLeft","keyCode":91,"which":91},"offsetMillis":1086};
		const nextState = {"counter":6,"testEvents":{"clicks":7,"changes":0,"others":1}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_22 evaluation', (done) =>{
		const curState = {"counter":6,"testEvents":{"clicks":7,"changes":0,"others":1}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.1.0.2.1","targetId":"","tagName":"BUTTON","className":"","eventData":{"key":"OSLeft","keyCode":91,"which":91},"offsetMillis":25639};
		const nextState = {"counter":6,"testEvents":{"clicks":7,"changes":0,"others":2}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});


});
