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

	it('check computedState_topChange_1 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":0,"others":0,"events":[]}};
		const action = {"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}}]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

	it('check computedState_topClick_2 evaluation', (done) =>{
		const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":0,"changes":1,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}}]}};
		const action = {"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":5308};
		const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":1,"changes":1,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":5308}}]}};
		expect(store.getState()).to.deep.equal(curState);
		store.dispatch(action);
		expect(store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);

	});

it('check computedState_topClick_3 evaluation', (done) =>{
	const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":1,"changes":1,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":5308}}]}};
	const action = {"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":2297};
	const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}],"testEvents":{"clicks":2,"changes":1,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":5308}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":2297}}]}};
	expect(store.getState()).to.deep.equal(curState);
	store.dispatch(action);
	expect(store.getState()).to.deep.equal(nextState);
	waitForStoreChanges(done);
	dispatchTestAction(action);

});

it('check computedState_topChange_5 evaluation', (done) =>{
	const curState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":2,"changes":1,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":5308}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":2297}}]}};
	const action = {"record":true,"type":"topChange","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":57};
	const nextState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":2,"changes":2,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":5308}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":2297}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":57}}]}};
	expect(store.getState()).to.deep.equal(curState);
	store.dispatch(action);
	expect(store.getState()).to.deep.equal(nextState);
	waitForStoreChanges(done);
	dispatchTestAction(action);

});

it('check computedState_topClick_6 evaluation', (done) =>{
	const curState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":2,"changes":2,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":5308}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":2297}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":57}}]}};
	const action = {"record":true,"type":"topClick","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":1102};
	const nextState = {"todos":[{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":3,"changes":2,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":5308}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":2297}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":57}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":1102}}]}};
	expect(store.getState()).to.deep.equal(curState);
	store.dispatch(action);
	expect(store.getState()).to.deep.equal(nextState);
	waitForStoreChanges(done);
	dispatchTestAction(action);

});

it('check computedState_topClick_10 evaluation', (done) =>{
	const curState = {"todos":[{"id":3,"marked":false,"text":"1234"},{"id":2,"marked":false,"text":"123"},{"id":1,"marked":false,"text":"asadasdad"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":3,"changes":2,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":5308}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":2297}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":57}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":1102}}]}};
	const action = {"record":true,"type":"topClick","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":7043};
	const nextState = {"todos":[{"id":3,"marked":false,"text":"1234"},{"id":2,"marked":false,"text":"123"},{"id":1,"marked":false,"text":"asadasdad"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":2,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":5308}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":2297}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":57}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":1102}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":7043}}]}};
	expect(store.getState()).to.deep.equal(curState);
	store.dispatch(action);
	expect(store.getState()).to.deep.equal(nextState);
	waitForStoreChanges(done);
	dispatchTestAction(action);

});

it('check computedState_topChange_12 evaluation', (done) =>{
	const curState = {"todos":[{"id":3,"marked":false,"text":"1234"},{"id":2,"marked":true,"text":"123"},{"id":1,"marked":false,"text":"asadasdad"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":2,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":5308}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":2297}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":57}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":1102}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":7043}}]}};
	const action = {"record":true,"type":"topChange","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":85};
	const nextState = {"todos":[{"id":3,"marked":false,"text":"1234"},{"id":2,"marked":true,"text":"123"},{"id":1,"marked":false,"text":"asadasdad"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":3,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":5308}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":2297}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":57}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":1102}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":7043}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":85}}]}};
	expect(store.getState()).to.deep.equal(curState);
	store.dispatch(action);
	expect(store.getState()).to.deep.equal(nextState);
	waitForStoreChanges(done);
	dispatchTestAction(action);

});

it('check computedState_topClick_13 evaluation', (done) =>{
	const curState = {"todos":[{"id":3,"marked":false,"text":"1234"},{"id":2,"marked":true,"text":"123"},{"id":1,"marked":false,"text":"asadasdad"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":4,"changes":3,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":5308}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":2297}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":57}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":1102}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":7043}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":85}}]}};
	const action = {"record":true,"type":"topClick","reactId":".0.0.1.1.$3.0.0","targetId":"todo3","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":1239};
	const nextState = {"todos":[{"id":3,"marked":false,"text":"1234"},{"id":2,"marked":true,"text":"123"},{"id":1,"marked":false,"text":"asadasdad"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":5,"changes":3,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":5308}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":2297}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":57}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":1102}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":7043}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":85}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$3.0.0","targetId":"todo3","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":1239}}]}};
	expect(store.getState()).to.deep.equal(curState);
	store.dispatch(action);
	expect(store.getState()).to.deep.equal(nextState);
	waitForStoreChanges(done);
	dispatchTestAction(action);

});

it('check computedState_topChange_15 evaluation', (done) =>{
	const curState = {"todos":[{"id":3,"marked":true,"text":"1234"},{"id":2,"marked":true,"text":"123"},{"id":1,"marked":false,"text":"asadasdad"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":5,"changes":3,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":5308}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":2297}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":57}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":1102}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":7043}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":85}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$3.0.0","targetId":"todo3","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":1239}}]}};
	const action = {"record":true,"type":"topChange","reactId":".0.0.1.1.$3.0.0","targetId":"todo3","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":79};
	const nextState = {"todos":[{"id":3,"marked":true,"text":"1234"},{"id":2,"marked":true,"text":"123"},{"id":1,"marked":false,"text":"asadasdad"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":5,"changes":4,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":5308}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":2297}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":57}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":1102}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":7043}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":85}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$3.0.0","targetId":"todo3","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":1239}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$3.0.0","targetId":"todo3","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":79}}]}};
	expect(store.getState()).to.deep.equal(curState);
	store.dispatch(action);
	expect(store.getState()).to.deep.equal(nextState);
	waitForStoreChanges(done);
	dispatchTestAction(action);

});

it('check computedState_topClick_16 evaluation', (done) =>{
	const curState = {"todos":[{"id":3,"marked":true,"text":"1234"},{"id":2,"marked":true,"text":"123"},{"id":1,"marked":false,"text":"asadasdad"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":5,"changes":4,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":5308}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":2297}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":57}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":1102}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":7043}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":85}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$3.0.0","targetId":"todo3","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":1239}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$3.0.0","targetId":"todo3","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":79}}]}};
	const action = {"record":true,"type":"topClick","reactId":".0.1.0.0.m","targetId":"","tagName":"SPAN","className":"","previousValue":null,"offsetMillis":1468};
	const nextState = {"todos":[{"id":3,"marked":true,"text":"1234"},{"id":2,"marked":true,"text":"123"},{"id":1,"marked":false,"text":"asadasdad"},{"text":"Use Redux","marked":true,"id":0}],"testEvents":{"clicks":6,"changes":4,"others":0,"events":[{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":5293}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.1","targetId":"","tagName":"LABEL","className":"","previousValue":null,"offsetMillis":5308}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":2297}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$0.0.0","targetId":"todo0","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":57}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.0.1","targetId":"newTodo","tagName":"INPUT","className":"new-todo","previousValue":"","value":"asadasdad","offsetMillis":1102}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":7043}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$2.0.0","targetId":"todo2","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":85}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.0.1.1.$3.0.0","targetId":"todo3","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":1239}},{"type":"topChange","component":{"record":true,"type":"topChange","reactId":".0.0.1.1.$3.0.0","targetId":"todo3","tagName":"INPUT","className":"toggle","previousValue":null,"value":"on","offsetMillis":79}},{"type":"topClick","component":{"record":true,"type":"topClick","reactId":".0.1.0.0.m","targetId":"","tagName":"SPAN","className":"","previousValue":null,"offsetMillis":1468}}]}};
	expect(store.getState()).to.deep.equal(curState);
	store.dispatch(action);
	expect(store.getState()).to.deep.equal(nextState);
	waitForStoreChanges(done);
	dispatchTestAction(action);

});


});
