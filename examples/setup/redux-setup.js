
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import { Reducers, injectTapEventPlugin } from 'redux-devtools-gentest-plugin';

injectTapEventPlugin();

if(window.location.href.match(/[?&]test_recorder=([^&]+)\b/)){
	reducers.testEvents = Reducers.recordEvents;
}

const finalCreateStore = compose(
  applyMiddleware(thunk),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

export default {
	store,
	reducer
}