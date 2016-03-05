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
	}, 0);
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

	it('check computedState_topKeyDown_1 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 0, 'others': 0, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyDown', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'KeyP', 'keyCode': 80, 'which': 80 }, 'offsetMillis': 2783 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 0, 'others': 1, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topInput_2 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 0, 'others': 1, 'events': [] } };
		var action = { 'record': true, 'type': 'topInput', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'previousValue': '', 'value': 'p', 'offsetMillis': 39 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 1, 'others': 1, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyUp_3 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 1, 'others': 1, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyUp', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'KeyP', 'keyCode': 80, 'which': 80 }, 'offsetMillis': 91 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 1, 'others': 2, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyDown_4 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 1, 'others': 2, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyDown', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'KeyR', 'keyCode': 82, 'which': 82 }, 'offsetMillis': 158 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 1, 'others': 3, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topInput_5 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 1, 'others': 3, 'events': [] } };
		var action = { 'record': true, 'type': 'topInput', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'previousValue': '', 'value': 'pr', 'offsetMillis': 42 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 2, 'others': 3, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyUp_6 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 2, 'others': 3, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyUp', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'KeyR', 'keyCode': 82, 'which': 82 }, 'offsetMillis': 41 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 2, 'others': 4, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyDown_7 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 2, 'others': 4, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyDown', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'KeyU', 'keyCode': 85, 'which': 85 }, 'offsetMillis': 212 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 2, 'others': 5, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topInput_8 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 2, 'others': 5, 'events': [] } };
		var action = { 'record': true, 'type': 'topInput', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'previousValue': '', 'value': 'pru', 'offsetMillis': 38 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 3, 'others': 5, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyUp_9 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 3, 'others': 5, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyUp', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'KeyU', 'keyCode': 85, 'which': 85 }, 'offsetMillis': 75 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 3, 'others': 6, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyDown_10 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 3, 'others': 6, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyDown', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'KeyE', 'keyCode': 69, 'which': 69 }, 'offsetMillis': 127 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 3, 'others': 7, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topInput_11 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 3, 'others': 7, 'events': [] } };
		var action = { 'record': true, 'type': 'topInput', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'previousValue': '', 'value': 'prue', 'offsetMillis': 49 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 4, 'others': 7, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyUp_12 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 4, 'others': 7, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyUp', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'KeyE', 'keyCode': 69, 'which': 69 }, 'offsetMillis': 55 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 4, 'others': 8, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyDown_13 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 4, 'others': 8, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyDown', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'KeyB', 'keyCode': 66, 'which': 66 }, 'offsetMillis': 81 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 4, 'others': 9, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topInput_14 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 4, 'others': 9, 'events': [] } };
		var action = { 'record': true, 'type': 'topInput', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'previousValue': '', 'value': 'prueb', 'offsetMillis': 53 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 5, 'others': 9, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyUp_15 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 5, 'others': 9, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyUp', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'KeyB', 'keyCode': 66, 'which': 66 }, 'offsetMillis': 85 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 5, 'others': 10, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyDown_16 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 5, 'others': 10, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyDown', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'KeyA', 'keyCode': 65, 'which': 65 }, 'offsetMillis': 92 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 5, 'others': 11, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topInput_17 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 5, 'others': 11, 'events': [] } };
		var action = { 'record': true, 'type': 'topInput', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'previousValue': '', 'value': 'prueba', 'offsetMillis': 37 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 6, 'others': 11, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyUp_18 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 6, 'others': 11, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyUp', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'KeyA', 'keyCode': 65, 'which': 65 }, 'offsetMillis': 68 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 6, 'others': 12, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyDown_19 evaluation', function (done) {
		var curState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 6, 'others': 12, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyDown', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'Enter', 'keyCode': 13, 'which': 13 }, 'offsetMillis': 335 };
		var nextState = { 'todos': [{ 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 6, 'others': 13, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyUp_21 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 6, 'others': 13, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyUp', 'reactId': '.0.0.0.1', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'new-todo', 'eventData': { 'key': 'Enter', 'keyCode': 13, 'which': 13 }, 'offsetMillis': 90 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 6, 'others': 14, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topClick_22 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 0, 'changes': 6, 'others': 14, 'events': [] } };
		var action = { 'record': true, 'type': 'topClick', 'reactId': '.0.0.1.1.$1.0.1', 'targetId': '', 'tagName': 'LABEL', 'className': '', 'previousValue': null, 'offsetMillis': 1371 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 1, 'changes': 6, 'others': 14, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topClick_23 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 1, 'changes': 6, 'others': 14, 'events': [] } };
		var action = { 'record': true, 'type': 'topClick', 'reactId': '.0.0.1.1.$1.0.1', 'targetId': '', 'tagName': 'LABEL', 'className': '', 'previousValue': null, 'offsetMillis': 160 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 2, 'changes': 6, 'others': 14, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topDoubleClick_24 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 2, 'changes': 6, 'others': 14, 'events': [] } };
		var action = { 'record': true, 'type': 'topDoubleClick', 'reactId': '.0.0.1.1.$1.0.1', 'targetId': '', 'tagName': 'LABEL', 'className': '', 'previousValue': null, 'offsetMillis': 59 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 6, 'others': 14, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyDown_25 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 6, 'others': 14, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyDown', 'reactId': '.0.0.1.1.$1.0', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'edit', 'eventData': { 'key': 'KeyM', 'keyCode': 77, 'which': 77 }, 'offsetMillis': 1424 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 6, 'others': 15, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topInput_26 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 6, 'others': 15, 'events': [] } };
		var action = { 'record': true, 'type': 'topInput', 'reactId': '.0.0.1.1.$1.0', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'edit', 'previousValue': 'prueba', 'value': 'mprueba', 'offsetMillis': 75 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 7, 'others': 15, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyUp_27 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 7, 'others': 15, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyUp', 'reactId': '.0.0.1.1.$1.0', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'edit', 'eventData': { 'key': 'KeyM', 'keyCode': 77, 'which': 77 }, 'offsetMillis': 66 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 7, 'others': 16, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyDown_28 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 7, 'others': 16, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyDown', 'reactId': '.0.0.1.1.$1.0', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'edit', 'eventData': { 'key': 'KeyI', 'keyCode': 73, 'which': 73 }, 'offsetMillis': 251 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 7, 'others': 17, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topInput_29 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 7, 'others': 17, 'events': [] } };
		var action = { 'record': true, 'type': 'topInput', 'reactId': '.0.0.1.1.$1.0', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'edit', 'previousValue': 'prueba', 'value': 'miprueba', 'offsetMillis': 70 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 8, 'others': 17, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyUp_30 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 8, 'others': 17, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyUp', 'reactId': '.0.0.1.1.$1.0', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'edit', 'eventData': { 'key': 'KeyI', 'keyCode': 73, 'which': 73 }, 'offsetMillis': 84 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 8, 'others': 18, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyDown_31 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 8, 'others': 18, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyDown', 'reactId': '.0.0.1.1.$1.0', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'edit', 'eventData': { 'key': 'Space', 'keyCode': 32, 'which': 32 }, 'offsetMillis': 287 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 8, 'others': 19, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topInput_32 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 8, 'others': 19, 'events': [] } };
		var action = { 'record': true, 'type': 'topInput', 'reactId': '.0.0.1.1.$1.0', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'edit', 'previousValue': 'prueba', 'value': 'mi prueba', 'offsetMillis': 82 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 9, 'others': 19, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyUp_33 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 9, 'others': 19, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyUp', 'reactId': '.0.0.1.1.$1.0', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'edit', 'eventData': { 'key': 'Space', 'keyCode': 32, 'which': 32 }, 'offsetMillis': 85 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 9, 'others': 20, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topKeyDown_34 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 9, 'others': 20, 'events': [] } };
		var action = { 'record': true, 'type': 'topKeyDown', 'reactId': '.0.0.1.1.$1.0', 'targetId': 'newTodo', 'tagName': 'INPUT', 'className': 'edit', 'eventData': { 'key': 'Enter', 'keyCode': 13, 'which': 13 }, 'offsetMillis': 568 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 9, 'others': 21, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topClick_37 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'mi prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 3, 'changes': 9, 'others': 21, 'events': [] } };
		var action = { 'record': true, 'type': 'topClick', 'reactId': '.0.0.1.1.$0.0.0', 'targetId': 'todo0', 'tagName': 'INPUT', 'className': 'toggle', 'previousValue': null, 'value': 'on', 'offsetMillis': 3758 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'mi prueba' }, { 'text': 'Use Redux', 'marked': false, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 9, 'others': 21, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topChange_39 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'mi prueba' }, { 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 9, 'others': 21, 'events': [] } };
		var action = { 'record': true, 'type': 'topChange', 'reactId': '.0.0.1.1.$0.0.0', 'targetId': 'todo0', 'tagName': 'INPUT', 'className': 'toggle', 'previousValue': null, 'value': 'on', 'offsetMillis': 82 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'mi prueba' }, { 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 10, 'others': 21, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});

	it('check computedState_topClick_40 evaluation', function (done) {
		var curState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'mi prueba' }, { 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 4, 'changes': 10, 'others': 21, 'events': [] } };
		var action = { 'record': true, 'type': 'topClick', 'reactId': '.0.0.1.2.1.$show_unmarked.0', 'targetId': '', 'tagName': 'A', 'className': '', 'previousValue': null, 'offsetMillis': 1111 };
		var nextState = { 'todos': [{ 'id': 1, 'marked': false, 'text': 'mi prueba' }, { 'text': 'Use Redux', 'marked': true, 'id': 0 }], 'testEvents': { 'clicks': 5, 'changes': 10, 'others': 21, 'events': [] } };
		expect(_reduxSetup.store.getState()).to.deep.equal(curState);
		_reduxSetup.store.dispatch(action);
		expect(_reduxSetup.store.getState()).to.deep.equal(nextState);
		waitForStoreChanges(done);
		dispatchTestAction(action);
	});
});