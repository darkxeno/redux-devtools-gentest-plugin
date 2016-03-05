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

	it('check computedState_topKeyDown_1 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":0,"others":0,"events":[]}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":0,"others":1,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}}]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_2 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":0,"others":1,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}}]}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":48};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":1,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":48}}]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

it('check computedState_topKeyUp_3 evaluation', (done) =>{
	const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":1,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":48}}]}};
	const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":119};
	const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":2,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":48}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":119}}]}};
	expect(store.getState()).to.deep.equal(curState);
	store.dispatch(action);
	expect(store.getState()).to.deep.equal(nextState);
	waitForStoreChanges(done);
	dispatchTestAction(action);

});

it('check computedState_topKeyDown_4 evaluation', (done) =>{
	const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":2,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":48}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":119}}]}};
	const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":113};
	const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":3,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":48}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":119}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":113}}]}};
	expect(store.getState()).to.deep.equal(curState);
	store.dispatch(action);
	expect(store.getState()).to.deep.equal(nextState);
	waitForStoreChanges(done);
	dispatchTestAction(action);

});

it('check computedState_topInput_5 evaluation', (done) =>{
	const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":3,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":48}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":119}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":113}}]}};
	const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"as","offsetMillis":42};
	const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":2,"others":3,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":48}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":119}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":113}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"as","offsetMillis":42}}]}};
	expect(store.getState()).to.deep.equal(curState);
	store.dispatch(action);
	expect(store.getState()).to.deep.equal(nextState);
	waitForStoreChanges(done);
	dispatchTestAction(action);

});

it('check computedState_topKeyUp_6 evaluation', (done) =>{
	const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":2,"others":3,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":48}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":119}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":113}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"as","offsetMillis":42}}]}};
	const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":93};
	const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":2,"others":4,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":48}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":119}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":113}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"as","offsetMillis":42}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":93}}]}};
	expect(store.getState()).to.deep.equal(curState);
	store.dispatch(action);
	expect(store.getState()).to.deep.equal(nextState);
	waitForStoreChanges(done);
	dispatchTestAction(action);

});

it('check computedState_topKeyDown_7 evaluation', (done) =>{
	const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":2,"others":4,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":48}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":119}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":113}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"as","offsetMillis":42}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":93}}]}};
	const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":232};
	const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":2,"others":5,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":48}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":119}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":113}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"as","offsetMillis":42}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":93}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":232}}]}};
	expect(store.getState()).to.deep.equal(curState);
	store.dispatch(action);
	expect(store.getState()).to.deep.equal(nextState);
	waitForStoreChanges(done);
	dispatchTestAction(action);

});

it('check computedState_topInput_8 evaluation', (done) =>{
	const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":2,"others":5,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":48}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":119}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":113}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"as","offsetMillis":42}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":93}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":232}}]}};
	const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asd","offsetMillis":48};
	const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":3,"others":5,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":48}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":119}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":113}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"as","offsetMillis":42}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":93}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":232}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asd","offsetMillis":48}}]}};
	expect(store.getState()).to.deep.equal(curState);
	store.dispatch(action);
	expect(store.getState()).to.deep.equal(nextState);
	waitForStoreChanges(done);
	dispatchTestAction(action);

});

it('check computedState_topKeyUp_9 evaluation', (done) =>{
	const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":3,"others":5,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":48}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":119}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":113}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"as","offsetMillis":42}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":93}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":232}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asd","offsetMillis":48}}]}};
	const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":110};
	const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":3,"others":6,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":48}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":119}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":113}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"as","offsetMillis":42}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":93}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":232}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asd","offsetMillis":48}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":110}}]}};
	expect(store.getState()).to.deep.equal(curState);
	store.dispatch(action);
	expect(store.getState()).to.deep.equal(nextState);
	waitForStoreChanges(done);
	dispatchTestAction(action);

});

it('check computedState_topKeyDown_10 evaluation', (done) =>{
	const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":3,"others":6,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":48}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":119}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":113}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"as","offsetMillis":42}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":93}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":232}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asd","offsetMillis":48}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":110}}]}};
	const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"Enter","keyCode":13,"which":13},"offsetMillis":754};
	const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":3,"others":7,"events":[{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":1576}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":48}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":119}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":113}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"as","offsetMillis":42}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":93}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":232}},{"type":"topInput","component":{"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asd","offsetMillis":48}},{"type":"topKeyUp","component":{"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":110}},{"type":"topKeyDown","component":{"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"Enter","keyCode":13,"which":13},"offsetMillis":754}}]}};
	expect(store.getState()).to.deep.equal(curState);
	store.dispatch(action);
	expect(store.getState()).to.deep.equal(nextState);
	waitForStoreChanges(done);
	dispatchTestAction(action);

});


});
