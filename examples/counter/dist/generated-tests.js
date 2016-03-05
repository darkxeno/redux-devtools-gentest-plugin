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

describe('run recorded UI tests', function () {

	this.timeout(60000);

	it('check computedState_click_1 evaluation', function (done) {
		var curState = { 'counter': 0 };
		var action = { 'record': true, 'type': 'click', 'reactId': '.0.0.4', 'tagName': 'BUTTON', 'offsetMillis': 5323 };
		var nextState = { 'counter': 0 };
		_reduxSetup.store.dispatch(action);
		var unsubscribe = _reduxSetup.store.subscribe(function () {
			unsubscribe();
			done();
		});
		if (simulateRealTime && action.offsetMillis) {
			setTimeout(function () {
				return testStore.dispatch(action);
			}, action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}
	});

	it('check computedState_click_3 evaluation', function (done) {
		var curState = { 'counter': 1 };
		var action = { 'record': true, 'type': 'click', 'reactId': '.0.0.4', 'tagName': 'BUTTON', 'offsetMillis': 1645 };
		var nextState = { 'counter': 1 };
		_reduxSetup.store.dispatch(action);
		var unsubscribe = _reduxSetup.store.subscribe(function () {
			unsubscribe();
			done();
		});
		if (simulateRealTime && action.offsetMillis) {
			setTimeout(function () {
				return testStore.dispatch(action);
			}, action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}
	});

	it('check computedState_click_5 evaluation', function (done) {
		var curState = { 'counter': 2 };
		var action = { 'record': true, 'type': 'click', 'reactId': '.0.0.4', 'tagName': 'BUTTON', 'offsetMillis': 1230 };
		var nextState = { 'counter': 2 };
		_reduxSetup.store.dispatch(action);
		var unsubscribe = _reduxSetup.store.subscribe(function () {
			unsubscribe();
			done();
		});
		if (simulateRealTime && action.offsetMillis) {
			setTimeout(function () {
				return testStore.dispatch(action);
			}, action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}
	});

	it('check computedState_click_7 evaluation', function (done) {
		var curState = { 'counter': 3 };
		var action = { 'record': true, 'type': 'click', 'reactId': '.0.0.4', 'tagName': 'BUTTON', 'offsetMillis': 585 };
		var nextState = { 'counter': 3 };
		_reduxSetup.store.dispatch(action);
		var unsubscribe = _reduxSetup.store.subscribe(function () {
			unsubscribe();
			done();
		});
		if (simulateRealTime && action.offsetMillis) {
			setTimeout(function () {
				return testStore.dispatch(action);
			}, action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}
	});

	it('check computedState_click_9 evaluation', function (done) {
		var curState = { 'counter': 4 };
		var action = { 'record': true, 'type': 'click', 'reactId': '.0.0.4', 'tagName': 'BUTTON', 'offsetMillis': 474 };
		var nextState = { 'counter': 4 };
		_reduxSetup.store.dispatch(action);
		var unsubscribe = _reduxSetup.store.subscribe(function () {
			unsubscribe();
			done();
		});
		if (simulateRealTime && action.offsetMillis) {
			setTimeout(function () {
				return testStore.dispatch(action);
			}, action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}
	});

	it('check computedState_click_11 evaluation', function (done) {
		var curState = { 'counter': 5 };
		var action = { 'record': true, 'type': 'click', 'reactId': '.0.0.4', 'tagName': 'BUTTON', 'offsetMillis': 271 };
		var nextState = { 'counter': 5 };
		_reduxSetup.store.dispatch(action);
		var unsubscribe = _reduxSetup.store.subscribe(function () {
			unsubscribe();
			done();
		});
		if (simulateRealTime && action.offsetMillis) {
			setTimeout(function () {
				return testStore.dispatch(action);
			}, action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}
	});

	it('check computedState_click_13 evaluation', function (done) {
		var curState = { 'counter': 6 };
		var action = { 'record': true, 'type': 'click', 'reactId': '.0.0.4', 'tagName': 'BUTTON', 'offsetMillis': 336 };
		var nextState = { 'counter': 6 };
		_reduxSetup.store.dispatch(action);
		var unsubscribe = _reduxSetup.store.subscribe(function () {
			unsubscribe();
			done();
		});
		if (simulateRealTime && action.offsetMillis) {
			setTimeout(function () {
				return testStore.dispatch(action);
			}, action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}
	});

	it('check computedState_click_15 evaluation', function (done) {
		var curState = { 'counter': 7 };
		var action = { 'record': true, 'type': 'click', 'reactId': '.0.0.a', 'tagName': 'BUTTON', 'offsetMillis': 1539 };
		var nextState = { 'counter': 7 };
		_reduxSetup.store.dispatch(action);
		var unsubscribe = _reduxSetup.store.subscribe(function () {
			unsubscribe();
			done();
		});
		if (simulateRealTime && action.offsetMillis) {
			setTimeout(function () {
				return testStore.dispatch(action);
			}, action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}
	});

	it('check computedState_click_17 evaluation', function (done) {
		var curState = { 'counter': 8 };
		var action = { 'record': true, 'type': 'click', 'reactId': '.0.0.a', 'tagName': 'BUTTON', 'offsetMillis': 1807 };
		var nextState = { 'counter': 8 };
		_reduxSetup.store.dispatch(action);
		var unsubscribe = _reduxSetup.store.subscribe(function () {
			unsubscribe();
			done();
		});
		if (simulateRealTime && action.offsetMillis) {
			setTimeout(function () {
				return testStore.dispatch(action);
			}, action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}
	});

	it('check computedState_click_19 evaluation', function (done) {
		var curState = { 'counter': 9 };
		var action = { 'record': true, 'type': 'click', 'reactId': '.0.0.6', 'tagName': 'BUTTON', 'offsetMillis': 1812 };
		var nextState = { 'counter': 9 };
		_reduxSetup.store.dispatch(action);
		var unsubscribe = _reduxSetup.store.subscribe(function () {
			unsubscribe();
			done();
		});
		if (simulateRealTime && action.offsetMillis) {
			setTimeout(function () {
				return testStore.dispatch(action);
			}, action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}
	});

	it('check computedState_click_21 evaluation', function (done) {
		var curState = { 'counter': 8 };
		var action = { 'record': true, 'type': 'click', 'reactId': '.0.0.a', 'tagName': 'BUTTON', 'offsetMillis': 1157 };
		var nextState = { 'counter': 8 };
		_reduxSetup.store.dispatch(action);
		var unsubscribe = _reduxSetup.store.subscribe(function () {
			unsubscribe();
			done();
		});
		if (simulateRealTime && action.offsetMillis) {
			setTimeout(function () {
				return testStore.dispatch(action);
			}, action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}
	});

	it('check computedState_click_23 evaluation', function (done) {
		var curState = { 'counter': 9 };
		var action = { 'record': true, 'type': 'click', 'reactId': '.0.0.a', 'tagName': 'BUTTON', 'offsetMillis': 1492 };
		var nextState = { 'counter': 9 };
		_reduxSetup.store.dispatch(action);
		var unsubscribe = _reduxSetup.store.subscribe(function () {
			unsubscribe();
			done();
		});
		if (simulateRealTime && action.offsetMillis) {
			setTimeout(function () {
				return testStore.dispatch(action);
			}, action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}
	});
});