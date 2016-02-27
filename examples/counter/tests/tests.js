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

describe('run recorded UI tests', function(){

	this.timeout(60000);
	
	it('check computedState_click_1 evaluation', (done) =>{
		const curState = {"counter":0};
		const action = {"record":true,"type":"click","reactId":".0.0.4","tagName":"BUTTON","offsetMillis":5323};
		const nextState = {"counter":0};
		store.dispatch(action);
		const unsubscribe = store.subscribe(()=>{
			unsubscribe();
			done();
		});
		if( simulateRealTime && action.offsetMillis ){
			setTimeout( ()=>testStore.dispatch(action), action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}

	});

	it('check computedState_click_3 evaluation', (done) =>{
		const curState = {"counter":1};
		const action = {"record":true,"type":"click","reactId":".0.0.4","tagName":"BUTTON","offsetMillis":1645};
		const nextState = {"counter":1};
		store.dispatch(action);
		const unsubscribe = store.subscribe(()=>{
			unsubscribe();
			done();
		});
		if( simulateRealTime && action.offsetMillis ){
			setTimeout( ()=>testStore.dispatch(action), action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}

	});

	it('check computedState_click_5 evaluation', (done) =>{
		const curState = {"counter":2};
		const action = {"record":true,"type":"click","reactId":".0.0.4","tagName":"BUTTON","offsetMillis":1230};
		const nextState = {"counter":2};
		store.dispatch(action);
		const unsubscribe = store.subscribe(()=>{
			unsubscribe();
			done();
		});
		if( simulateRealTime && action.offsetMillis ){
			setTimeout( ()=>testStore.dispatch(action), action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}

	});

	it('check computedState_click_7 evaluation', (done) =>{
		const curState = {"counter":3};
		const action = {"record":true,"type":"click","reactId":".0.0.4","tagName":"BUTTON","offsetMillis":585};
		const nextState = {"counter":3};
		store.dispatch(action);
		const unsubscribe = store.subscribe(()=>{
			unsubscribe();
			done();
		});
		if( simulateRealTime && action.offsetMillis ){
			setTimeout( ()=>testStore.dispatch(action), action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}

	});

	it('check computedState_click_9 evaluation', (done) =>{
		const curState = {"counter":4};
		const action = {"record":true,"type":"click","reactId":".0.0.4","tagName":"BUTTON","offsetMillis":474};
		const nextState = {"counter":4};
		store.dispatch(action);
		const unsubscribe = store.subscribe(()=>{
			unsubscribe();
			done();
		});
		if( simulateRealTime && action.offsetMillis ){
			setTimeout( ()=>testStore.dispatch(action), action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}

	});

	it('check computedState_click_11 evaluation', (done) =>{
		const curState = {"counter":5};
		const action = {"record":true,"type":"click","reactId":".0.0.4","tagName":"BUTTON","offsetMillis":271};
		const nextState = {"counter":5};
		store.dispatch(action);
		const unsubscribe = store.subscribe(()=>{
			unsubscribe();
			done();
		});
		if( simulateRealTime && action.offsetMillis ){
			setTimeout( ()=>testStore.dispatch(action), action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}

	});

	it('check computedState_click_13 evaluation', (done) =>{
		const curState = {"counter":6};
		const action = {"record":true,"type":"click","reactId":".0.0.4","tagName":"BUTTON","offsetMillis":336};
		const nextState = {"counter":6};
		store.dispatch(action);
		const unsubscribe = store.subscribe(()=>{
			unsubscribe();
			done();
		});
		if( simulateRealTime && action.offsetMillis ){
			setTimeout( ()=>testStore.dispatch(action), action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}

	});

	it('check computedState_click_15 evaluation', (done) =>{
		const curState = {"counter":7};
		const action = {"record":true,"type":"click","reactId":".0.0.a","tagName":"BUTTON","offsetMillis":1539};
		const nextState = {"counter":7};
		store.dispatch(action);
		const unsubscribe = store.subscribe(()=>{
			unsubscribe();
			done();
		});
		if( simulateRealTime && action.offsetMillis ){
			setTimeout( ()=>testStore.dispatch(action), action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}

	});

	it('check computedState_click_17 evaluation', (done) =>{
		const curState = {"counter":8};
		const action = {"record":true,"type":"click","reactId":".0.0.a","tagName":"BUTTON","offsetMillis":1807};
		const nextState = {"counter":8};
		store.dispatch(action);
		const unsubscribe = store.subscribe(()=>{
			unsubscribe();
			done();
		});
		if( simulateRealTime && action.offsetMillis ){
			setTimeout( ()=>testStore.dispatch(action), action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}

	});

	it('check computedState_click_19 evaluation', (done) =>{
		const curState = {"counter":9};
		const action = {"record":true,"type":"click","reactId":".0.0.6","tagName":"BUTTON","offsetMillis":1812};
		const nextState = {"counter":9};
		store.dispatch(action);
		const unsubscribe = store.subscribe(()=>{
			unsubscribe();
			done();
		});
		if( simulateRealTime && action.offsetMillis ){
			setTimeout( ()=>testStore.dispatch(action), action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}

	});

	it('check computedState_click_21 evaluation', (done) =>{
		const curState = {"counter":8};
		const action = {"record":true,"type":"click","reactId":".0.0.a","tagName":"BUTTON","offsetMillis":1157};
		const nextState = {"counter":8};
		store.dispatch(action);
		const unsubscribe = store.subscribe(()=>{
			unsubscribe();
			done();
		});
		if( simulateRealTime && action.offsetMillis ){
			setTimeout( ()=>testStore.dispatch(action), action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}

	});

	it('check computedState_click_23 evaluation', (done) =>{
		const curState = {"counter":9};
		const action = {"record":true,"type":"click","reactId":".0.0.a","tagName":"BUTTON","offsetMillis":1492};
		const nextState = {"counter":9};
		store.dispatch(action);
		const unsubscribe = store.subscribe(()=>{
			unsubscribe();
			done();
		});
		if( simulateRealTime && action.offsetMillis ){
			setTimeout( ()=>testStore.dispatch(action), action.offsetMillis);
		} else {
			testStore.dispatch(action);
		}

	});


});
