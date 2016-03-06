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
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":2975};
		const nextState = {"counter":0,"testEvents":{"clicks":1,"changes":0,"others":0}};
		const realState1 = store.getState();
		store.dispatch(action);
		const realState2 = store.getState();
		dispatchTestAction(action);
		expect(realState1).to.deep.equal(curState);		
		expect(realState2).to.deep.equal(nextState);
		done();
		//waitForStoreChanges(done);		

	});

	it('check computedState_topClick_3 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":1,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":571};
		const nextState = {"counter":0,"testEvents":{"clicks":2,"changes":0,"others":0}};
		const realState1 = store.getState();
		store.dispatch(action);
		const realState2 = store.getState();
		dispatchTestAction(action);
		expect(realState1).to.deep.equal(curState);		
		expect(realState2).to.deep.equal(nextState);
		done();
		//waitForStoreChanges(done);		

	});

	it('check computedState_topClick_5 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":2,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":747};
		const nextState = {"counter":0,"testEvents":{"clicks":3,"changes":0,"others":0}};
		const realState1 = store.getState();
		store.dispatch(action);
		const realState2 = store.getState();
		dispatchTestAction(action);
		expect(realState1).to.deep.equal(curState);		
		expect(realState2).to.deep.equal(nextState);
		done();
		//waitForStoreChanges(done);		

	});

	it('check computedState_INCREMENT_COUNTER_7 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":3,"changes":0,"others":0}};
		//expect(store.getState()).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_8 evaluation', (done) =>{
		const curState = {"counter":1,"testEvents":{"clicks":3,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":640};
		const nextState = {"counter":1,"testEvents":{"clicks":4,"changes":0,"others":0}};
		const realState1 = store.getState();
		store.dispatch(action);
		const realState2 = store.getState();
		dispatchTestAction(action);
		expect(realState1).to.deep.equal(curState);		
		expect(realState2).to.deep.equal(nextState);
		done();
		//waitForStoreChanges(done);		

	});

	it('check computedState_INCREMENT_COUNTER_10 evaluation', (done) =>{
		const curState = {"counter":1,"testEvents":{"clicks":4,"changes":0,"others":0}};
		//expect(store.getState()).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_11 evaluation', (done) =>{
		const curState = {"counter":2,"testEvents":{"clicks":4,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":721};
		const nextState = {"counter":2,"testEvents":{"clicks":5,"changes":0,"others":0}};
		const realState1 = store.getState();
		store.dispatch(action);
		const realState2 = store.getState();
		dispatchTestAction(action);
		expect(realState1).to.deep.equal(curState);		
		expect(realState2).to.deep.equal(nextState);
		done();
		//waitForStoreChanges(done);		

	});

	it('check computedState_INCREMENT_COUNTER_13 evaluation', (done) =>{
		const curState = {"counter":2,"testEvents":{"clicks":5,"changes":0,"others":0}};
		//expect(store.getState()).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_14 evaluation', (done) =>{
		const curState = {"counter":3,"testEvents":{"clicks":5,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":680};
		const nextState = {"counter":3,"testEvents":{"clicks":6,"changes":0,"others":0}};
		const realState1 = store.getState();
		store.dispatch(action);
		const realState2 = store.getState();
		dispatchTestAction(action);
		expect(realState1).to.deep.equal(curState);		
		expect(realState2).to.deep.equal(nextState);
		done();
		//waitForStoreChanges(done);		

	});

	it('check computedState_INCREMENT_COUNTER_16 evaluation', (done) =>{
		const curState = {"counter":3,"testEvents":{"clicks":6,"changes":0,"others":0}};
		//expect(store.getState()).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_INCREMENT_COUNTER_17 evaluation', (done) =>{
		const curState = {"counter":4,"testEvents":{"clicks":6,"changes":0,"others":0}};
		//expect(store.getState()).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_INCREMENT_COUNTER_18 evaluation', (done) =>{
		const curState = {"counter":5,"testEvents":{"clicks":6,"changes":0,"others":0}};
		//expect(store.getState()).to.deep.equal(curState);
		waitForStoreChanges(done);

	});


});
