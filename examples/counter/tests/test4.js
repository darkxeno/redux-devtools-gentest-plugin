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
	},100);
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
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":1707};
		const nextState = {"counter":0,"testEvents":{"clicks":1,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		//waitForStoreChanges(done);
		dispatchTestAction(action);
		done();
	});

	it('check computedState_topClick_3 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":1,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":454};
		const nextState = {"counter":0,"testEvents":{"clicks":2,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		//waitForStoreChanges(done);
		dispatchTestAction(action);
		done();
	});

	it('check computedState_topClick_5 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":2,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":474};
		const nextState = {"counter":0,"testEvents":{"clicks":3,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		//waitForStoreChanges(done);
		dispatchTestAction(action);
		done();
	});

	it('check computedState_topClick_7 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":3,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":345};
		const nextState = {"counter":0,"testEvents":{"clicks":4,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		//waitForStoreChanges(done);
		dispatchTestAction(action);
		done();
	});

	it('check computedState_topClick_9 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":4,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":223};
		const nextState = {"counter":0,"testEvents":{"clicks":5,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		//waitForStoreChanges(done);
		dispatchTestAction(action);
		done();
	});

	it('check computedState_INCREMENT_COUNTER_11 evaluation', (done) =>{
		const curState = {"counter":0,"testEvents":{"clicks":5,"changes":0,"others":0}};
		const state = store.getState();
		waitForStoreChanges(done);
		expect(state).to.deep.equal(curState);

	});

	it('check computedState_topClick_12 evaluation', (done) =>{
		const curState = {"counter":1,"testEvents":{"clicks":5,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":216};
		const nextState = {"counter":1,"testEvents":{"clicks":6,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		//waitForStoreChanges(done);
		dispatchTestAction(action);
		done();
	});

	it('check computedState_topClick_14 evaluation', (done) =>{
		const curState = {"counter":1,"testEvents":{"clicks":6,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":176};
		const nextState = {"counter":1,"testEvents":{"clicks":7,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		//waitForStoreChanges(done);
		dispatchTestAction(action);
		done();
	});

	it('check computedState_INCREMENT_COUNTER_16 evaluation', (done) =>{
		const curState = {"counter":1,"testEvents":{"clicks":7,"changes":0,"others":0}};
		const state = store.getState();
		waitForStoreChanges(done);
		expect(state).to.deep.equal(curState);});


	it('check computedState_topClick_17 evaluation', (done) =>{
		const curState = {"counter":2,"testEvents":{"clicks":7,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":208};
		const nextState = {"counter":2,"testEvents":{"clicks":8,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_19 evaluation', (done) =>{
		const curState = {"counter":2,"testEvents":{"clicks":8,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":227};
		const nextState = {"counter":2,"testEvents":{"clicks":9,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_INCREMENT_COUNTER_21 evaluation', (done) =>{
		const curState = {"counter":2,"testEvents":{"clicks":9,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_22 evaluation', (done) =>{
		const curState = {"counter":3,"testEvents":{"clicks":9,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":176};
		const nextState = {"counter":3,"testEvents":{"clicks":10,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_24 evaluation', (done) =>{
		const curState = {"counter":3,"testEvents":{"clicks":10,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":151};
		const nextState = {"counter":3,"testEvents":{"clicks":11,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_INCREMENT_COUNTER_26 evaluation', (done) =>{
		const curState = {"counter":3,"testEvents":{"clicks":11,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_27 evaluation', (done) =>{
		const curState = {"counter":4,"testEvents":{"clicks":11,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":194};
		const nextState = {"counter":4,"testEvents":{"clicks":12,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_29 evaluation', (done) =>{
		const curState = {"counter":4,"testEvents":{"clicks":12,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":147};
		const nextState = {"counter":4,"testEvents":{"clicks":13,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_INCREMENT_COUNTER_31 evaluation', (done) =>{
		const curState = {"counter":4,"testEvents":{"clicks":13,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_32 evaluation', (done) =>{
		const curState = {"counter":5,"testEvents":{"clicks":13,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":159};
		const nextState = {"counter":5,"testEvents":{"clicks":14,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_INCREMENT_COUNTER_34 evaluation', (done) =>{
		const curState = {"counter":5,"testEvents":{"clicks":14,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_35 evaluation', (done) =>{
		const curState = {"counter":6,"testEvents":{"clicks":14,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":166};
		const nextState = {"counter":6,"testEvents":{"clicks":15,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_INCREMENT_COUNTER_37 evaluation', (done) =>{
		const curState = {"counter":6,"testEvents":{"clicks":15,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_38 evaluation', (done) =>{
		const curState = {"counter":7,"testEvents":{"clicks":15,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":222};
		const nextState = {"counter":7,"testEvents":{"clicks":16,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_INCREMENT_COUNTER_40 evaluation', (done) =>{
		const curState = {"counter":7,"testEvents":{"clicks":16,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_INCREMENT_COUNTER_41 evaluation', (done) =>{
		const curState = {"counter":8,"testEvents":{"clicks":16,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_INCREMENT_COUNTER_42 evaluation', (done) =>{
		const curState = {"counter":9,"testEvents":{"clicks":16,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_INCREMENT_COUNTER_43 evaluation', (done) =>{
		const curState = {"counter":10,"testEvents":{"clicks":16,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_INCREMENT_COUNTER_44 evaluation', (done) =>{
		const curState = {"counter":11,"testEvents":{"clicks":16,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_INCREMENT_COUNTER_45 evaluation', (done) =>{
		const curState = {"counter":12,"testEvents":{"clicks":16,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_INCREMENT_COUNTER_46 evaluation', (done) =>{
		const curState = {"counter":13,"testEvents":{"clicks":16,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_47 evaluation', (done) =>{
		const curState = {"counter":14,"testEvents":{"clicks":16,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.7","targetId":"decrement","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":1242};
		const nextState = {"counter":14,"testEvents":{"clicks":17,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_INCREMENT_COUNTER_49 evaluation', (done) =>{
		const curState = {"counter":13,"testEvents":{"clicks":17,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_50 evaluation', (done) =>{
		const curState = {"counter":14,"testEvents":{"clicks":17,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.7","targetId":"decrement","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":211};
		const nextState = {"counter":14,"testEvents":{"clicks":18,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_52 evaluation', (done) =>{
		const curState = {"counter":13,"testEvents":{"clicks":18,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.7","targetId":"decrement","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":120};
		const nextState = {"counter":13,"testEvents":{"clicks":19,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_INCREMENT_COUNTER_54 evaluation', (done) =>{
		const curState = {"counter":12,"testEvents":{"clicks":19,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_55 evaluation', (done) =>{
		const curState = {"counter":13,"testEvents":{"clicks":19,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.7","targetId":"decrement","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":231};
		const nextState = {"counter":13,"testEvents":{"clicks":20,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_57 evaluation', (done) =>{
		const curState = {"counter":12,"testEvents":{"clicks":20,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.7","targetId":"decrement","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":124};
		const nextState = {"counter":12,"testEvents":{"clicks":21,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_59 evaluation', (done) =>{
		const curState = {"counter":11,"testEvents":{"clicks":21,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.7","targetId":"decrement","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":138};
		const nextState = {"counter":11,"testEvents":{"clicks":22,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_61 evaluation', (done) =>{
		const curState = {"counter":10,"testEvents":{"clicks":22,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.7","targetId":"decrement","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":176};
		const nextState = {"counter":10,"testEvents":{"clicks":23,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_63 evaluation', (done) =>{
		const curState = {"counter":9,"testEvents":{"clicks":23,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":1404};
		const nextState = {"counter":9,"testEvents":{"clicks":24,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_65 evaluation', (done) =>{
		const curState = {"counter":9,"testEvents":{"clicks":24,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":171};
		const nextState = {"counter":9,"testEvents":{"clicks":25,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_67 evaluation', (done) =>{
		const curState = {"counter":9,"testEvents":{"clicks":25,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":160};
		const nextState = {"counter":9,"testEvents":{"clicks":26,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_69 evaluation', (done) =>{
		const curState = {"counter":9,"testEvents":{"clicks":26,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":147};
		const nextState = {"counter":9,"testEvents":{"clicks":27,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_71 evaluation', (done) =>{
		const curState = {"counter":9,"testEvents":{"clicks":27,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":141};
		const nextState = {"counter":9,"testEvents":{"clicks":28,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_73 evaluation', (done) =>{
		const curState = {"counter":9,"testEvents":{"clicks":28,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":159};
		const nextState = {"counter":9,"testEvents":{"clicks":29,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_75 evaluation', (done) =>{
		const curState = {"counter":9,"testEvents":{"clicks":29,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":144};
		const nextState = {"counter":9,"testEvents":{"clicks":30,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_77 evaluation', (done) =>{
		const curState = {"counter":9,"testEvents":{"clicks":30,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":176};
		const nextState = {"counter":9,"testEvents":{"clicks":31,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_79 evaluation', (done) =>{
		const curState = {"counter":9,"testEvents":{"clicks":31,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.b","targetId":"incrementAsync","tagName":"BUTTON","className":"button","previousValue":null,"value":"","offsetMillis":171};
		const nextState = {"counter":9,"testEvents":{"clicks":32,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_INCREMENT_COUNTER_81 evaluation', (done) =>{
		const curState = {"counter":9,"testEvents":{"clicks":32,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_INCREMENT_COUNTER_82 evaluation', (done) =>{
		const curState = {"counter":10,"testEvents":{"clicks":32,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_INCREMENT_COUNTER_83 evaluation', (done) =>{
		const curState = {"counter":11,"testEvents":{"clicks":32,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_INCREMENT_COUNTER_84 evaluation', (done) =>{
		const curState = {"counter":12,"testEvents":{"clicks":32,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topClick_85 evaluation', (done) =>{
		const curState = {"counter":13,"testEvents":{"clicks":32,"changes":0,"others":0}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","previousValue":null,"value":"","offsetMillis":956};
		const nextState = {"counter":13,"testEvents":{"clicks":33,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_INCREMENT_COUNTER_86 evaluation', (done) =>{
		const curState = {"counter":13,"testEvents":{"clicks":33,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_INCREMENT_COUNTER_87 evaluation', (done) =>{
		const curState = {"counter":14,"testEvents":{"clicks":33,"changes":0,"others":0}};
		const action = {"name":"CounterActions.incrementAsync","type":"INCREMENT_COUNTER","async":true};
		const nextState = {"counter":15,"testEvents":{"clicks":33,"changes":0,"others":0}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);

	});

	it('check computedState_INCREMENT_COUNTER_88 evaluation', (done) =>{
		const curState = {"counter":15,"testEvents":{"clicks":33,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_INCREMENT_COUNTER_89 evaluation', (done) =>{
		const curState = {"counter":16,"testEvents":{"clicks":33,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_INCREMENT_COUNTER_90 evaluation', (done) =>{
		const curState = {"counter":17,"testEvents":{"clicks":33,"changes":0,"others":0}};
		const state = store.getState();
		expect(state).to.deep.equal(curState);
		waitForStoreChanges(done);

	});

	it('check computedState_topKeyDown_91 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":0,"others":0}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":930};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":0,"others":1}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_92 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":0,"others":1}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","previousValue":null,"value":"a","offsetMillis":204};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":1,"others":1}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_93 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":1,"others":1}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":105};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":1,"others":2}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_94 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":1,"others":2}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","previousValue":null,"value":"as","offsetMillis":158};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":2,"others":2}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_95 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":2,"others":2}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":183};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":2,"others":3}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_96 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":2,"others":3}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","previousValue":null,"value":"asd","offsetMillis":141};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":3,"others":3}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_97 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":3,"others":3}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":141};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":3,"others":4}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_98 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":3,"others":4}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":176};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":3,"others":5}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_99 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":3,"others":5}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":140};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":3,"others":6}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_100 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":3,"others":6}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":161};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":3,"others":7}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_101 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":3,"others":7}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","previousValue":null,"value":"asds","offsetMillis":186};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":4,"others":7}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_102 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":4,"others":7}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":155};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":4,"others":8}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_103 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":4,"others":8}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","previousValue":null,"value":"asdsa","offsetMillis":159};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":5,"others":8}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_104 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":5,"others":8}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":164};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":5,"others":9}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_105 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":5,"others":9}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","previousValue":null,"value":"asdsad","offsetMillis":168};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":6,"others":9}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_106 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":6,"others":9}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":202};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":6,"others":10}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_107 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":6,"others":10}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":116};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":6,"others":11}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_108 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":6,"others":11}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":174};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":6,"others":12}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_109 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":6,"others":12}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","previousValue":null,"value":"asdsads","offsetMillis":218};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":7,"others":12}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_110 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":7,"others":12}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":184};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":7,"others":13}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_111 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":7,"others":13}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","previousValue":null,"value":"asdsadsa","offsetMillis":173};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":8,"others":13}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_112 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":8,"others":13}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":180};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":8,"others":14}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_113 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":8,"others":14}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":155};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":8,"others":15}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_114 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":8,"others":15}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":192};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":8,"others":16}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_115 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":8,"others":16}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","previousValue":null,"value":"asdsadsad","offsetMillis":191};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":9,"others":16}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_116 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":9,"others":16}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":175};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":9,"others":17}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_117 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":9,"others":17}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":181};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":9,"others":18}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topChange_118 evaluation', (done) =>{
		const curState = {"counter":18,"testEvents":{"clicks":33,"changes":9,"others":18}};
		const action = {"record":true,"type":"topChange","reactId":".0.0.c","targetId":"textField","tagName":"INPUT","className":"text","previousValue":null,"value":"asdsadsad","offsetMillis":199};
		const nextState = {"counter":18,"testEvents":{"clicks":33,"changes":10,"others":18}};
		const state = store.getState();
		store.dispatch(action);
		expect(state).to.deep.equal(curState);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});


});
