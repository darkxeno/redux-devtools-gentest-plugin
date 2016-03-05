'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _redux = require('redux');

var _reduxDevtoolsGentestPlugin = require('redux-devtools-gentest-plugin');

//change next line to import your redux combined reducer and your composed store

var _reduxSetup = require('../redux-setup');

//change next line to import your react root component

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

_chai2['default'].config.truncateThreshold = 0;
var simulateRealTime = false;
var expect = _chai2['default'].expect;
var playEvents = _reduxDevtoolsGentestPlugin.Reducers.playEvents.create(_index2['default']);
var testReducer = _redux.combineReducers({ playEvents: playEvents });
var testStore = _redux.createStore(testReducer);
var waitForStoreChanges = function waitForStoreChanges(done) {
	var timeout = setTimeout(function () {
		unsubscribe();
		done();
	}, 100);
	var unsubscribe = _reduxSetup.store.subscribe(function () {
		clearTimeout(timeout);
		unsubscribe();
		done();
	});
};
var dispatchTestAction = function dispatchTestAction(action) {
	if (simulateRealTime && action.offsetMillis) {
		setTimeout(function () {
			return testStore.dispatch(action);
		}, action.offsetMillis);
	} else {
		testStore.dispatch(action);
	}
};

describe('run recorded UI tests', function () {

	this.timeout(60000);

	it('check computedState_topClick_1 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 0, 'others': 0, 'events': [] } };
		var action = { 'record': true, 'type': 'topClick', 'reactId': '.0.0.1.1.$0.0.0', 'targetId': 'todo0', 'tagName': 'INPUT', 'className': 'toggle', 'previousValue': null, 'value': 'on', 'offsetMillis': 1863 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 1, 'changes': 0, 'others': 0, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topChange_3 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 1, 'changes': 0, 'others': 0, 'events': [] } };
		var action = { 'record': true, 'type': 'topChange', 'reactId': '.0.0.1.1.$0.0.0', 'targetId': 'todo0', 'tagName': 'INPUT', 'className': 'toggle', 'previousValue': null, 'value': 'on', 'offsetMillis': 53 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 1, 'changes': 1, 'others': 0, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topClick_4 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 1, 'changes': 1, 'others': 0, 'events': [] } };
		var action = { 'record': true, 'type': 'topClick', 'reactId': '.0.0.1.1.$0.0.0', 'targetId': 'todo0', 'tagName': 'INPUT', 'className': 'toggle', 'previousValue': null, 'value': 'on', 'offsetMillis': 1017 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 2, 'changes': 1, 'others': 0, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topChange_6 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 2, 'changes': 1, 'others': 0, 'events': [] } };
		var action = { 'record': true, 'type': 'topChange', 'reactId': '.0.0.1.1.$0.0.0', 'targetId': 'todo0', 'tagName': 'INPUT', 'className': 'toggle', 'previousValue': null, 'value': 'on', 'offsetMillis': 39 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 2, 'changes': 2, 'others': 0, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topClick_7 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 2, 'changes': 2, 'others': 0, 'events': [] } };
		var action = { 'record': true, 'type': 'topClick', 'reactId': '.0.0.1.1.$0.0.0', 'targetId': 'todo0', 'tagName': 'INPUT', 'className': 'toggle', 'previousValue': null, 'value': 'on', 'offsetMillis': 814 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 2, 'others': 0, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topChange_9 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 2, 'others': 0, 'events': [] } };
		var action = { 'record': true, 'type': 'topChange', 'reactId': '.0.0.1.1.$0.0.0', 'targetId': 'todo0', 'tagName': 'INPUT', 'className': 'toggle', 'previousValue': null, 'value': 'on', 'offsetMillis': 37 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 3, 'others': 0, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topClick_10 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 3, 'others': 0, 'events': [] } };
		var action = { 'record': true, 'type': 'topClick', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'previousValue': '', 'value': '', 'offsetMillis': 915 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 3, 'others': 0, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyDown_11 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 3, 'others': 0, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyDown', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'KeyA', 'keyCode': 65, 'which': 65 }, 'offsetMillis': 743 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 3, 'others': 1, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topInput_12 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 3, 'others': 1, 'events': [] } };
		var action = { 'record': true, 'type': 'topInput', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'previousValue': '', 'value': 'a', 'offsetMillis': 64 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 4, 'others': 1, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyDown_13 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 4, 'others': 1, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyDown', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'KeyS', 'keyCode': 83, 'which': 83 }, 'offsetMillis': 6567 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 4, 'others': 2, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topInput_14 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 4, 'others': 2, 'events': [] } };
		var action = { 'record': true, 'type': 'topInput', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'previousValue': '', 'value': 'as', 'offsetMillis': 35 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 5, 'others': 2, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyUp_15 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 5, 'others': 2, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyUp', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'KeyS', 'keyCode': 83, 'which': 83 }, 'offsetMillis': 79 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 5, 'others': 3, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyDown_16 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 5, 'others': 3, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyDown', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'KeyD', 'keyCode': 68, 'which': 68 }, 'offsetMillis': 254 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 5, 'others': 4, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topInput_17 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 5, 'others': 4, 'events': [] } };
		var action = { 'record': true, 'type': 'topInput', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'previousValue': '', 'value': 'asd', 'offsetMillis': 82 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 6, 'others': 4, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyUp_18 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 6, 'others': 4, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyUp', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'KeyD', 'keyCode': 68, 'which': 68 }, 'offsetMillis': 69 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 6, 'others': 5, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyDown_19 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 6, 'others': 5, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyDown', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'Enter', 'keyCode': 13, 'which': 13 }, 'offsetMillis': 1338 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 6, 'others': 6, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyUp_21 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'asd' }, { 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 6, 'others': 6, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyUp', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'Enter', 'keyCode': 13, 'which': 13 }, 'offsetMillis': 119 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'asd' }, { 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 6, 'others': 7, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topClick_22 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'asd' }, { 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 6, 'others': 7, 'events': [] } };
		var action = { 'record': true, 'type': 'topClick', 'reactId': '.0.0.1.1.$1.0.0', 'targetId': 'todo1', 'tagName': 'INPUT', 'className': 'toggle', 'previousValue': null, 'value': 'on', 'offsetMillis': 1756 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'asd' }, { 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 5, 'changes': 6, 'others': 7, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topChange_24 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': true, 'text': 'asd' }, { 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 5, 'changes': 6, 'others': 7, 'events': [] } };
		var action = { 'record': true, 'type': 'topChange', 'reactId': '.0.0.1.1.$1.0.0', 'targetId': 'todo1', 'tagName': 'INPUT', 'className': 'toggle', 'previousValue': null, 'value': 'on', 'offsetMillis': 45 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': true, 'text': 'asd' }, { 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 5, 'changes': 7, 'others': 7, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topClick_25 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': true, 'text': 'asd' }, { 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 5, 'changes': 7, 'others': 7, 'events': [] } };
		var action = { 'record': true, 'type': 'topClick', 'reactId': '.0.0.1.2.1.$show_unmarked.0', 'targetId': '', 'tagName': 'A', 'className': '', 'previousValue': null, 'offsetMillis': 1453 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': true, 'text': 'asd' }, { 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 6, 'changes': 7, 'others': 7, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topClick_26 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': true, 'text': 'asd' }, { 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 6, 'changes': 7, 'others': 7, 'events': [] } };
		var action = { 'record': true, 'type': 'topClick', 'reactId': '.0.0.1.2.1.$show_marked.0', 'targetId': '', 'tagName': 'A', 'className': '', 'previousValue': null, 'offsetMillis': 1734 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': true, 'text': 'asd' }, { 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 7, 'changes': 7, 'others': 7, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topClick_27 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': true, 'text': 'asd' }, { 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 7, 'changes': 7, 'others': 7, 'events': [] } };
		var action = { 'record': true, 'type': 'topClick', 'reactId': '.0.0.1.2.2', 'targetId': '', 'tagName': 'BUTTON', 'className': 'clear-completed', 'previousValue': null, 'value': '', 'offsetMillis': 2052 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': true, 'text': 'asd' }, { 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 8, 'changes': 7, 'others': 7, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});
});