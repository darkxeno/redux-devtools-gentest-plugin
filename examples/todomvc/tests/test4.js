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
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":0,"others":0,"events":[]}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":1863};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":1,"changes":0,"others":0,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topChange_3 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":1,"changes":0,"others":0,"events":[]}};
		const action = {"record":true,"type":"topChange","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":53};
		const nextState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":1,"changes":1,"others":0,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_4 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":1,"changes":1,"others":0,"events":[]}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":1017};
		const nextState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":2,"changes":1,"others":0,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topChange_6 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":2,"changes":1,"others":0,"events":[]}};
		const action = {"record":true,"type":"topChange","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":39};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":2,"changes":2,"others":0,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_7 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":2,"changes":2,"others":0,"events":[]}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":814};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":2,"others":0,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topChange_9 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":3,"changes":2,"others":0,"events":[]}};
		const action = {"record":true,"type":"topChange","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":37};
		const nextState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":3,"changes":3,"others":0,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_10 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":3,"changes":3,"others":0,"events":[]}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"","offsetMillis":915};
		const nextState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":3,"others":0,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_11 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":3,"others":0,"events":[]}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":743};
		const nextState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":3,"others":1,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_12 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":3,"others":1,"events":[]}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"a","offsetMillis":64};
		const nextState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":4,"others":1,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_13 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":4,"others":1,"events":[]}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":6567};
		const nextState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":4,"others":2,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_14 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":4,"others":2,"events":[]}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"as","offsetMillis":35};
		const nextState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":5,"others":2,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_15 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":5,"others":2,"events":[]}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":79};
		const nextState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":5,"others":3,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_16 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":5,"others":3,"events":[]}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":254};
		const nextState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":5,"others":4,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topInput_17 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":5,"others":4,"events":[]}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asd","offsetMillis":82};
		const nextState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":6,"others":4,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_18 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":6,"others":4,"events":[]}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":69};
		const nextState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":6,"others":5,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyDown_19 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":6,"others":5,"events":[]}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"Enter","keyCode":13,"which":13},"offsetMillis":1338};
		const nextState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":6,"others":6,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topKeyUp_21 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"asd"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":6,"others":6,"events":[]}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"Enter","keyCode":13,"which":13},"offsetMillis":119};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"asd"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":6,"others":7,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_22 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"asd"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":6,"others":7,"events":[]}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.1.$1.0.0","targetId":"todo1","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":1756};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"asd"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":5,"changes":6,"others":7,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topChange_24 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":true,"text":"asd"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":5,"changes":6,"others":7,"events":[]}};
		const action = {"record":true,"type":"topChange","reactId":".0.0.1.1.$1.0.0","targetId":"todo1","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":45};
		const nextState = {"todos":[{"id":1,"marked":true,"text":"asd"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":5,"changes":7,"others":7,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_25 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":true,"text":"asd"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":5,"changes":7,"others":7,"events":[]}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.2.1.$show_unmarked.0","targetId":"","tagName":"A","className":"","previousValue":null,"offsetMillis":1453};
		const nextState = {"todos":[{"id":1,"marked":true,"text":"asd"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":6,"changes":7,"others":7,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_26 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":true,"text":"asd"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":6,"changes":7,"others":7,"events":[]}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.2.1.$show_marked.0","targetId":"","tagName":"A","className":"","previousValue":null,"offsetMillis":1734};
		const nextState = {"todos":[{"id":1,"marked":true,"text":"asd"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":7,"changes":7,"others":7,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_27 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":true,"text":"asd"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":7,"changes":7,"others":7,"events":[]}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.2.2","targetId":"","tagName":"BUTTON","className":"clear-completed","previousValue":null,"value":"","offsetMillis":2052};
		const nextState = {"todos":[{"id":1,"marked":true,"text":"asd"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":8,"changes":7,"others":7,"events":[]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});


});
