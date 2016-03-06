import chai from "chai";
import { combineReducers, createStore } from 'redux';
import { Reducers, TestUtils } from 'redux-devtools-gentest-plugin';
//change next line to import your redux combined reducer and your composed store
import { reducer, store } from '../redux-setup';
//change next line to import your react root component
import rootComponent from '../index';

chai.config.truncateThreshold = 0;
const simulateRealTime = false;
const useAsync = false;

let expect = chai.expect;
let playEvents = Reducers.playEvents.create(rootComponent);
let testReducer = combineReducers({ playEvents });
let testStore = createStore(testReducer);

const waitForStoreChanges = function(done, waitTime){
	const timeout = setTimeout(function(){
		unsubscribe();
		done();
	}, waitTime ? waitTime : 5000);
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
const conditionalWait = function(done, waitTime){
	if(useAsync){
		done();
	} else {
		waitForStoreChanges(done, waitTime);
	}
}

describe('run recorded UI tests', function(){

	this.timeout(60000);

	it('check computedState_topClick_1 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":0,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":1953};
		const nextState = {"counter":0,"testEvents":{"clicks":1,"changes":0,"others":0}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		waitForStoreChanges(done);

	});

	/*it('check computedState_INCREMENT_COUNTER_3 evaluation', (done) =>{
		waitForStoreChanges(done);

	});*/

	it('check computedState_topClick_4 evaluation', (done) =>{
		const curState = {"counter":1,"testEvents":{"clicks":1,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.7","targetId":"decrement","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":2513};
		const nextState = {"counter":1,"testEvents":{"clicks":2,"changes":0,"others":0}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_6 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":2,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":879};
		const nextState = {"counter":0,"testEvents":{"clicks":3,"changes":0,"others":0}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		waitForStoreChanges(done);

	});

	/*it('check computedState_INCREMENT_COUNTER_8 evaluation', (done) =>{
		waitForStoreChanges(done);

	});*/

	it('check computedState_topClick_9 evaluation', (done) =>{
		const curState = {"counter":1,"testEvents":{"clicks":3,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.7","targetId":"decrement","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":2503};
		const nextState = {"counter":1,"testEvents":{"clicks":4,"changes":0,"others":0}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_11 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":4,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":1107};
		const nextState = {"counter":0,"testEvents":{"clicks":5,"changes":0,"others":0}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		waitForStoreChanges(done);

	});

	/*it('check computedState_INCREMENT_COUNTER_13 evaluation', (done) =>{
		waitForStoreChanges(done);

	});*/

	it('check computedState_topClick_14 evaluation', (done) =>{
		const curState = {"counter":1,"testEvents":{"clicks":5,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":2301};
		const nextState = {"counter":1,"testEvents":{"clicks":6,"changes":0,"others":0}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		waitForStoreChanges(done);

	});

	/*it('check computedState_INCREMENT_COUNTER_16 evaluation', (done) =>{
		waitForStoreChanges(done);

	});*/

	it('check computedState_topClick_17 evaluation', (done) =>{
		const curState = {"counter":2,"testEvents":{"clicks":6,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":2182};
		const nextState = {"counter":2,"testEvents":{"clicks":7,"changes":0,"others":0}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		waitForStoreChanges(done);

	});

	/*it('check computedState_INCREMENT_COUNTER_19 evaluation', (done) =>{
		waitForStoreChanges(done);

	});*/

	it('check computedState_topClick_20 evaluation', (done) =>{
		const curState = {"counter":3,"testEvents":{"clicks":7,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":2044};
		const nextState = {"counter":3,"testEvents":{"clicks":8,"changes":0,"others":0}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		waitForStoreChanges(done);

	});

	/*it('check computedState_INCREMENT_COUNTER_22 evaluation', (done) =>{
		waitForStoreChanges(done);

	});*/

	it('check computedState_topClick_23 evaluation', (done) =>{
		const curState = {"counter":4,"testEvents":{"clicks":8,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":2001};
		const nextState = {"counter":4,"testEvents":{"clicks":9,"changes":0,"others":0}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		waitForStoreChanges(done);

	});

	/*it('check computedState_INCREMENT_COUNTER_25 evaluation', (done) =>{
		waitForStoreChanges(done);

	});*/

	it('check computedState_topClick_26 evaluation', (done) =>{
		const curState = {"counter":5,"testEvents":{"clicks":9,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":2042};
		const nextState = {"counter":5,"testEvents":{"clicks":10,"changes":0,"others":0}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		waitForStoreChanges(done);

	});

	/*it('check computedState_INCREMENT_COUNTER_28 evaluation', (done) =>{
		waitForStoreChanges(done);

	});*/


});
