import React, { Component } from 'react';
import CounterApp from './CounterApp';
import { store, reducer } from '../redux-setup'; 
import { TestMonitor } from 'redux-devtools-gentest-plugin';
import { DevTools, DebugPanel } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <CounterApp />}
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store}
                    monitor={TestMonitor} />
        </DebugPanel>
      </div>
    );
  }
}
