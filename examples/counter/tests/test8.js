import chai from "chai";
import { combineReducers, createStore } from 'redux';
import { Reducers } from 'redux-devtools-gentest-plugin';
//change next line to import your redux combined reducer and your composed store
import { reducer, store } from '../redux-setup';
//change next line to import your react root component
import rootComponent from '../index';

chai.config.truncateThreshold = 0;
const simulateRealTime = false;
const useAsyncWait = true;

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
const conditionalWait = function(done, waitTime){
	if(useAsyncWait){
		done();
	} else {
		waitForStoreChanges(done, waitTime);
	}
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
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":1854};
		const nextState = {"counter":0,"testEvents":{"clicks":1,"changes":0,"others":0}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topClick_3 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":1,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":753};
		const nextState = {"counter":0,"testEvents":{"clicks":2,"changes":0,"others":0}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topClick_5 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":2,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":560};
		const nextState = {"counter":0,"testEvents":{"clicks":3,"changes":0,"others":0}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_INCREMENT_COUNTER_7 evaluation', (done) =>{
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_8 evaluation', (done) =>{
		const curState = {"counter":1,"testEvents":{"clicks":3,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":685};
		const nextState = {"counter":1,"testEvents":{"clicks":4,"changes":0,"others":0}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_INCREMENT_COUNTER_10 evaluation', (done) =>{
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_11 evaluation', (done) =>{
		const curState = {"counter":2,"testEvents":{"clicks":4,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":628};
		const nextState = {"counter":2,"testEvents":{"clicks":5,"changes":0,"others":0}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_INCREMENT_COUNTER_13 evaluation', (done) =>{
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_14 evaluation', (done) =>{
		const curState = {"counter":3,"testEvents":{"clicks":5,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":646};
		const nextState = {"counter":3,"testEvents":{"clicks":6,"changes":0,"others":0}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_INCREMENT_COUNTER_16 evaluation', (done) =>{
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_17 evaluation', (done) =>{
		const curState = {"counter":4,"testEvents":{"clicks":6,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":609};
		const nextState = {"counter":4,"testEvents":{"clicks":7,"changes":0,"others":0}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_INCREMENT_COUNTER_19 evaluation', (done) =>{
		waitForStoreChanges(done);

	});

	it('check computedState_INCREMENT_COUNTER_20 evaluation', (done) =>{
		waitForStoreChanges(done);

	});

	it('check computedState_INCREMENT_COUNTER_21 evaluation', (done) =>{
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_23 evaluation', (done) =>{
		const curState = {"counter":7,"testEvents":{"clicks":7,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","previousValue":null,"value":"","offsetMillis":6367};
		const nextState = {"counter":7,"testEvents":{"clicks":8,"changes":0,"others":0}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_24 evaluation', (done) =>{
		const curState = {"counter":7,"testEvents":{"clicks":8,"changes":0,"others":0}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":359};
		const nextState = {"counter":7,"testEvents":{"clicks":8,"changes":0,"others":1}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topInput_25 evaluation', (done) =>{
		const curState = {"counter":7,"testEvents":{"clicks":8,"changes":0,"others":1}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","previousValue":null,"value":"a","offsetMillis":47};
		const nextState = {"counter":7,"testEvents":{"clicks":8,"changes":1,"others":1}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_26 evaluation', (done) =>{
		const curState = {"counter":7,"testEvents":{"clicks":8,"changes":1,"others":1}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":72};
		const nextState = {"counter":7,"testEvents":{"clicks":8,"changes":1,"others":2}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topChange_27 evaluation', (done) =>{
		const curState = {"counter":7,"testEvents":{"clicks":8,"changes":1,"others":2}};
		const action = {"record":true,"type":"topChange","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","previousValue":null,"value":"a","offsetMillis":801};
		const nextState = {"counter":7,"testEvents":{"clicks":8,"changes":2,"others":2}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});


});
