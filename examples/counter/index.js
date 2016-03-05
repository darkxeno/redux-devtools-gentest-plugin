import React from 'react';
import {default as App} from './containers/App';

let rootComponent = React.render(
  <App />,
  document.getElementById('root')
);

export default rootComponent;
