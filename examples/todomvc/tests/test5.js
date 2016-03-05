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
	},0);
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

	it('check computedState_topKeyDown_1 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":0,"others":0,"events":[]}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyP","keyCode":80,"which":80},"offsetMillis":2783};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":0,"others":1,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_2 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":0,"others":1,"events":[]}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"p","offsetMillis":39};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":1,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_3 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":1,"events":[]}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyP","keyCode":80,"which":80},"offsetMillis":91};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":2,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_4 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":2,"events":[]}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyR","keyCode":82,"which":82},"offsetMillis":158};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":3,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_5 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":3,"events":[]}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"pr","offsetMillis":42};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":2,"others":3,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_6 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":2,"others":3,"events":[]}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyR","keyCode":82,"which":82},"offsetMillis":41};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":2,"others":4,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_7 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":2,"others":4,"events":[]}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyU","keyCode":85,"which":85},"offsetMillis":212};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":2,"others":5,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_8 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":2,"others":5,"events":[]}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"pru","offsetMillis":38};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":3,"others":5,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_9 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":3,"others":5,"events":[]}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyU","keyCode":85,"which":85},"offsetMillis":75};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":3,"others":6,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_10 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":3,"others":6,"events":[]}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyE","keyCode":69,"which":69},"offsetMillis":127};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":3,"others":7,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_11 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":3,"others":7,"events":[]}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"prue","offsetMillis":49};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":4,"others":7,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_12 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":4,"others":7,"events":[]}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyE","keyCode":69,"which":69},"offsetMillis":55};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":4,"others":8,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_13 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":4,"others":8,"events":[]}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyB","keyCode":66,"which":66},"offsetMillis":81};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":4,"others":9,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_14 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":4,"others":9,"events":[]}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"prueb","offsetMillis":53};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":5,"others":9,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_15 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":5,"others":9,"events":[]}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyB","keyCode":66,"which":66},"offsetMillis":85};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":5,"others":10,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_16 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":5,"others":10,"events":[]}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":92};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":5,"others":11,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_17 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":5,"others":11,"events":[]}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"prueba","offsetMillis":37};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":6,"others":11,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_18 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":6,"others":11,"events":[]}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":68};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":6,"others":12,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_19 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":6,"others":12,"events":[]}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"Enter","keyCode":13,"which":13},"offsetMillis":335};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":6,"others":13,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_21 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":6,"others":13,"events":[]}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"Enter","keyCode":13,"which":13},"offsetMillis":90};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":6,"others":14,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_22 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":6,"others":14,"events":[]}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.1.$1.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":1371};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":1,"changes":6,"others":14,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_23 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":1,"changes":6,"others":14,"events":[]}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.1.$1.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":160};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":2,"changes":6,"others":14,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topDoubleClick_24 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":2,"changes":6,"others":14,"events":[]}};
		const action = {"record":true,"type":"topDoubleClick","reactId":".0.0.1.1.$1.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":59};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":6,"others":14,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_25 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":6,"others":14,"events":[]}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.1.1.$1.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"KeyM","keyCode":77,"which":77},"offsetMillis":1424};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":6,"others":15,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_26 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":6,"others":15,"events":[]}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.1.1.$1.0","targetId":"newTodo","tagName":"INPUT","className":"edit","previousValue":"prueba","value":"mprueba","offsetMillis":75};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":7,"others":15,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_27 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":7,"others":15,"events":[]}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.1.1.$1.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"KeyM","keyCode":77,"which":77},"offsetMillis":66};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":7,"others":16,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_28 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":7,"others":16,"events":[]}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.1.1.$1.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"KeyI","keyCode":73,"which":73},"offsetMillis":251};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":7,"others":17,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_29 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":7,"others":17,"events":[]}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.1.1.$1.0","targetId":"newTodo","tagName":"INPUT","className":"edit","previousValue":"prueba","value":"miprueba","offsetMillis":70};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":8,"others":17,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_30 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":8,"others":17,"events":[]}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.1.1.$1.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"KeyI","keyCode":73,"which":73},"offsetMillis":84};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":8,"others":18,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_31 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":8,"others":18,"events":[]}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.1.1.$1.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"Space","keyCode":32,"which":32},"offsetMillis":287};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":8,"others":19,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_32 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":8,"others":19,"events":[]}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.1.1.$1.0","targetId":"newTodo","tagName":"INPUT","className":"edit","previousValue":"prueba","value":"mi prueba","offsetMillis":82};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":9,"others":19,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_33 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":9,"others":19,"events":[]}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.1.1.$1.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"Space","keyCode":32,"which":32},"offsetMillis":85};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":9,"others":20,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_34 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":9,"others":20,"events":[]}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.1.1.$1.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"Enter","keyCode":13,"which":13},"offsetMillis":568};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":9,"others":21,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_37 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"mi prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":9,"others":21,"events":[]}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":3758};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"mi prueba"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":4,"changes":9,"others":21,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topChange_39 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"mi prueba"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":9,"others":21,"events":[]}};
		const action = {"record":true,"type":"topChange","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":82};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"mi prueba"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":10,"others":21,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_40 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"mi prueba"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":10,"others":21,"events":[]}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.2.1.$show_unmarked.0","targetId":"","tagName":"A","className":"","previousValue":null,"offsetMillis":1111};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"mi prueba"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":5,"changes":10,"others":21,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});


});
