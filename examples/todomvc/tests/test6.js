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

	it('check computedState_topKeyDown_1 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":0,"others":0}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyU","keyCode":85,"which":85},"offsetMillis":2780};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":0,"others":1}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topInput_2 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":0,"others":1}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"u","offsetMillis":39};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":1}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_3 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":1}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyU","keyCode":85,"which":85},"offsetMillis":62};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":2}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_4 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":2}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyN","keyCode":78,"which":78},"offsetMillis":114};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":3}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topInput_5 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":3}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"un","offsetMillis":35};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":2,"others":3}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_6 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":2,"others":3}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyN","keyCode":78,"which":78},"offsetMillis":69};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":2,"others":4}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_7 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":2,"others":4}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyO","keyCode":79,"which":79},"offsetMillis":119};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":2,"others":5}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topInput_8 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":2,"others":5}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"uno","offsetMillis":32};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":3,"others":5}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_9 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":3,"others":5}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyO","keyCode":79,"which":79},"offsetMillis":91};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":3,"others":6}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_10 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":3,"others":6}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"Space","keyCode":32,"which":32},"offsetMillis":142};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":3,"others":7}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topInput_11 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":3,"others":7}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"uno ","offsetMillis":49};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":4,"others":7}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_12 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":4,"others":7}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"Space","keyCode":32,"which":32},"offsetMillis":62};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":4,"others":8}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_13 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":4,"others":8}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyM","keyCode":77,"which":77},"offsetMillis":129};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":4,"others":9}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topInput_14 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":4,"others":9}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"uno m","offsetMillis":46};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":5,"others":9}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_15 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":5,"others":9}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyM","keyCode":77,"which":77},"offsetMillis":66};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":5,"others":10}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_16 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":5,"others":10}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":120};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":5,"others":11}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topInput_17 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":5,"others":11}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"uno ma","offsetMillis":43};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":6,"others":11}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_18 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":6,"others":11}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":49};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":6,"others":12}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topInput_19 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":6,"others":12}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"uno mas","offsetMillis":63};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":7,"others":12}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_20 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":7,"others":12}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":51};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":7,"others":13}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_21 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":7,"others":13}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":54};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":7,"others":14}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_22 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":7,"others":14}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"OSLeft","keyCode":91,"which":91},"offsetMillis":771};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":7,"others":15}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_23 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":7,"others":15}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"OSLeft","keyCode":91,"which":91},"offsetMillis":1280};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":7,"others":16}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_24 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":7,"others":16}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"Enter","keyCode":13,"which":13},"offsetMillis":385};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":7,"others":17}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_26 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":7,"others":17}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"Enter","keyCode":13,"which":13},"offsetMillis":127};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":7,"others":18}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_27 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":7,"others":18}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyO","keyCode":79,"which":79},"offsetMillis":1569};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":7,"others":19}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topInput_28 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":7,"others":19}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"o","offsetMillis":71};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":8,"others":19}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_29 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":8,"others":19}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyO","keyCode":79,"which":79},"offsetMillis":65};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":8,"others":20}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_30 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":8,"others":20}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyT","keyCode":84,"which":84},"offsetMillis":112};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":8,"others":21}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topInput_31 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":8,"others":21}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"ot","offsetMillis":83};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":9,"others":21}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_32 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":9,"others":21}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyT","keyCode":84,"which":84},"offsetMillis":66};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":9,"others":22}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_33 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":9,"others":22}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyR","keyCode":82,"which":82},"offsetMillis":75};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":9,"others":23}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topInput_34 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":9,"others":23}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"otr","offsetMillis":66};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":10,"others":23}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_35 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":10,"others":23}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyR","keyCode":82,"which":82},"offsetMillis":78};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":10,"others":24}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_36 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":10,"others":24}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyO","keyCode":79,"which":79},"offsetMillis":73};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":10,"others":25}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topInput_37 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":10,"others":25}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"otro","offsetMillis":66};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":11,"others":25}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_38 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":11,"others":25}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"KeyO","keyCode":79,"which":79},"offsetMillis":105};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":11,"others":26}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_39 evaluation', (done) =>{
		const curState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":11,"others":26}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"Enter","keyCode":13,"which":13},"offsetMillis":1588};
		const nextState = {"todos":[{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":11,"others":27}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_41 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":false,"text":"otro"},{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":11,"others":27}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","eventData":{"key":"Enter","keyCode":13,"which":13},"offsetMillis":112};
		const nextState = {"todos":[{"id":2,"marked":false,"text":"otro"},{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":11,"others":28}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topClick_42 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":false,"text":"otro"},{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":11,"others":28}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":1607};
		const nextState = {"todos":[{"id":2,"marked":false,"text":"otro"},{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":1,"changes":11,"others":28}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topChange_44 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":1,"changes":11,"others":28}};
		const action = {"record":true,"type":"topChange","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":98};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":1,"changes":12,"others":28}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topClick_45 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":1,"changes":12,"others":28}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.1.$1.0.0","targetId":"todo1","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":848};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":false,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":2,"changes":12,"others":28}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topChange_47 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":2,"changes":12,"others":28}};
		const action = {"record":true,"type":"topChange","reactId":".0.0.1.1.$1.0.0","targetId":"todo1","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":73};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":2,"changes":13,"others":28}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topClick_48 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":2,"changes":13,"others":28}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.2.1.$show_unmarked.0","targetId":"","tagName":"A","className":"","previousValue":null,"offsetMillis":1425};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":13,"others":28}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topClick_49 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":3,"changes":13,"others":28}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.2.1.$show_marked.0","targetId":"","tagName":"A","className":"","previousValue":null,"offsetMillis":1353};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":4,"changes":13,"others":28}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topClick_50 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":4,"changes":13,"others":28}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.2.1.$show_all.0","targetId":"","tagName":"A","className":"","previousValue":null,"offsetMillis":1833};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":5,"changes":13,"others":28}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topClick_51 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":5,"changes":13,"others":28}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":992};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":6,"changes":13,"others":28}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topClick_52 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":6,"changes":13,"others":28}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":170};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":7,"changes":13,"others":28}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topDoubleClick_53 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":7,"changes":13,"others":28}};
		const action = {"record":true,"type":"topDoubleClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":91};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":13,"others":28}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_54 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":13,"others":28}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"OSLeft","keyCode":91,"which":91},"offsetMillis":902};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":13,"others":29}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_55 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":13,"others":29}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"ShiftRight","keyCode":16,"which":16},"offsetMillis":79};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":13,"others":30}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_56 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":13,"others":30}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"ArrowRight","keyCode":39,"which":39},"offsetMillis":122};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":13,"others":31}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_57 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":13,"others":31}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"ShiftRight","keyCode":16,"which":16},"offsetMillis":159};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":13,"others":32}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_58 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":13,"others":32}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"OSLeft","keyCode":91,"which":91},"offsetMillis":87};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":13,"others":33}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_59 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":13,"others":33}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":385};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":13,"others":34}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topInput_60 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":13,"others":34}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","previousValue":"Use Redux","value":"a","offsetMillis":82};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":14,"others":34}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_61 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":14,"others":34}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"KeyA","keyCode":65,"which":65},"offsetMillis":91};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":14,"others":35}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_62 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":14,"others":35}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":109};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":14,"others":36}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topInput_63 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":14,"others":36}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","previousValue":"Use Redux","value":"ad","offsetMillis":96};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":15,"others":36}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_64 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":15,"others":36}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"KeyD","keyCode":68,"which":68},"offsetMillis":100};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":15,"others":37}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_65 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":15,"others":37}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"KeyI","keyCode":73,"which":73},"offsetMillis":112};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":15,"others":38}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topInput_66 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":15,"others":38}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","previousValue":"Use Redux","value":"adi","offsetMillis":110};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":16,"others":38}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_67 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":16,"others":38}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"KeyI","keyCode":73,"which":73},"offsetMillis":98};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":16,"others":39}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_68 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":16,"others":39}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"KeyO","keyCode":79,"which":79},"offsetMillis":111};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":16,"others":40}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topInput_69 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":16,"others":40}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","previousValue":"Use Redux","value":"adio","offsetMillis":121};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":17,"others":40}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_70 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":17,"others":40}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"KeyO","keyCode":79,"which":79},"offsetMillis":107};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":17,"others":41}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_71 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":17,"others":41}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":108};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":17,"others":42}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topInput_72 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":17,"others":42}};
		const action = {"record":true,"type":"topInput","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","previousValue":"Use Redux","value":"adios","offsetMillis":103};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":18,"others":42}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyUp_73 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":18,"others":42}};
		const action = {"record":true,"type":"topKeyUp","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"KeyS","keyCode":83,"which":83},"offsetMillis":99};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":18,"others":43}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topKeyDown_74 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":18,"others":43}};
		const action = {"record":true,"type":"topKeyDown","reactId":".0.0.1.1.$0.0","targetId":"newTodo","tagName":"INPUT","className":"edit","eventData":{"key":"Enter","keyCode":13,"which":13},"offsetMillis":585};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":18,"others":44}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});

	it('check computedState_topClick_77 evaluation', (done) =>{
		const curState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"adios","marked":false,"id":0}],"testEvents":{"clicks":8,"changes":18,"others":44}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.2.2","targetId":"","tagName":"BUTTON","className":"clear-completed","previousValue":null,"value":"","offsetMillis":2101};
		const nextState = {"todos":[{"id":2,"marked":true,"text":"otro"},{"id":1,"marked":true,"text":"uno mas"},{"text":"adios","marked":false,"id":0}],"testEvents":{"clicks":9,"changes":18,"others":44}};
		const realCurState = store.getState();
		store.dispatch(action);
		const realNextState = store.getState();
		dispatchTestAction(action);
		expect(realCurState).to.deep.equal(curState);
		expect(realNextState).to.deep.equal(nextState);
		conditionalWait(done);

	});


});
