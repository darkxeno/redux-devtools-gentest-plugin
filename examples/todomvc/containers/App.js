import React, { Component } from 'react';
import TodoApp from './TodoApp';
import { Provider } from 'react-redux';
import { store } from '../redux-setup'; 
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { TestMonitor } from 'redux-devtools-gentest-plugin';

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <TodoApp /> }
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store}
                    monitor={TestMonitor} />
        </DebugPanel>
      </div>
    );
  }
}
